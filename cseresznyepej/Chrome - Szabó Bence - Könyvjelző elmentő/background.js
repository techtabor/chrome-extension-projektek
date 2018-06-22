var set_parentId = localStorage["set_parentId"];

function add_bookmark() {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs) {
		var current_tab = tabs[0];
		var current_tab_title = current_tab.title;
		var current_tab_url = current_tab.url;
		chrome.bookmarks.create({
			parentId: set_parentId,
			title: current_tab_title,
			url: current_tab_url
		});
	});
}

chrome.contextMenus.create({
	type: "normal",
	visible: true,
	enabled: true,
	title: "Bookmark this page",
	contexts: ['page'],
	id: 'contextMenu',
	onclick: function() {
		add_bookmark();
	}
})

// Keybinding.
chrome.commands.onCommand.addListener(function(command) {
  if(command === "add_bookmark_shortcut") {
	add_bookmark();
  }
});
