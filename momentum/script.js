// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  weekDay = document.querySelector('.weekDay'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  changeImg =document.querySelector('.imgChange');

  
let currentDate = new Date(),
currentHour = currentDate.getHours();

const showAmPm = true;

function showTime() {
  let today = new Date(),
    month = today.getMonth(),
    day = today.getDay(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    if(currentHour!=hour){
      console.log('change time');
      currentHour=hour;
    }

  const amPm = hour >= 12 ? 'PM' : 'AM';

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec

  )} ${showAmPm ? amPm : ''}`;
  weekDay.innerHTML = `${today.toLocaleDateString('ru-RU', { weekday: 'long', month: 'long', day: 'numeric' })}`

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (n/10<=1)?'0'+n:n;
}

function setBgGreet(arr) {
  let today = new Date(),
    hour = today.getHours();

  if (hour>=6 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
    `url(./assets/images/day/${arr[hour]}.jpg)`;
    greeting.textContent = 'Good Evening, ';
  } else if (hour>=12&&hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
    `url(./assets/images/evening/${arr[hour]}.jpg)`;
    greeting.textContent = 'Good Afternoon, ';
  } else if(hour>=18&&hour<24){
    // Evening
    document.body.style.backgroundImage =
      `url(./assets/images/night/${arr[hour-10]}.jpg)`;
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  }
  else if(hour>=0&&hour<6){
    document.body.style.backgroundImage =
      `url(./assets/images/morning/${arr[hour]}.jpg)`;
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = 'white';
    document.querySelector('.quote').style.color = 'black';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null||localStorage.getItem('name')=='') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null||localStorage.getItem('focus') =='') {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

function getImages(){
  let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  for(let i =0;i<19;i++){
    let randNum= Math.ceil(Math.random()*19);
    [arr[i], arr[randNum]] = [arr[randNum], arr[i]];
  }
  return arr;
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run


name.addEventListener('click', event => {
  if (name == null || name=='' || name =='[Enter Name]' ||name.innerHTML=='[Enter Name]') {
    name.textContent = '';
  }
});

focus.addEventListener('click', event => {
  if (focus == null || name=='' || focus =='[Enter Name]' ||focus.innerHTML=='[Enter Focus]') {
    focus.textContent = '';
  }
});

/* испытание кнопки смены изображений */

function makeCounter() {
  var currentCount = 1;
  let today = new Date(),
  hour = today.getHours();
  var stringTime;

  return function() {
    let time = hour+currentCount;
    //добавить обнуление времени для утра!!!!!!!!!!!!!!!!!!!
    if (time>=6 && time < 12) {
      stringTime='day';
    } else if (time>=12&&time < 18) {
      stringTime='evening';
    } else if(time>=18&&time<24){
      stringTime='night';
    }
    else if(time>=0&&time<6){
      stringTime='morning';
    }
      var bgImg = new Image();
      bgImg.onload = function(){
        document.body.style.backgroundImage = 'url(' + bgImg.src + ')';
      };
      bgImg.src = `./assets/images/${stringTime}/${time>19?(time-10):time||time==0?(time+1):time}.jpg`;
    
      return currentCount++
  };
}
var counter = makeCounter();

function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 

/* */



changeImg.addEventListener('click', event => {
  setTimeout(function() {counter();}, 1000);
});



showTime();
setBgGreet(getImages());
getName();
getFocus();

var imagesArr = getImages();

