// EVENT LISTENERS
// we can work on same event multiple times due to event listener 
let btn1= document.querySelector("#btn1");


btn1.addEventListener("click", (evt) => {
    console.log("button was cicked -handler1");
    console.log(evt)
});


btn1.addEventListener("click", () => {
    console.log("button was cicked -handler2");
});

const handler3 = () =>{
console.log("button was cicked  -handler3 ");
};


btn1.addEventListener("click", () => {
    console.log("button was cicked -handler4");
});

btn1.removeEventListener("click", handler3);

