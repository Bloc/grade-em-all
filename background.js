chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
    chrome.tabs.executeScript(null, {file: "content.js"});
 });

 chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        const urls = request.urls;
        urls.forEach(url => {
            chrome.tabs.create({url: url});
        });
    });