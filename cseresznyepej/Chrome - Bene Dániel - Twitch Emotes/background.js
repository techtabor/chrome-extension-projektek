
chrome.webNavigation.onCompleted.addListener(function(tab) {
	chrome.storage.local.get(["te_enabled", "te_enabled2", "te_enabled3"], function(result) 	{
		if (result.te_enabled != 0)
		{
			var dynaUpdate = result.te_enabled2;
			var invert = result.te_enabled3;
			var smiley = result.te_enabled4;
			chrome.tabs.executeScript(tab.id, {file:"sad.js"}, function() {
				if (dynaUpdate != 0)
					chrome.tabs.executeScript(tab.id, {code:"setInterval(replaceEmotes, 1000);"});
				if (invert == 1)
					chrome.tabs.executeScript(tab.id, {code:"invert = true;"});
				if (smiley == 0)
					chrome.tabs.executeScript(tab.id, {code:"smiley = false;"});
			});
		}
	});
});