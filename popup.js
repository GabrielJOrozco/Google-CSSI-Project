console.log("Popup is running");
let content = document.getElementById("sentiment");
let toggleSwitch = document.getElementById("toggleSentiment");
let extension;
let buttonOn;
console.log(buttonOn);

document.addEventListener('DOMContentLoaded', () => {
    extension = chrome.extension.getBackgroundPage();
    if (extension.buttonState) {
            toggleSwitch.checked = true;
    }

    let sentimentAnalysis = extension.sentiment.type;
    let sentimentScore = extension.sentiment.score;

    console.log(sentimentAnalysis);
    console.log(sentimentScore);
    content.innerHTML = sentimentAnalysis + ",            Score: " + sentimentScore;
});


toggleSwitch.onclick = () => {
    buttonOn = toggleSwitch.checked;
    extension.buttonState = toggleSwitch.checked;
    if (!buttonOn) {
        chrome.browserAction.setBadgeText({text: ''});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    } else {
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    }

    /*if (buttonOn) {
        console.log("Button on");
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    } else {
        chrome.browserAction.setBadgeText({text: 'OFF'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    } */
    
}
