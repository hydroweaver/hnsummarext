# Todo

* ~~background.js calls a script which gets the comment, puts it in local storage and then the sidepanel code/js calls the storage and process the comment --> how its done in chrome extension~~
* ~~run script on extension click~~
* ~~top comments found with a side button image ~~
* ~~side bar opens~~
* ~~on click of button on each top comment comment passed to side bar~~ 
* ~~In case changes to page, such as more, non main hacker news etc. extension stops~~
* ~~on click for OFF, script needs to be removed too~~
* handle markdown response and display correctly in sidepanel
* ~~page change should auto inject script, not by clicking on extension - This needs to be improved~~
* ~~Summarize it if too small says so and display on side bar - Event listener, also same tests are Google extension example~~
* ~~Load local storage image~~

## Later / Won't do
* cleaner code!
* better inbuilt documentation
* Store image in local storage for icon
* Chat with accumulated context
* comment written by AI?
* SRe accessibility point
* Sre idea for extension - whisper local speech model
* Side bar logic also checks for depth of the comment and providers a button for you to go down and get summary, so it runs a loop to check depth gets all texts and summarises
* Page reload should kill the extension or reload it auto, since it does not remove the side bar
* Correct messages for unsupported chrome versions (non canary)
* Time taken to summarize with local
* Next / Previous Comment scroller

## Feedback for Nano
* Local model is very slow as compared to online models
* Model doesn't always return a consistent response, it could be a markdown or simple text, hence markdown rendering can cause issues: On clicking a comment if a sub comment is also a big tree, provide buttons for them too
* *The summary must consist of no more than 5 bullet points. + The summary must be in valid Markdown syntax. TEXT: I have an even better darn grid shader that I use in my graphics projects.<p>The shader in this article wants to emulate the look of a sampled texture so that it blurs to medium gray a*
* *Uncaught (in promise) NotSupportedError: The model attempted to output text in an untested language, and was prevented from doing so.*

## Feedback for Chrome Extensions
* Fix side bar behaviour, users expect side bar to open automatically, asking them for manual intervention kills the point

https://developer.chrome.com/docs/extensions/reference/api/sidePanel 
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.sidepanel-site-specific
https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/ai.gemini-on-device-summarization
https://github.com/mozilla/readability?tab=readme-ov-file