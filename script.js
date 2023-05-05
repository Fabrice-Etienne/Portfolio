const body        = document.querySelector('body') ;
const myName      = document.getElementById('my-name') ;
const lettersName = ['O', 'R', 'T', 'F', 'O', 'L', 'I', 'O', '.'] ;
let   index       = 0 ;
let   interval ;

// This function displays my full name 
function fullName() {

    if (index < lettersName.length) {
        myName.innerHTML += lettersName[index] ;
        index++;
    }
    else {
        clearInterval(interval);
    }
    
  }
  
  
  myName.addEventListener("mouseover", () => {
    // initializing
    myName.innerHTML = "P";
    myName.style.color = "var(--btn-color)";
    index = 0;
    interval = setInterval(fullName, 100);
  });
  
  myName.addEventListener("mouseout", () => {
    clearInterval(interval);
  });


// Dark & light mode
const darkMode  = document.getElementById('dark-mode') ;
const lightMode = document.getElementById('light-mode') ;
const navLinks  = document.querySelectorAll('.nav-links') ;

// the color of nav links depends of the page the user
let userwebPage = window.location.pathname.replace("/", "") ;

// add a css class for the link of the current page
switch (userwebPage) {
    case 'about.html':
        document.querySelector('a[href="./about.html"]').classList.add('active-link');
        break;
    case 'projects.html':
        document.querySelector('a[href="./projects.html"]').classList.add('active-link');
        break;
    case 'contact.html':
        document.querySelector('a[href="./contact.html"]').classList.add('active-link');
        break;
    default:
        document.querySelector('a[href="./index.html"]').classList.add('active-link');
}

// Dark mode => Light mode 
darkMode.addEventListener('click', () =>{
    darkMode.setAttribute('style', 'display: none ;') ;
    lightMode.setAttribute('style', 'display: inline-block ;') ;
    body.setAttribute('style', 'background: #ECE9E6 ; background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); background: linear-gradient(to right, #FFFFFF, #ECE9E6);  color: #030303 ;') ;
    // change the color of my name 
    myName.style.color = 'var(--black-color)' ;
    // create a loop to change the color of each of the navigation links 
    navLinks.forEach( (navLink) => {
        navLink.style.color = 'var(--black-color)' ;
    });
}) ;

// Light mode => Dark mode 
lightMode.addEventListener('click', () =>{
    lightMode.setAttribute('style', 'display: none ;') ;
    darkMode.setAttribute('style', 'display: inline-block ;') ;
    body.setAttribute('style', 'background: #141E30; background: -webkit-linear-gradient(to right, #141E30, #243B55); background: linear-gradient(to right, #141E30, #243B55);') ;
    myName.style.color = 'var(--text-color)' ;
    // create a loop to change the color of each of the navigation links 
    navLinks.forEach( (navLink) => {
        navLink.style.color = 'var(--text-color)' ;
    });
}) ;

// Slider menu
const navBar = document.querySelector('.nav-bar') ;
const menu   = document.getElementById('menu') ;
menu.addEventListener('click', () =>{
    navBar.classList.toggle('slider') ; 
}) ;

// If user clickon the link projects
const projectsPage = document.getElementById('projects') ;
projectsPage.addEventListener('click', () =>{
    const githubRedirected = confirm('For the moment all my projects are on github. Would you like to be redirected to github ?') ;
    if (githubRedirected){
        location.assign('https://github.com/Fabrice-Etienne?tab=repositories', '_blank') ;
    }

}) ;