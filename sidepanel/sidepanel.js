chrome.storage.onChanged.addListener((localMemory) => {
    console.log(localMemory.comment.newValue);
    document.getElementsByClassName("summary")[0].innerHTML = localMemory.comment.newValue
  });