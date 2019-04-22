
let value="123456";
const o=document.querySelector('.output'); // output section
const n=document.querySelector('.numbers'); //numbers section

const popup=document.querySelector('.popup');  // change popup screen
const save=document.querySelector('#btn');  // save button
const input=document.querySelector('#input'); // input field enter value


let i=0; //the first char value.
let counter=0; // indicator variable for click to change the value. 5 click needed.

save.addEventListener('click',()=>{
    value=input.value;
    o.textContent='';
    i=0; // location of the next char in the value.
    popup.style.display="none"; // hide the change screen
})
let onClick=()=>{
    if (value[i]!=undefined){
       o.textContent+=value[i]; //add the next char
       i=i+1;
    }   
};

let changeValue=()=>{
    counter++;
    if (counter >=5) {
            popup.style.display="block"; //show the popup screen
            counter=0;
    } 
}

o.addEventListener('click',changeValue); // change event click

n.addEventListener('click' , onClick); //display the next char screen
