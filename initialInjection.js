commentTree = document
  .getElementsByClassName("comment-tree")[0]
  .getElementsByTagName("tr");


insertion = '"<button class=\\"summarizer\\">Summarize</button>"'


for (let i = 0; i < commentTree.length; i++) {
  if (commentTree[i].getElementsByTagName("td")[1].getAttribute("indent") == "0") {
    empty_div = document.createElement("div");
    empty_div.innerHTML = JSON.parse(insertion);
    commentTree[i]
      .getElementsByClassName("comhead")[0]
      .insertAdjacentElement("afterend", empty_div.querySelector("button"));
  }
}