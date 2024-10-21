const hackernewsurl = "https://news.ycombinator.com/item";

// On extension button click, side bar should be open and should only be visible on hacker news
//defining side_panel in manifest makes the side panel global and creates problems
let toggle = "OFF";
let tabId;

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.match(hackernewsurl.toString())) {
    tabId = tab.id
    if (toggle == "OFF") {
      toggle = "ON";
      chrome.sidePanel.setOptions({
        tabId: tabId,
        path: "sidepanel/sidepanel.html",
        enabled: true,
      });

      await chrome.sidePanel.open({
        tabId: tabId,
      }).then((val)=>{
        chrome.scripting.executeScript({
          target: {
            tabId: tabId
          },
          files: ["initialInjection.js"]
        })
      })
    } else {
      toggle = "OFF";
      chrome.sidePanel.setOptions({
        tabId: tab.id,
        path: "sidepanel.html",
        enabled: false,
      }).then((val)=>{
        chrome.scripting.executeScript({
          target: {
            tabId: tabId
          },
          files: ["toggleCleanup.js"]
        })
      });
    }
  }
});
