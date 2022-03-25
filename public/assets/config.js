function inMobile() {
  document.getElementsByTagName('html')[0].style.fontSize =
    (document.documentElement.clientWidth / 450) * 100 + 'px';
}
document.addEventListener('DOMContentLoaded', inMobile);
window.onresize = inMobile;
