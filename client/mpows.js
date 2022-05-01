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

// // Dean Edwards/Matthias Miller/John Resig
// function init() {
//     // quit if this function has already been called
//     if (arguments.callee.done) return;
  
//     // flag this function so we don't do the same thing twice
//     arguments.callee.done = true;
  
//     // kill the timer
//     if (_timer) clearInterval(_timer);
  
//     //Uncomment below if recording page loads.
//     //recordPageLoad();
//   };
  
//   /* for Mozilla/Opera9 */
//   if (document.addEventListener) {
//     document.addEventListener("DOMContentLoaded", init, false);
//   }
  
//   /* for Internet Explorer */
//   /*@cc_on @*/
//   /*@if (@_win32)
//     document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
//     var script = document.getElementById("__ie_onload");
//     script.onreadystatechange = function() {
//       if (this.readyState == "complete") {
//         init(); // call the onload handler
//       }
//     };
//   /*@end @*/
  
//   /* for Safari */
//   if (/WebKit/i.test(navigator.userAgent)) { // sniff
//     var _timer = setInterval(function() {
//       if (/loaded|complete/.test(document.readyState)) {
//         init(); // call the onload handler
//       }
//     }, 10);
//   }
  
//   /* for other browsers */
//   window.onload = init;