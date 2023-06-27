// var socials = document.querySelectorAll('.nav-item.nav-item-social')
// console.log(socials);
// function hiddenSocial(){
//     socials.forEach(element=>{
//     element.classList.add('d-none');
// })
// }
//navbar 
var navbarCollapse = document.querySelector('.navbar-collapse');
var navbar = document.querySelector('#navbar');
var logo = document.querySelector('.navbar-brand img');
var navLink = document.getElementsByClassName('nav-link');
var sticky = navbar.offsetTop +110;

//SCROLL NAVBAR 
function myFunction(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add('bg-white');
    logo.setAttribute('src', './img/logo-dark.png');
    Array.from(navLink).forEach(
      function(navlinks){

        navlinks.classList.add('text-black');
    });
    
  }else {
    navbar.classList.remove('bg-white');
    logo.setAttribute('src', './img/logo-light.png');
    Array.from(navLink).forEach(
      function(navlinks){
        
        navlinks.classList.remove('text-black');
    });
  }
}
  



document.querySelector('.navbar-toggler').addEventListener('click', function() {
  
  
  if (!navbarCollapse.classList.contains('expanding')) {
    navbarCollapse.classList.add('bg-white'); // Set background color when collapsing
    navbarCollapse.classList.add('expanding');
    Array.from(navLink).forEach(
      function(navlinks){

        navlinks.classList.add('text-black');
    });
  } else {
    navbarCollapse.classList.remove('expanding');
    navbarCollapse.classList.remove('bg-white'); // Set default background color
    Array.from(navLink).forEach(
      function(navlinks){
        
        navlinks.classList.remove('text-black');
    });
  }
});


//SCROLL NAVBAR 
function myFunction(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add('bg-white');
    logo.setAttribute('src', './img/logo-dark.png');
    Array.from(navLink).forEach(
      function(navlinks){
        navlinks.classList.add('text-black');
    });
    
  }else {
    navbar.classList.remove('bg-white');
    logo.setAttribute('src', './img/logo-light.png');
    if(!navbarCollapse.classList.contains('expanding')){
    Array.from(navLink).forEach(
      function(navlinks){
        
        navlinks.classList.remove('text-black');
    });
    }
  }
}
  function medialg(x) {
  if (x.matches) { // If media query matches
    if(navbarCollapse.classList.contains('expanding')){
      navbarCollapse.classList.remove('bg-white');
      Array.from(navLink).forEach(
      function(navlinks){
        
        navlinks.classList.remove('text-black');
    });
    
    }
  } else {
    
  }
}
var x = window.matchMedia("(min-width: 990px)")
medialg(x) // Call listener function at run time
x.addListener(medialg) // Attach listener function on state changes

  function mediamd(x) {
  if (x.matches) { // If media query matches
    if(navbarCollapse.classList.contains('expanding')){
      navbarCollapse.classList.add('bg-white');
      Array.from(navLink).forEach(
      function(navlinks){
        
        navlinks.classList.add('text-black');
    });
    }
  } else {
    
  }
}

var x = window.matchMedia("(max-width: 990px)")
mediamd(x) // Call listener function at run time
x.addListener(mediamd) // Attach listener function on state changes
// /navbar


// register
var loginButton   =   document.getElementById('login');
var signupButton  =   document.getElementById('signup');
var closeButton   =   document.getElementById('close');
var closeButton2  =   document.getElementById('close2');
var loginframe    =   document.getElementById('loginframe');
var registerframe =   document.getElementById('registerframe');

var co = false;
var co2 = false;

function login(){
  if(co2 == true){
    registerframe.style.display = "none";
    co2 = false;
  } 
  loginframe.style.display = "block";
  co = true;
}
function register(){
  if(co == true){
    loginframe.style.display = "none";
    co = false;
  }
  registerframe.style.display = "block";
  co2 = true;
}
function close(){
  if(co == true){ 
    loginframe.style.display = "none";
    co = false;
  }
  if(co2 == true){
    registerframe.style.display = "none";
    co2 = false;
  }
}

function goregisterframe(){
  loginframe.style.display = "none";
  co = false;
  if(co2 == false){
    registerframe.style.display = "block";
    co2 = true;
  }

}
function gologinframe(){
  registerframe.style.display = "none";
  co2 = false;
  if(co == false){
    loginframe.style.display = "block";
    co = true;
  }
}
closeButton.addEventListener("click", close);
closeButton2.addEventListener("click", close);
loginButton.addEventListener("click", login);
signupButton.addEventListener("click", register);

var lemail = document.getElementById('lemail');
var lpassword = document.getElementById('lpassword');

var lemailerr = document.querySelector('#lemailerr');
var lpassworderr = document.querySelector('#lpassworderr');
var loginInside = document.querySelector('.login-inside');
function oklogin(){
  if(lemail.value == '' && lpassword.value == ''){
    lemailerr.innerHTML = "empty email!!!";
    lpassworderr.innerHTML = "empty password!!!";
    lemailerr.style.marginBottom = "0px";
    lpassworderr.style.marginBottom = "0px";
    loginInside.style.height = '540px';
    
    return false;
  }else if(lemail.value == ''){
    lemailerr.innerHTML = "empty email!!!";

    lemailerr.style.marginBottom = "0px";
    lpassworderr.innerHTML = "";
    return false;
  }else if(lpassword.value == ''){
    lpassworderr.innerHTML = "empty password!!!";
    lpassworderr.style.marginBottom = "0px";
    lemailerr.innerHTML = "";
    return false;
  }else{
    lemailerr.innerHTML = "";
    lpassworderr.innerHTML = "";
    loginInside.style.height = '530px !important';
    return true;
  } 
  
  
  
  
}
function okregister(){
  console.log("fd");
}