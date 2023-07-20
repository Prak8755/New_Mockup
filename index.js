function chartShow(){
    let cookieEl = document.getElementById("cookieChart");

const config = {
  type: "bar",
  data: {
    labels: ["20", "","25", "", "30", "","35","", "40", "60"],
    datasets: [
      {
        label:"Income",
        data: [20,40,60,120,150,180,220,240,270,300],
        backgroundColor: [
          "rgb(63, 0, 255)"
        ],
      },
    ],
  },
};

 new Chart(cookieEl, config);
}
chartShow();


// For Input range 
function rangeFirstShow(){
    const slider=document.querySelector('.slider-first');
const output=document.querySelector('.demo-first');

output.innerHTML=`${slider.value}%`;

slider.oninput=function(){
    output.innerHTML=`${this.value}%`;
}
}

rangeFirstShow()

function rangeSecondShow(){
    const slider=document.querySelector('.slider-second');
const output=document.querySelector('.demo-second');

output.innerHTML=`${slider.value}`;

slider.oninput=function(){
    output.innerHTML=`${this.value}`;
}
}

rangeSecondShow();


// Chart circle


function showCircleOne(){
  let number=document.querySelector('.percentage-one');
let counter=0;

setInterval(() => {
 
  if(counter===65){
    clearInterval();
  }
  else{
    counter+=1;
    number.innerHTML=counter+'%';
  }
}, 30);

};

showCircleOne();

function showCircleTwo(){
  let number=document.querySelector('.percentage-two');
let counter=0;

setInterval(() => {
 
  if(counter===95){
    clearInterval();
  }
  else{
    counter+=1;
    number.innerHTML=counter+'%';
  }
}, 20);

};

showCircleTwo();

function showCircleThree(){
  let number=document.querySelector('.percentage-three');
let counter=0;

setInterval(() => {
 
  if(counter===55){
    clearInterval();
  }
  else{
    counter+=1;
    number.innerHTML=counter+'%';
  }
}, 30);

};

showCircleThree();


// Working with navMenu 
function navMenuShow(){
  const navMenu=document.querySelector('.navMain');
const navAll=document.querySelectorAll('.nav-active');

navMenu.addEventListener('click',function(e){
  e.preventDefault();
  navAll.forEach(menu=>{
    menu.classList.remove('bg-nav');
});
  
  
  if(e.target.classList.contains('nav-active')){
    e.target.classList.add('bg-nav');
    
  }
  
})
}
navMenuShow();



function navMenuShowDesktop(){

 const bgNavDesktop=document.querySelector('#navMain-desktop');

const bgNavAllDesktop=document.querySelectorAll('.nav-active');

bgNavDesktop.addEventListener('click',function(e){
  e.preventDefault();
  bgNavAllDesktop.forEach(menu=>{
    menu.classList.remove('bg-nav');
});
  
  if(e.target.classList.contains('nav-active')){
    e.target.classList.add('bg-nav');
    
  }
  
})
}
navMenuShowDesktop();
