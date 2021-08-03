console.log("Chrome Extension Go")

window.addEventListener('mouseup', textSelected);
function textSelected() {
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);
    if (selectedText.length > 0) {
        console.log("test");
        let message = {
            text: selectedText
        }
        chrome.runtime.sendMessage(message);
    }
}


var deeplearning_url = "https://developer.symanto.net";

chrome.runtime.setUninstallURL('https://cdn.someecards.com/someecards/usercards/f0510e6c1d8d41da1140ed518197acca.png');

function getterm(info,tab) {
    chrome.tabs.create({
        url:deeplearning_url + "/?text=" + info.selectionText
    });
}

chrome.contextMenus.create({
    title: "Analyze \"%s\"",
    contexts: ["selection"],
    onclick: getterm
});

chrome.browserAction.onClicked.addListener(function(activeTab)
    {
    chrome.tabs.create({"url":deeplearning_url}, function(tab) {});
    });



