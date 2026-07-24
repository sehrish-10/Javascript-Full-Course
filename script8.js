// PRACTICE QUESTION 2
let divs = document.querySelectorAll(".box");
console.log(divs);

// instead of writing these lines again and again, we can simply use loop
divs[0].innerText="sehrish";
divs[1].innerText="Ahmed";
divs[2].innerText="Ali";


// /* // FOR 
let i=1;
for(div of divs){
    console.log(div);
div.innerText=`sehrish${i}`;
i++;

}

