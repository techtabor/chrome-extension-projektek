chrome.browserAction.onClicked.addListener(function(tab) {
    var youtubeUrl = tab.url;
    chrome.tabs.create({url: "https://ytmp3.cc/"}, function(newTab) {
        chrome.tabs.executeScript(newTab.id, { code: `var youtubeUrl = "` + youtubeUrl + `";` }, function(tab3) {
            chrome.tabs.executeScript(newTab.id, { file: "content_script.js" });
        });
    });
    //chrome.tabs.executeScript({file: "content_script.js"})
});
