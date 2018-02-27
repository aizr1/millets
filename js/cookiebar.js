// Button ID
var buttonId = '#cookie-understand';
// Cookie name
var cookieName = 'lecookie';
// Cookie value
var cookieValue = 'le-cookie1';
// Cookie expire (days)
var cookieExpire = 10;

// When click button, create cookie.
$(document).ready(function(){
    $(buttonId).click(function() {
        console.log("yes");
        if ($.cookie(cookieName) == null){

            // Create the cookie.
            $.cookie(cookieName, cookieValue, { expires: cookieExpire, path: '/' });

            // Hide the alert message.
            $('.cookie-bar').removeClass('cookie-bar--active');
        }
    });

    checkCookie();

    $('body').on('click', '#delete-cookie', function() {

        // Delete the cookie
        $.removeCookie(cookieName, { path: '/' });

        checkCookie();
    });

});

// If no cookie, show the cookie bar.
function checkCookie(){
    if ($.cookie(cookieName) == null) {
        // No cookie = Show cookie bar
        $('.cookie-bar').addClass('cookie-bar--active');
    }
}
