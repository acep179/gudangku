//. Navigasi

let navButton = document.getElementById("navButton");

let navButtonClose = document.getElementById("navButtonClose");

let navMenu = document.getElementById("navMenu");

navButton.addEventListener('click', function() {
    
    navButton.setAttribute("class", "bx bx-menu nav-button-hide");
    
    navButtonClose.setAttribute("class", "bx bx-x nav-button-show");

    navMenu.setAttribute("class", "nav-menu nav-menu-show");
    
});

navButtonClose.addEventListener('click', function() {

    navButton.setAttribute("class", "bx bx-menu nav-button-show");
    
    navButtonClose.setAttribute("class", "bx bx-x nav-button-hide");

    navMenu.setAttribute("class", "nav-menu");

});

//. Hero Dropdown

let dropDownButton = document.getElementById("dropDownButton");

let dropDownUl = document.getElementById("dropDownUl");

dropDownButton.addEventListener('click', function(){

    dropDownButton.classList.toggle("drop-down-button");
    dropDownUl.classList.toggle("drop-down-ul");
});

//. Smooth Scroll Menggunakan JQuery + Close Navbar pada SmartPhone

$('.page-scroll').on('click', function(e) {

    navButton.setAttribute("class", "bx bx-menu nav-button-show");
    
    navButtonClose.setAttribute("class", "bx bx-x nav-button-hide");

    navMenu.setAttribute("class", "nav-menu");

    dropDownButton.classList.toggle("drop-down-button");
    dropDownUl.classList.toggle("drop-down-ul");

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 80
    }, 1000);

    e.preventDefault();
   });


//. Form ke Google Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbxugr8PJSOZ0tGYkYmtgGKydtz0r8t95JJSO5dzT6QAUf2X6ODKvbANw3t9zErUgT5bHQ/exec'
  const form = document.forms['gudangku-contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })