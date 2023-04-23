// Dark & light mode
const darkMode  = document.getElementById('dark-mode') ;
const lightMode = document.getElementById('light-mode') ;
const body      = document.querySelector('body') ;
const myName    = document.getElementById('my-name') ;
// Dark mode => Light mode 
darkMode.addEventListener('click', () =>{
    darkMode.setAttribute('style', 'display: none ;') ;
    lightMode.setAttribute('style', 'display: inline ;') ;
    body.setAttribute('style', 'background: #ECE9E6 ; background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); background: linear-gradient(to right, #FFFFFF, #ECE9E6);  color: #030303 ;') ;
    myName.style.color = 'var(--black-color)' ;
}) ;

// Light mode => Dark mode 
lightMode.addEventListener('click', () =>{
    lightMode.setAttribute('style', 'display: none ;') ;
    darkMode.setAttribute('style', 'display: inline ;') ;
    body.setAttribute('style', 'background: #141E30; background: -webkit-linear-gradient(to right, #141E30, #243B55); background: linear-gradient(to right, #141E30, #243B55);') ;
    myName.style.color = 'var(--text-color)' ;
}) ;
