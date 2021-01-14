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
    console.log(ourData[0])
};

ourRequest.send();