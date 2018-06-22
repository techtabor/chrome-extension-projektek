chrome.browserAction.onClicked.addListener(function(tab) {
	/*var currenttab=tab.id;
	var paragraphs=document.getElementsByTagName("p");
	chrome.windows.create({url:currenttab.url});*/
	var maxWidth = Math.round(window.screen.availWidth);
	var maxHeight = Math.round(window.screen.availHeight);
	chrome.windows.getCurrent(function(wind) {
		var updateInfo = {
		   left: 0,
		   top: 0,
		   width: Math.round(maxWidth*2/3),
		   height: maxHeight
		};
		chrome.windows.update(wind.id, updateInfo);
	});
	nowUrl=tab.url;
	magassag=Math.round(maxHeight/2);
	szeles=Math.round(maxWidth/3);
	if(fut==false){
		chrome.windows.create({url:"teszt.html", height:Math.round(maxHeight/2), width:Math.round(maxWidth/3), left:Math.round(maxWidth*2/3), top:0, type:"popup"});
		setInterval(function(){futMarEgyszer()}, 3000);
	}
	//chrome.tabs.executeScript(tab.id,{file: "content_script.js"});
	//chrome.windows.create({ url: chrome.runtime.getURL("teszt.html"), width: 320, height: 480})
});
var myUrl="";
var nowUrl="";
var magassag=0;
var szeles=0;
var time=0;
var myId=-1;
var fut=false;
var enTime=0;
chrome.tabs.onActivated.addListener(function(activeInfo) {
	
	
		/*chrome.windows.create({'url': 'redirect.html', 'type': 'popup'}, function(window) {
			myId=window.tabId;
		});*/
	console.log("activate:"+activeInfo.tabId)
	chrome.windows.getLastFocused(function(window){
		console.log(window.tabId);
	})
});
function futMarEgyszer()
{
	if(enTime!=time)
	{
		enTime=time;
		fut=true;
	}
	else
	{
		fut=false;
		time=0;
		entime=0;
	}
}