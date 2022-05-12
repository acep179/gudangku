//. Navigasi

let navButton = document.getElementById("navButton");

let navButtonClose = document.getElementById("navButtonClose");

let navMenu = document.getElementById("navMenu");

navButton.addEventListener('click', function() {
    
    navButton.setAttribute("class", "bx bx-menu nav-button-hide");
    
    navButtonClose.setAttribute("class", "bx bx-x nav-button-show");

    navMenu.setAttribute("class", "nav-menu nav-menu-show")
    
});

navButtonClose.addEventListener('click', function() {
    
    navButton.setAttribute("class", "bx bx-menu nav-button-show");
    
    navButtonClose.setAttribute("class", "bx bx-x nav-button-hide");

    navMenu.setAttribute("class", "nav-menu")

});

let dropDownButton = document.getElementById("dropDownButton")
