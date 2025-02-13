// Author: Glorison
// Date: 2025-2-13
// Description: This JavaScript file is a demo for a web page with a dark mode feature.

function showNav() {
    let navUI = document.getElementById('nav');
    navUI.classList.toggle('show');
}

const darkMode = document.getElementById('dark-mode');
darkMode.addEventListener('click', function() {
    document.body.classList.toggle('mode');
    document.a.classList.toggle('mode');
});