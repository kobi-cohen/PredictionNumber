// const value="19071";
// const n=document.querySelectorAll('.number');
// const o=document.querySelector('.output');
// // const d=document.querySelector('.del'); // delet button
// let i=0;


// let onClick=()=>{
//     if (value[i]!=undefined){
//        o.textContent+=value[i];
//        i=i+1;
//     }   
// };

// // let del=()=>{
// //     o.textContent=o.textContent.slice(0,length-1);
// // }  // /delete function functionality
// n.forEach(number=>{
//     number.addEventListener('click' , onClick);
// });

// d.addEventListener('click',del);



let value="12345";
const o=document.querySelector('.output');
const n=document.querySelector('.numbers');

const popup=document.querySelector('.popup');
const save=document.querySelector('#btn');
const input=document.querySelector('#input');





let i=0;
let counter=0;

save.addEventListener('click',()=>{
    value=input.value;
    o.textContent='';
    i=0;
    popup.style.display="none";
})
let onClick=()=>{
    if (value[i]!=undefined){
       o.textContent+=value[i];
       i=i+1;
    }   
};

let changeValue=()=>{
    counter++;
    if (counter >=5) {
            popup.style.display="block";
            counter=0;
    } 
}

o.addEventListener('click',changeValue);

  n.addEventListener('click' , onClick);
