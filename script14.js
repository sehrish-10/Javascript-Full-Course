// Insert New Elements
let newbtn=document.createElement("button");
newbtn.innerText ="click me!";
console.log(newbtn);

// now to put the button on screen, we need to first access it.
// AFTER

let div= document.querySelector("div");
div.after(newbtn)