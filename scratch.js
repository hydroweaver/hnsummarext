//Load local storage image
// background.js calls a script which gets the comment, puts it in local storage and then the sidepanel code/js calls the storage and process the comment --> how its done in chrome extension 

// run script on extension click - Done
// top comments found with a side button image - Done
// side bar opens - Done
// on click of button on each top comment comment passed to side bar - done 
//In case changes to page, such as more, non main hacker news etc. extension stops - Done
// on click for OFF, script needs to be removed too - Done

//handle markdown response and display correctly in sidepanel
//page change should auto inject script, not by clicking on extension - This needs to be improved
//Store image in local storage for icon
//Summarize it if too small says so and display on side bar - Event listener, also same tests are Google extension example

The summary must consist of no more than 5 bullet points.

The summary must be in valid Markdown syntax. TEXT: I have an even better darn grid shader that I use in my graphics projects.<p>The shader in this article wants to emulate the look of a sampled texture so that it blurs to medium gray a

// Side bar logic also checks for depth of the comment and providers a button for you to go down and get summary, so it runs a loop to check depth gets all texts and summarises
//Page reload should kill the extension or reload it auto, since it does not remove the side bar

// Next:
// On clicking a comment if a sub comment is also a big tree, provide buttons for them too
// Chat with accumulated context
// comment written by AI
// SRi accessibility point

https://developer.chrome.com/docs/extensions/reference/api/sidePanel 
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/ai.gemini-on-device-summarization
https://github.com/mozilla/readability?tab=readme-ov-file