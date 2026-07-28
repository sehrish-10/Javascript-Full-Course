// PRACTICE QUESTION 1
 
// create a toggle button that changes the screen to dark mode when clicked and vice versa.

let modebtn = document.querySelector("#mode");
let currmode = "light";


modebtn.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
document.querySelector("body").style.backgroundColor = "black";

    }else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }
console.log(currmode);

})


