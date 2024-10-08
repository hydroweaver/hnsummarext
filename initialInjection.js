commentTree = document
  .getElementsByClassName("comment-tree")[0]
  .getElementsByTagName("tr");


insertion = '"<button class=\\"summarizerbutton\\">Summarize</button>"'


for (let i = 0; i < commentTree.length; i++) {
  if (commentTree[i].getElementsByTagName("td")[1].getAttribute("indent") == "0") {
    empty_div = document.createElement("div");
    empty_div.innerHTML = JSON.parse(insertion);
    commentTree[i]
      .getElementsByClassName("comhead")[0]
      .insertAdjacentElement("afterend", empty_div.querySelector("button"));
  }
}

//GET BUTTONS AND ADD LISTENER AND REMOVE LATER DUDE!
for (let i = 0; i < commentTree.length; i++) {
  if (commentTree[i].getElementsByTagName("td")[1].getAttribute("indent") == "0") {
    empty_div = document.createElement("div");
    empty_div.innerHTML = JSON.parse(insertion);
    commentTree[i]
      .getElementsByClassName("comhead")[0]
      .insertAdjacentElement("afterend", empty_div.querySelector("button"));
  }
}




//Button needs to call this code on click handler - How?
function summarizeButtonCommentAccumulator(buttonHead){
  let head = buttonHead.closest('.athing.comtr') //     head = $0.closest('.athing.comtr')
  let accumulated_comment = []
  while (Number(head.nextElementSibling.getElementsByTagName("td")[1].getAttribute("indent")) != 0) {
    accumulated_comment.push(head.querySelector(".comment").getElementsByTagName("div")[0].innerHTML)
    console.log(Number(head.getElementsByTagName("td")[1].getAttribute("indent")),head);
    head = head.nextElementSibling
  }
  accumulated_comment.push(head.querySelector(".comment").getElementsByTagName("div")[0].innerHTML)
}