/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', event => {
  deferredPrompt = event;
});
butInstall.addEventListener('click', async () => {
  console.log(deferredPrompt);
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const {
      outcome
    } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      deferredPrompt = null;
    }
  }
});
window.addEventListener('appinstalled', event => {
  butInstall.style.display = 'none';
});
/******/ })()
;