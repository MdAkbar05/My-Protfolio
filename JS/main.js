let preLoader = document.getElementById("preLoader");

// window.addEventListener("load", function(){
//     preLoader.style.display = "none";
// });

// custom preLoader 
setTimeout(() => {
    preLoader.style.display = "none";
  },1000)


let left = document.getElementById("left");
let right = document.getElementById("right");

let akbar = document.getElementById("akbar");
let arshad = document.getElementById("arshad")


right.addEventListener("click", myRight);
function myRight(){
    akbar.style.transform = " scale(0.5) translateX(-800px)   ";
    arshad.style.transform = " scale(1) translateX(-800px)  ";
    akbar.style.opacity = "0";
    arshad.style.opacity = "3";
}

left.addEventListener("click", myLeft);
function myLeft(){
    let n = 0;
    akbar.style.transform = " scale(1) translateX(0px)";
    arshad.style.transform = " scale(0.5) translateX(0px) ";
    akbar.style.opacity = "3";
    arshad.style.opacity = "0";
}

