// can use `require('markdown-it')` for CJS
import markdownit from 'markdown-it'
const md = markdownit()

async function modelReadiness(){
    try {
        return await ai.summarizer.capabilities()
    } catch (error) {
        console.log(error)
        return null
    }
}

async function createModel(){
    try {
        return await ai.summarizer.create()
    } catch (error) {
        console.log(error)
        return null
    }
}

async function useModel(){
    const modelReady = await modelReadiness()
    if (modelReady && modelReady.available !== 'no') {
            if (modelReady.available === 'readily') {
                const summarizer = await createModel()
                document.querySelector('p.model-status').innerHTML = "Summarization Model Ready for use"
                chrome.storage.onChanged.addListener((localMemory) => {
                    let rawComment = localMemory.comment.newValue
                    let cleanedComment = rawComment.toString().replace(/[^a-zA-Z ]/g, "")
                    console.log('Comment length is :', cleanedComment.length)
                    if(cleanedComment.length < 200 || cleanedComment.length > 4000){
                        document.getElementsByClassName("summary")[0].innerHTML = "Comment too small (<200 characters) for summarization or too large (>4000 characters)"
                    }
                    else{
                        document.getElementsByClassName("loader")[0].style = `
                                    border: 16px solid #f3f3f3;
                                    border-radius: 50%;
                                    border-top: 16px solid #3498db;
                                    width: 50px;
                                    height: 50px;
                                    animation: spin 2s linear infinite;
                                    `
                        document.getElementsByClassName("summary")[0].innerHTML = rawComment
                        summarize(cleanedComment, summarizer)
                    }
                });
            }
            else{
                // The summarizer can be used after the model download.
                document.querySelector('p.model-status').innerHTML = "Browser not AI capable or check " +"<a href=https://docs.google.com/document/d/1Bvd6cU9VIEb7kHTAOCtmmHNAYlIZdeNmV7Oy-2CtimA/edit?usp=sharing>documentation</a> for model readiness"
                const summarizer = await createModel()
                summarizer.addEventListener('downloadprogress', (e) => {
                    console.log(e.loaded, e.total);
                });
                await summarizer.ready;
            }
    }
}

async function summarize(passedCommentText, summarizerModel) {
    try {
        const summary = await summarizerModel.summarize(passedCommentText)
        document.getElementsByClassName("summary")[0].innerHTML = md.render(summary)
    } catch (error) {
        document.getElementsByClassName("summary")[0].innerHTML = error
    }
    // document.getElementsByClassName("summary")[0].innerHTML = md.render(summary)
    document.getElementsByClassName("loader")[0].style = ''
    // summarizer.destroy(); Seems to be not needed anymore
}

useModel()