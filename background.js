const hackernewsurl = 'https://news.ycombinator.com';

let toggle = "OFF"

// chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
//   if (!tab.url) return;
//   const url = new URL(tab.url);
//   // Enables the side panel on google.com
//   if (url.origin === hackernewsurl) {
//     await chrome.sidePanel.setOptions({
//       tabId,
//       path: 'sidepanel.html',
//       enabled: true
//     });
//   } else {
//     // Disables the side panel on all other sites
//     await chrome.sidePanel.setOptions({
//       tabId,
//       enabled: false
//     });
//   }
// });

// chrome.action.onClicked.addListener(async (tab) => {
//   await chrome.sidePanel.setOptions({path: 'sidepanel.html'}).then(async (val)=>{
//     await chrome.sidePanel.open({
//       tabId: tab.id
//     });
//   });
// });

chrome.action.onClicked.addListener(async (tab) => {
  if(tab.url.match(hackernewsurl.toString())){
    if(toggle=="OFF"){
      toggle = "ON"
      chrome.sidePanel.setOptions({
        tabId:tab.id,
        path: 'sidepanel.html',
        enabled: true,
      });
      
      await chrome.sidePanel.open({
        tabId:tab.id,
      });
  
      chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
    }
    else{
      toggle = "OFF"
      chrome.sidePanel.setOptions({
        tabId:tab.id,
        path: 'sidepanel.html',
        enabled: false,
      });
    }
  }
});


// // chrome.action.onClicked.addListener(async (tab) => {


// // });

// chrome.sidePanel
//   .setPanelBehavior({ openPanelOnActionClick: true })
//   .catch((error) => console.error(error));