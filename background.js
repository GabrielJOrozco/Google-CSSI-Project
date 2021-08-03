console.log("Background Running");

chrome.runtime.onMessage.addListener(receiver);

window.text = "coding train"
    
function receiver(request, sender, sendResponse) {
    text = request.text;
    console.log(request);

}

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonCLicked(tab) {

}

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


