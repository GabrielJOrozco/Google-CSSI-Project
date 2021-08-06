console.log("Background Running");

chrome.runtime.onMessage.addListener(receiver);
var sentiment;
var buttonState;
var highlightColor;


window.text = "";
    
function receiver(request, sender, sendResponse) {
    // function runs when text is highlighted
    text = request.text;
    console.log(text);
    let encodedURL = getRapidApiUrl(text); 
    if (buttonState) {
        fetch(`https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${encodedURL}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "d72bb4b6d6msh0caae129ae3d3c8p1f0126jsn99cfaccbe9ef",
		    "x-rapidapi-host": "twinword-sentiment-analysis.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        .then(realResponse => {
            console.log(realResponse);
            sentiment = realResponse;
        })
        .catch(err => {
	        console.error(err);
        });
    }
    
}

function getRapidApiUrl(message) {
    let encodedMessage = encodeURI(message);
    return encodedMessage;
  }