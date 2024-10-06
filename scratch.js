x = document.getElementsByClassName("comment-tree")[0].getElementsByTagName("tr")


empty_div.innerHTML = JSON.parse(insertion)

for(let i=0;i<x.length;i++){
    if(x[i].getElementsByTagName("td")[1].getAttribute("indent")=='0'){
        // console.log(x[i].getElementsByClassName("comment").item(0).getElementsByClassName("commtext c00").item(0).innerHTML)
        empty_div.innerHTML = JSON.parse(insertion)
        x[i].getElementsByClassName("comhead")[0].insertAdjacentElement('afterend', empty_div.querySelector('a'))
    }
  }





    y = document.createElement('div')

    y.innerHTML = JSON.parse(insertion)


    x[0].getElementsByClassName("comhead")[0].insertAdjacentElement('afterend',y.querySelector('a'))


    Load local storage image

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