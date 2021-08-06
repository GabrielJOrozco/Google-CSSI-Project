console.log("Popup is running");
let content = document.getElementById("sentiment");
let score = document.getElementById("score");
let toggleSwitch = document.getElementById("toggleSentiment");
let extension;
let buttonOn;
console.log(buttonOn);

document.addEventListener('DOMContentLoaded', () => {
    extension = chrome.extension.getBackgroundPage();
    if (extension.buttonState) {
            toggleSwitch.checked = true;
    }

    if (extension.buttonState) {
        let sentimentAnalysis = extension.sentiment.type;
        let sentimentScore = extension.sentiment.score;
    
        console.log(sentimentAnalysis);
        console.log(sentimentScore);
        changeTextColor(sentimentAnalysis);
        content.innerHTML = sentimentAnalysis;
        score.innerHTML = sentimentScore;
    } else {
        content.innerHTML = "Off";
        score.innerHTML = "0";
    }

    
});

function changeTextColor(analysis) {
    content.className = analysis;
}


toggleSwitch.onclick = () => {
    buttonOn = toggleSwitch.checked;
    extension.buttonState = toggleSwitch.checked;
    if (!buttonOn) {
        content.innerHTML = "OFF";
        score.innerHTML = "0";
        content.className = "black"
        chrome.browserAction.setBadgeText({text: ''});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    } else {
        content.innerHTML = "ON";
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    }
    
}
