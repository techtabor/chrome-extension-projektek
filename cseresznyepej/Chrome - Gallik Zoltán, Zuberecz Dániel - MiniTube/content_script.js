var szamol=true;
var bg = chrome.extension.getBackgroundPage();
var iframe=document.getElementsByTagName("iframe")[0];
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    var oldURL = bg.myUrl;
    //document.getElementById("teszt").innerText=oldURL;
    //document.getElementById("teszt").onclick=videoClick;
    console.log("script:"+tabs[0].tabId);
    /*if(oldURL!="")
    {
        video.src="https://www.youtube.com/embed/"+szoveg;
        return;
    }*/
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    //chrome.windows.create({url:tab.url});
    var video=document.getElementById("video");
    video.height=bg.magassag*0.8;
    video.width=bg.szeles*0.9;
    video.onclick=videoClick;
    var szoveg="";
    var link=bg.nowUrl;
    if(link.indexOf("www.youtube.com/watch")<0)
     {
         if(oldURL=="")
         {
             //video.clientWidth="1";
             //video.clientHeight="1";
             document.getElementById("vidszov").innerHTML="Először youtube oldalt nyiss meg!";
             return;
         }
         var ido = bg.time - 10;
         ido = ido < 0 ? 0 : ido;
         bg.time=ido;
        video.src="https://www.youtube.com/embed/"+oldURL+"?start="+ido.toString()+"&autoplay=1";
        setInterval(function(){interval()}, 2000);
        return;
     }
    var mehet=false;
    for (let i = 0; i < link.length; i++) {
        if(link[i] == 'v' && link[i + 1] == '=' && mehet == false)
        {
            i++;
            mehet=true;
            continue;
        }
        if(mehet == true)
        {
            if(link[i]=='&')
            {
                i=link.length;
            }
            else
            {
                szoveg += link[i];
            }
        }
    }
    if(szoveg==oldURL)
    {
        var ido = bg.time - 10;
        ido = ido < 0 ? 0 : ido;
        bg.time=ido;
       video.src="https://www.youtube.com/embed/"+oldURL+"?start="+ido.toString()+"&autoplay=1";
       setInterval(function(){interval()}, 2000);
       return;
    }
    video.src="https://www.youtube.com/embed/"+szoveg+"?autoplay=1";
    bg.myUrl=szoveg;
    bg.time=0;
    setInterval(function(){interval()}, 1000);
});
function interval()
{
    if(szamol)
    {
        bg = chrome.extension.getBackgroundPage();
        bg.time+=2;
        //document.getElementById("teszt").innerText=bg.time;
    }
}
function videoClick()
{
    bg.time=0;
}
document.getElementById("video").contentWindow.document.body.onclick = function() {
        document.getElementById("video").contentWindow.location.reload();
    }