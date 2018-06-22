document.querySelectorAll("input#input")[0].setAttribute("value", youtubeUrl)
document.getElementById("submit").click();
window.setTimeout(function(){
    document.getElementById("download").click();
}, 2000)
window.setTimeout(function(){
var dal = document.getElementById("title").innerHTML;
var closetab = confirm(dal + " has started downloading... Do you want to close this tab?")
    if (closetab == true) {
        window.close()
    }
}, 2300)