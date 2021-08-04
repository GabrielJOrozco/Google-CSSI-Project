console.log("Popup is running");
let content = document.getElementById("sentiment");
let toggleSwitch = document.getElementById("toggleSwitch");
let buttonOn = false;
console.log(content);

document.addEventListener('DOMContentLoaded', () => {
    if (buttonOn) {
        let extension = chrome.extension.getBackgroundPage();

        let sentimentAnalysis = extension.sentiment.type;
        let sentimentScore = extension.sentiment.score;

        console.log(sentimentAnalysis);
        console.log(sentimentScore);
        content.innerHTML = sentimentAnalysis + ",            Score: " + sentimentScore;
    }
});


toggleSwitch.onclick = () => {
    console.log("clicked button");
    if (buttonOn) {
        buttonOn = false;
        console.log("Button on");
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
    } else {
        buttonOn = true;
        chrome.browserAction.setBadgeText({text: 'OFF'});
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
