var mobileTaskbar = document.getElementById('mobileTaskbar');
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        mobileTaskbar.style.top = '0';
    } else {
        mobileTaskbar.style.top = '-60px'; /* Adjust based on taskbar height */
    }
    prevScrollPos = currentScrollPos;
};
