x = document.getElementsByClassName("comment-tree")[0].getElementsByTagName("tr")

empty_div = document.createElement('div')

insertion = '"<a href=\\"https://www.example.com\\"><img src=\\"path_to_image.jpg\\" alt=\\"Image Description\\"></a>"';

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

    Next point is to load side bar on click
