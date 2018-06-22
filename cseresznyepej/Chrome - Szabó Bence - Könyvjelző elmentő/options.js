window.onload=function() {
	var button_save_options = document.getElementById("save_options");
	var button_erase_options = document.getElementById("erase_options");
	var default_parentId = "1";
	var set_parentId = localStorage["set_parentId"];
	document.getElementById("current").innerHTML = "current: " + set_parentId;
	
	function save_options() {
		set_parentId = document.getElementById("parentId").value;
		localStorage["set_parentId"] = set_parentId;
		if (set_parentId == null) {
			localStorage["set_parentId"] = default_parentId;
		}
		chrome.runtime.reload();
	}
	
	function erase_options() {
		localStorage["set_parentId"] = default_parentId;
		chrome.runtime.reload();
	}

	button_save_options.addEventListener("click", function() {
		save_options();
	});
	button_erase_options.addEventListener("click", function() {
		erase_options();
	});
}
