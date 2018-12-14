let container = document.querySelector('.container');
let level = 1;
let counter = 0 ;
let iconSame = [];
let btn = document.querySelector('.btn');
let clock = document.querySelector('.clock');
let timer = document.querySelector('.timer');
let timerS = 0 ;
let win = 0 ;

btn.addEventListener('click', start );

function start(){
    addListener();
    this.style.display = "none";
    time();
}

function time(){
let t = setInterval( function(){
    timerS++ ;
    timer.style.height = `${timerS}px`;
    if(timer.style.height == '800px') {
    btn.style.display = "block";
    btn.style.background = "red";
    btn.innerHTML = "" ; 
    let text = `<p>G</p><p>A</p><p>M</p><p>E</p><p></p><p>O</p><p>V</p><p>E</p><p>R</p><p>!</p>`;
    btn.innerHTML = text ; 
    clearInterval(t);
    removeListener();
    } else if (win==8){
        clearInterval(t);
        removeListener();
        btn.style.display = "block";
        btn.style.background = "limegreen";
        btn.innerHTML = "" ; 
        let text = `<p>Y</p><p>O</p><p>U</p><p>W</p><p>O</p><p>N</p><p>!</p><p>!</p>`;
        btn.innerHTML = text ; 
    }
},75);
}

function grid(times){
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.width = `${200*times}px` ;
    boxes[i].style.height = `${200*times}px`;
    back[i].style.width = `${200*times}px` ;
    back[i].style.height = `${200*times}px` ;
    front[i].style.width = `${200*times}px` ;
    front[i].style.height = `${200*times}px` ;
    }
}
    
function create(n){
let text = '';
for (let i = 0; i < 16*n; i++) {
    let icn = Math.floor(Math.random()*icons.length);
    text += `<div id="${i}" class="box">  <div class="back"> ${icons[icn]} </div> <div class="front"> </div>  </div>` ;
    
    icons.splice(icn,1);
    }
container.innerHTML = text ;
}

create(1);

let boxes = document.querySelectorAll('.box');
let back = document.querySelectorAll('.back');
let front = document.querySelectorAll('.front');

// arrey za addEventListener, zato sto na boxes ne moze splice method
let test = [];
for (let i = 0; i < boxes.length; i++) {
    test.push(boxes[i]);
    }
//////////////////////////////////////////////////////////////////////


grid(1);

function game(){
this.removeEventListener('click', game);
iconSame.push(this);

let front = this.querySelector('.front');
let back = this.querySelector('.back');
front.style.transform = 'perspective(800px) rotateY(-180deg)'; 
back.style.transform = 'perspective(800px) rotateY(0)'; 
counter ++ ;

  if(counter == 2){
 check();
 counter = 0 ; 
 
  }
 }

 function check(){
  if (iconSame[0].innerHTML == iconSame[1].innerHTML) {
    test.splice(iconSame[0].id,1);
    test.splice(iconSame[1].id,1);
      win ++ ;
      iconSame = [];   
      addListener();
  } else {
    removeListener();
      setTimeout(function(){
        iconSame[0].querySelector('.front').style.transform = 'perspective(800px) rotateY(0)';
        iconSame[0].querySelector('.back').style.transform = 'perspective(800px) rotateY(-180deg)';
        iconSame[1].querySelector('.front').style.transform = 'perspective(800px) rotateY(0)';
        iconSame[1].querySelector('.back').style.transform = 'perspective(800px) rotateY(-180deg)';
        iconSame = [];
        addListener();
      } ,700);
  }
} 
   
function addListener(){
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('click', game);
        
    }
}

function removeListener(){
    for (let i = 0; i < test.length; i++) {
        test[i].removeEventListener('click', game);
        
    }
}


