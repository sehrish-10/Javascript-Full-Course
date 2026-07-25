// QUESTION 2
let newbtn=document.createElement("button");
newbtn.innerText="click me!";
newbtn.style.color="white";
newbtn.style.backgroundColor="pink";

document.querySelector("body").prepend(newbtn);




//we want to add a new class with the existing one so for that we dont use setAttibute property
// cause setAttribute is used to overwrite the pervious one and we dont want that so we use

// CLASSLIST



let para=document.querySelector("p");
para.classList.add("newClass");

para.classList.remove("newClass");