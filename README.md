# Submission for [Google Chrome Built-in AI Challenge](https://googlechromeai.devpost.com/)

✔️ Love hacker news, but can't go through each comment?

✔️ Want to get the gist of the top comment and its replies? 

✔️ Tired of copy pasting text into GPT to get summaries?

🚀Get HN Summariser 🚀

## Quick Demo

[![Hacker News Summarizer using Google Gemini Nano ✨](http://i.ytimg.com/vi/kRb2ENro0xw/hqdefault.jpg)](https://www.youtube.com/watch?v=01IZ-2gbDBU)

## How-to🤔
1. Ensure you are using the correct canary version per the [documentation](https://docs.google.com/document/d/1Bvd6cU9VIEb7kHTAOCtmmHNAYlIZdeNmV7Oy-2CtimA/edit?usp=sharing)
2. Ensure you have the model downloaded 
3. Clone this [repository](https://github.com/hydroweaver/hnsummarext)
4. Navigate to chrome://extensions on chrome canary
5. Click on **Load unpacked** 
6. Select the DIST folder from the cloned repo
7. Once the extension is loaded you will see it extensions list
8. Navigate to [It's okay to Make Something Nobody Wants](https://news.ycombinator.com/item?id=37596513)
9. Right click on the extension icon and clik on "**Open side panel**"
10. You will see **Summarize** buttons appear on top comments, when you click on any of them summary of them will be passed to the local model to summarize
11. 🚀 Enjoy although it's a bit slow and the extension needs lot more work to be user friendly!
12. [Link to Google's summarization API](https://docs.google.com/document/d/1Bvd6cU9VIEb7kHTAOCtmmHNAYlIZdeNmV7Oy-2CtimA/edit?usp=sharing)

*Copied as-is from hackathon submission😅*
## Inspiration
I love spending time on hacker news, but often feel overwhelmed by the number of posts which I have to go through! ChatGPT and the likes are great, but there is a disconnect between moving the text to summary in a different window. Although many nice addons are there.
## What it does
Hacker news summarizer allows your to summarize top comments on the same page using Gemini Nano on device model
## How I built it
Thanks to Google Chrome summarization API and extensions API, information from the page can be passed to the local model for summarization
## Challenges I ran into
* Quality of summarization and presentation of information is still a challenge
* Individual site model summarization still requires bit of DOM manipulation and cannot be carried over to other sites
* Passing messages between side panel and main window, some items still remain
## Accomplishments that I'm proud of
Shipping a local extension, simple to deploy, easy to use. Crisp and to the point, get the top comments and get summary of the discussions
## What we learned
Power of locals models and embedding them wherever we can to help end users ease the pain of information consumption in today's time

## What's next for Hacker News Summarizer / Later / Won't do
* Skip comments which are too small or without major nesting
* Scroll through top comments summaries easily
* Summarize hidden comments not yet loaded
* Escape the side bar and move to conext menu
* Chat with accumulated context
* cleaner code!
* better inbuilt documentation
* Store image in local storage for icon
* Chat with accumulated context, prompt API
* comment written by AI?
* SRe accessibility point
* Sre idea for extension - whisper local speech model
* Side bar logic also checks for depth of the comment and providers a button for you to go down and get summary, so it runs a loop to check depth gets all texts and summarises
* Page reload should kill the extension or reload it auto, since it does not remove the side bar
* Correct messages for unsupported chrome versions (non canary)
* Time taken to summarize with local
* border for text / summary
* clean sidebar when page is changed so older summary is removed
* Next / Previous Comment scroller

## Feedback for Nano
* Local model is very slow as compared to online models
* Model doesn't always return a consistent response, it could be a markdown or simple text, hence markdown rendering can cause issues: On clicking a comment if a sub comment is also a big tree, provide buttons for them too
  * The summary must consist of no more than 5 bullet points. + The summary must be in valid Markdown syntax. TEXT: I have an even better darn grid shader that I use in my graphics projects.<p>The shader in this article wants to emulate the look of a sampled texture so that it blurs to medium gray a*
  * Uncaught (in promise) NotSupportedError: The model attempted to output text in an untested language, and was prevented from doing so.*

## Feedback for Chrome Extensions
* Side bar behaviour can be improved
* users expect side bar to open automatically, manual intervention adds friction