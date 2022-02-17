var link = document.querySelector('link[rel=import]');
var content = link.import.querySelector('#repo-content-pjax-container > div.js-navigation-container.js-active-navigation-container.mt-3');
document.body.appendChild(content.cloneNode(true));