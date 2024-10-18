//Check if model exists (as is from documentation)
// const canSummarize = await ai.summarizer.capabilities();
// let summarizer;
// if (canSummarize && canSummarize.available !== 'no') {
//   if (canSummarize.available === 'readily') {
//     // The summarizer can immediately be used.
//     summarizer = await ai.summarizer.create();
//   } else {
//     // The summarizer can be used after the model download.
//     summarizer = await ai.summarizer.create();
//     summarizer.addEventListener('downloadprogress', (e) => {
//       console.log(e.loaded, e.total);
//     });
//     await summarizer.ready;
//   }
// } else {
//     // The summarizer can't be used at all.
// }



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
                summarizer = await createModel()
                document.querySelector('p.model-status').innerHTML = "Summarization Model Ready for use"
                chrome.storage.onChanged.addListener((localMemory) => {
                    // console.log(localMemory.comment.newValue);
                    let cleanedNewValue = localMemory.comment.newValue
                    console.log(cleanedNewValue.toString().replace(/[^a-zA-Z ]/g, ""))
                    document.getElementsByClassName("summary")[0].innerHTML = localMemory.comment.newValue
                    summarize(cleanedNewValue, summarizer)
                });
            }
            else{
                // The summarizer can be used after the model download.
                summarizer = await createModel()
                summarizer.addEventListener('downloadprogress', (e) => {
                    console.log(e.loaded, e.total);
                });
                await summarizer.ready;
                document.querySelector('p.model-status').innerHTML = "Check documentation for model readiness"
            }
    }
}

useModel()

async function summarize(passedCommentText, summarizerModel) {
    //Need to implemented logic of how much model can take, if summary is needed, etc.
    const summary = await summarizerModel.summarize(passedCommentText)
    document.getElementsByClassName("summary")[0].innerHTML = summary
    // summarizer.destroy(); Seems to be not needed anymore
}