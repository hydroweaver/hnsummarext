//fetch comment tree
commentTree = document
  .getElementsByClassName("comment-tree")[0]
  .getElementsByTagName("tr");

//button insertion for each top comment
insertion = '"<button class=\\"summarizerbutton\\">Summarize</button>"'

// Go through each comment head, add a button, button click parses through visible child comments and accumulates in an array until the next comment which has indent = 0 (meaning another head comment is reached)
for (let i = 0; i < commentTree.length; i++) {
  
  //only loop through top comments
  if (commentTree[i].getElementsByTagName("td")[1].getAttribute("indent") == "0") {
    
    //create empty div to later extract button insertion
    empty_div = document.createElement("div");
    empty_div.innerHTML = JSON.parse(insertion);
    
    //add summarize button to each top comment
    commentTree[i]
      .getElementsByClassName("comhead")[0]
      .insertAdjacentElement("afterend", empty_div.querySelector("button"));

      //add listener to each button calling summarizeButtonCommentAccumulator
      commentTree[i].getElementsByClassName("comhead")[0].nextElementSibling.addEventListener("click", (event)=>{
        summarizeButtonCommentAccumulator(event)
      })
  }
}

//clean and accumulate current top comment tree and add text to local storage
function summarizeButtonCommentAccumulator(event){
  
  //get closest top iterable head from clicked event (summarize button) 
  let head = event.target.closest('.athing.comtr')
  
  //initialize accumulator
  let accumulated_comment = []

  //accumulate text from each child comment until another top comment reached (all top comments have indent = 0)
  while(head.nextElementSibling!=null && (Number(head.nextElementSibling.getElementsByTagName("td")[1].getAttribute("indent")) != 0)){
    accumulated_comment.push(head.querySelector(".comment").getElementsByTagName("div")[0].innerHTML)
    head = head.nextElementSibling
  }
  
  //accumulate the trailing comment
  accumulated_comment.push(head.querySelector(".comment").getElementsByTagName("div")[0].innerHTML)
  
  //push to chrome local storage
  chrome.storage.local.set({ comment: accumulated_comment }).then(() => {
    console.log("Comment accumulated to local storage");
  });
}