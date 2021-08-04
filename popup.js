console.log("Popup is running");
let content = document.getElementById("sentiment");
console.log(content);

document.addEventListener('DOMContentLoaded', () => {
    let extension = chrome.extension.getBackgroundPage();
    console.log(extension.sentiment.type);
    content.innerHTML = extension.sentiment.type;
});

