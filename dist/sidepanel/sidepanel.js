// can use `require('markdown-it')` for CJS

//model returns summary in markdown (not always!), so to render on side panel
import markdownit from 'markdown-it'
const md = markdownit()

//use local gemini nano model to summarize
async function useModel(){

    //check readiness
    const modelReady = await modelReadiness()

    if (modelReady && modelReady.available !== 'no') {

            //documentation refers to 'readily' status as usable
            if (modelReady.available === 'readily') {

                //create summarizer if model available
                const summarizer = await createModel()
                document.querySelector('p.model-status').innerHTML = "Summarization Model Ready for use"

                //Event fired on chrome storage from initialinjection.js
                chrome.storage.onChanged.addListener((localMemory) => {

                    //get last change in storage
                    let rawComment = localMemory.comment.newValue

                    //strip all special chars
                    let cleanedComment = rawComment.toString().replace(/[^a-zA-Z ]/g, "")
                    console.log('Comment length is :', cleanedComment.length)

                    //sanity
                    if(cleanedComment.length < 200 || cleanedComment.length > 4000){
                        document.getElementsByClassName("summary")[0].innerHTML = "Comment too small (<200 characters) for summarization or too large (>4000 characters)"
                    }
                    //loader while waiting for summarizer to return
                    else{
                        document.getElementsByClassName("loader")[0].style = `
                                    border: 16px solid #f3f3f3;
                                    border-radius: 50%;
                                    border-top: 16px solid #3498db;
                                    width: 50px;
                                    height: 50px;
                                    animation: spin 2s linear infinite;
                                    `
                        //display comment taken from main page as - is
                        document.getElementsByClassName("summary")[0].innerHTML = rawComment

                        //send cleaned comment to summarizer
                        summarize(cleanedComment, summarizer)
                    }
                });
            }
    }

    //handle (?) if browser not support or model not downloaded (for Canary only)
    else{
        // The summarizer can be used after the model download.
        document.querySelector('p.model-status').innerHTML = "Browser not AI capable or check " +"<a href=https://docs.google.com/document/d/1Bvd6cU9VIEb7kHTAOCtmmHNAYlIZdeNmV7Oy-2CtimA/edit?usp=sharing>documentation</a> for model readiness | Console error shown below"
        const summarizer = await createModel()
        summarizer.addEventListener('downloadprogress', (e) => {
            console.log(e.loaded, e.total);
        });
        await summarizer.ready;
    }
}

//pass to summarizer, get summary and render in markdown
async function summarize(passedCommentText, summarizerModel) {
    try {
        const summary = await summarizerModel.summarize(passedCommentText)
        document.getElementsByClassName("summary")[0].innerHTML = md.render(summary)
    } catch (error) {
        document.getElementsByClassName("summary")[0].innerHTML = error
    }

    //remove loader
    document.getElementsByClassName("loader")[0].style = ''
    // summarizer.destroy(); Seems to be not needed anymore
}

async function modelReadiness(){
    try {
        return await ai.summarizer.capabilities()
    } catch (error) {
        console.log(error)
        document.getElementsByClassName("summary")[0].innerHTML = error
        return null
    }
}

async function createModel(){
    try {
        return await ai.summarizer.create()
    } catch (error) {
        console.log(error)
        document.getElementsByClassName("summary")[0].innerHTML = error
        return null
    }
}

useModel()