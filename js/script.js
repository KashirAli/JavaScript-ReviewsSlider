const image=document.querySelector('#image');
const names=document.querySelector('#name');
const text_1=document.querySelector('#text-1');
const text_2=document.querySelector('#text-2');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const button = document.querySelector('#button');

data=[{
    name:'Kashir Ali',
    text_1:'Web developer',
    image:'img/img-1.jpg',
    text_2:'i am a developer i am a developer i am a developer i am a developer i am a developer i am a developer i am a developer'
},
{
    name:'Akbar Ali',
    text_1:'Mechanical Engineer',
    image:'img/img-2.jpg',
    text_2:'i am Mechanical Engineer i am Mechanical Engineer i am Mechanical Engineer i am Mechanical Engineer i am Mechanical Engineer i am Mechanical Engineer'
},
{
    name:'Afnan Chaudry',
    text_1:'software Engineer',
    image:'img/img-3.jpg',
    text_2:'i am software Engineer i am software Engineer i am software Engineer i am software Engineer i am software Engineer i am software Engineer' 
},
]
let itemNumber=0;
changeData= function(itemNumber){
    names.textContent=data[itemNumber].name;
    text_1.innerHTML=data[itemNumber].text_1;
    text_2.innerHTML=data[itemNumber].text_2;
    image.src=data[itemNumber].image;
}
next.addEventListener('click',()=>{
    itemNumber=(itemNumber+1)%data.length;
    changeData(itemNumber);
});
prev.addEventListener('click',()=>{
    itemNumber=(itemNumber-1+data.length)%data.length;
    changeData(itemNumber);
});
button.addEventListener('click',()=>{
    itemNumber=Math.floor(Math.random() * 3);
    changeData(itemNumber);
});
