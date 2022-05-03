//If you're recording page loads, replace this with the url for the
//Lambda function for page loads, after the stack has been created.
const LAMBDA_FUNCTION_URL_PAGE_LOADS = ""; 
//If you want to capture any cookies, put them in this string array.
const COOKIES = {};

function recordPageLoad()
{
    try
    {
        var requestUrl = window.location;

        var request = new XMLHttpRequest();
        request.open('GET', LAMBDA_FUNCTION_URL_PAGE_LOADS + '?request_url=' + requestUrl);
        request.send();
    }
    catch (error)
    {
    }
}

recordPageLoad();

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var addEvent = function (obj, evType, fn){
    if (obj.addEventListener){
            obj.addEventListener(evType, fn, false);
            return true;
    }else if (obj.attachEvent){
            var r = obj.attachEvent("on"+evType, fn);
            return r;
    } else {
            return false;
    }
};

addEvent(window,'load',function () {
    var links = Array.prototype.slice.call(
        document.getElementsByTagName('a')
    );
    
    var count = links.length;
    for(var i = 0; i < count; i++) {
        links[i].addEventListener('click', function(e) {
            alert(`ID: of link: ${e.currentTarget.id} href of link: ${e.currentTarget.href} title of link: ${e.currentTarget.title} class of link: ${e.currentTarget.className} innerHTML of link: ${e.currentTarget.innerHTML}`);
        });
    }
 });