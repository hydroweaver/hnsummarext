//Load local storage image
// background.js calls a script which gets the comment, puts it in local storage and then the sidepanel code/js calls the storage and process the comment --> how its done in chrome extension 

// run script on extension click
// top comments found with a side button image
//Store image in local storage for icon
// side bar opens
// on click of button on each top comment comment passed to side bar for summarisation, if too small says so - Event listener
//In case changes to page, such as more, non main hacker news etc. extension stops
// Side bar logic also checks for depth of the comment and providers a button for you to go down and get summary, so it runs a loop to check depth gets all texts and summarises
// on click for OFF, script needs to be removed too

// Next:
// On clicking a comment if a sub comment is also a big tree, provide buttons for them too
// Chat with accumulated context
// comment written by AI
// Sree accessibility point

https://developer.chrome.com/docs/extensions/reference/api/sidePanel 
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/ai.gemini-on-device-summarization
https://github.com/mozilla/readability?tab=readme-ov-file