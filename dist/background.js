const hackernewsurl = "https://news.ycombinator.com";

// On extension button click, side bar should be open and should only be visible on hacker news discussion page
// On navigation to another discussion page, script should re-inject or reload (needs work to make it smooth)
// defining side_panel in manifest makes the side panel global and creates problems
let toggle = "OFF";
let tabId;

//run injection when extension clicked
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url) return;
  if (tab.url.match(hackernewsurl)) {
    tabId = tab.id
    //Side bar is not open
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
        //if it's an item page inject script, otherwise don't
        if(tab.url.at(29)=='i'){
          chrome.scripting.executeScript({
            target: {
              tabId: tabId
            },
            files: ["initialInjection.js"]
          })
        }
      })
    } else {
    //Side bar is open
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


//run when tab reloaded or user navigates to another page

//Has unintended effect on new tabs, where this gets injected, but side panel is not opened as it needs manual user input which triggers the previous onclick (Best to right click and open side bar)

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  if(tab.status === 'complete'){
    console.log('Tab loading status is complete', tab.url)
    if (tab.url.match(hackernewsurl) && tab.url.at(29)=='i') {
      //run cleanup to ensure no buttons appear to handle all cases of user-tab behaviour
      chrome.scripting.executeScript({
        target: {
          tabId: tabId
        },
        files: ["toggleCleanup.js"]
      })
      chrome.sidePanel.setOptions({
        tabId: tabId,
        path: "sidepanel/sidepanel.html",
        enabled: true,
      });
      chrome.scripting.executeScript({
        target: {
          tabId: tabId
        },
        files: ["initialInjection.js"]
      })
    }
    else{
      chrome.sidePanel.setOptions({
        tabId: tab.id,
        path: "sidepanel.html",
        enabled: false,
      })
    }
  }
});