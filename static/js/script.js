var animalContainer = document.querySelector("#animal-info")
var btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    // XMLHttpRequest
    var ourRequest = new XMLHttpRequest();
    /*
    The open() method needs two arguments
    1. whether we want to send data or to get data ( GET or POST )
    2. the url we want to talk to 
    */
    ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json");

    // this method is responsible for what should happen is the data is loaded
    ourRequest.onload = () => {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };

    ourRequest.send();
})

function renderHTML(data){
    var htmlString = ""

    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>"
    }

    // for insertAdjacentHTML
    // the first parameter is the position to insert
    // the second one is the content that you want to insert
    animalContainer.insertAdjacentHTML('beforeend', htmlString)
}

