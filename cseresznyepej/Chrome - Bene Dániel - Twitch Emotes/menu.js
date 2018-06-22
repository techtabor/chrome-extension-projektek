function saveEnabled()
{
	kippa2.disabled = !kippa.checked;
	kippa3.disabled = !kippa.checked;
	kippa4.disabled = !kippa.checked;
	chrome.storage.local.set({"te_enabled": kippa.checked ? 1 : 0}, function() { });
	chrome.storage.local.set({"te_enabled2": kippa2.checked ? 1 : 0}, function() { });
	chrome.storage.local.set({"te_enabled3": kippa3.checked ? 1 : 0}, function() { 
		chrome.tabs.getAllInWindow(null, function(tabs){
			for (var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, {code:"invert = " + kippa3.checked + ";"});
			}
		});
	});
	chrome.storage.local.set({"te_enabled4": kippa4.checked ? 1 : 0}, function() {
		chrome.tabs.getAllInWindow(null, function(tabs){
			for (var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, {code:"smiley = " + kippa4.checked + ";"});
			}
		});
	});
}
document.addEventListener('DOMContentLoaded', function()
{
	chrome.storage.local.get(["te_enabled", "te_enabled2", "te_enabled3", "te_enabled4"], function(result) 	{
		kippa.checked = true;
		if (result.te_enabled == 0)
			kippa.checked = false;
		kippa2.disabled = !kippa.checked;
		kippa3.disabled = !kippa.checked;
		kippa4.disabled = !kippa.checked;
		kippa2.checked = true;
		if (result.te_enabled2 == 0)
			kippa2.checked = false;
		kippa3.checked = false;
		if (result.te_enabled3 == 1)
			kippa3.checked = true;
		kippa4.checked = true;
		if (result.te_enabled4 == 0)
			kippa4.checked = false;
	});
	kippa.addEventListener('click', saveEnabled);
	kippa2.addEventListener('click', saveEnabled);
	kippa3.addEventListener('click', saveEnabled);
	kippa4.addEventListener('click', saveEnabled);
});