let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const taskbar = document.querySelector(".taskbar");

  if (prevScrollPos > currentScrollPos) {
    // Scroll Up: Reveal the taskbar
    taskbar.style.top = "0";
    taskbar.style.top = "20px"
  } else {
    // Scroll Down: Hide the taskbar
    taskbar.style.top = `-${taskbar.offsetHeight}px`;
    taskbar.style.top = "10px";
  }

  prevScrollPos = currentScrollPos;
};
