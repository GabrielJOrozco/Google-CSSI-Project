
window.addEventListener('mouseup', textSelected);


function textSelected() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        console.log(selectedText);
        let message = {
            text: selectedText
        }
        chrome.runtime.sendMessage(message);
    }
}

