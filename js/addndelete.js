//variaveis e listeners
//global
let body = document.getElementById('b'),
cardsArray,
isIRO = body.classList.contains('iRO'),
mvpSearch = document.getElementById('mvpSearch'),
instSearch = document.getElementById('instSearch');

//limpa a seção
eraser = document.getElementById('eraserBtn');
eraser.addEventListener('click', function(){clear();}, false);
// let mvpClr = document.getElementById('mvpClr'),
// instClr = document.getElementById('instClr');
// mvpClr.addEventListener('click', function(){clear(this);}, false);
// instClr.addEventListener('click', function(){clear(this);}, false);
// window.addEventListener('load', showBtn, false);

//cores Tutorial
let checkTu = document.getElementById('checkT'),
htabs = document.getElementsByClassName('tab'),
inputs = settings.querySelectorAll("input[type='checkbox']"),
colors = settings.querySelectorAll("input[type='color']"),
red = '#ffb6b9',
orange = '#ffd5be',
yellow = '#fee9b2',
white = '#fff',
green = '#a4d4ae',
defaultColors = [green, yellow, orange, red, orange, yellow, green],
customColors = document.getElementsByClassName('customColor');

//pallete https://colorhunt.co/palette/171612



//cookie consent
let btnCookie = document.getElementById('btnCookie'),
divCookie = document.getElementById('cookie');
window.addEventListener('click', ck, false);

//localStorage
let display = document.getElementById('mvpBox'),
instDisp= document.getElementById('instBox'),
audio = document.getElementById('mvpJingle'),
checkSound = document.getElementById('checkSound');
audio.loop = false;

//CARDS
// deleta um card
function deleteItem(elem) {
 let id = elem.parentNode.parentNode.id;
  elem.parentNode.classList.add('animate');
  elem.parentNode.addEventListener('transitionend',function(){del(elem);},false);
  function del(elem){
    if (id == 'mvpBox') {
      elem.parentNode.remove();
      saveMvpCards();
    }else if (id == 'instBox') {
      elem.parentNode.remove();
      saveInstCards();
    }
  }
}

// reinicia o counter
function refreshItem(elem, checker){
  let id = elem.parentNode.parentNode.id,
  newId, newDesc = document.getElementById(elem.parentNode.id+'edit');
    if (typeof checker !== 'undefined') {
      newId = parseInt(elem.id);
    }else {
      newId = (Date.now()+parseInt(elem.id));
    }
    if (id == 'mvpBox') {
      saveMvpCards();
    }else if (id == 'instBox') {
      saveInstCards();
    }
    elem.parentNode.id = newId;
    newDesc.id = newId+'edit';
}

//edita a descrição da card
function editDesc(el){
  let parentBox = el.parentNode.id,
  id = el.parentNode.parentNode.id,
  edit = document.getElementById(parentBox+'edit'),
  pEdit;
  if (!isIRO) {
    pEdit = prompt('Entre a nova descrição (max 25 caracteres)');
  }else {
    pEdit = prompt('Enter new description (max 25 char)');
  }
  if (pEdit != null) {
    if (pEdit.length < 25) {
      edit.innerHTML = pEdit;
    }else {
      edit.innerHTML = pEdit.substring(0,25);
    }
  }
  if (id == 'mvpBox') {
    saveMvpCards();
  }else if (id == 'instBox') {
    saveInstCards();
  }
}

//limpa a box
function clear(){
  let curTab = document.getElementsByClassName('actvTab')[0];
  if (curTab.innerText != "Tutorial") {

    let sure, tabBoss, tabInst;
    if (!isIRO) {
      sure = confirm('Certeza que quer limpar a seção '+curTab.innerText+' ?');
      tabBoss = "MVP's";
      tabInst = 'Instâncias';
    }else {
      sure = confirm('You are about to clear the '+curTab.innerText+' section. Are you sure?');
      tabBoss = "Bosses";
      tabInst = 'Instances';
    }
    if (sure) {
      if (curTab.innerText == tabBoss) {
        display.innerHTML = '';
        saveMvpCards();
      }else if (curTab.innerText == tabInst) {
        instDisp.innerHTML = '';
        saveInstCards();
      }
    }
  }
  openMenu();
}

//LOADING
//cookie consent

function ck(){
  localStorage.setItem('ckConsent', 'dismiss');
  divCookie.style.display = 'none';
}

if (localStorage.ckConsent) {
  divCookie.style.display = 'none';
}

//
// function showBtn(){
//   if (display.classList.contains('tabflex')) {
//     mvpClr.classList.add('show');
//     if (instClr.classList.contains('show')) {
//       instClr.classList.toggle('show');
//     }
//   }else if (instDisp.classList.contains('tabflex')) {
//     instClr.classList.add('show');
//     if (mvpClr.classList.contains('show')) {
//       mvpClr.classList.toggle('show');
//     }
//   }else if (document.getElementById('tutBox').classList.contains('tabflex')) {
//     if (mvpClr.classList.contains('show')) {
//       mvpClr.classList.toggle('show');
//     }else if (instClr.classList.contains('show')) {
//       instClr.classList.toggle('show');
//     }
//   }
// }

//localStorage
function saveMvpCards(){
  if (!isIRO) {
    localStorage.setItem('mvp',display.innerHTML);
  }else {
    localStorage.setItem('mvpIRO',display.innerHTML);
  }
}
function saveInstCards(){
  if (!isIRO) {
    localStorage.setItem('inst',instDisp.innerHTML);
  }else {
    localStorage.setItem('instIRO',instDisp.innerHTML);
  }
}

//roda o contador
function timing(time,element){
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((time % (1000 * 60)) / 1000);
  element.innerHTML = ("0" + days).slice(-2)+"d:"+("0" + hours).slice(-2)+"h:"+("0" + mins).slice(-2)+"m:"+("0" + secs).slice(-2)+"s";
}

//função booleana
function booleana(val){
  return val == 'true';
}

//kill cookie
let hit = 0, idle = './img/cookie.gif', hurt = './img/cookie.png', dead = './img/cookiedead.png';
function killCkUp(el, hp){
  if ((hp-hit) > 0) {
    hit++;
  }

  if ((hp - hit) == 0) {
    el.setAttribute('src', dead);
    console.log('Cookie was defeated with '+hit+' hits!');
  }else {
    el.setAttribute('src', hurt);
  }
}

function killCkDown(el, hp){
  if ((hp - hit) == 0) {
    //
  }else {
    el.setAttribute('src', idle);
  }
}

// ckMonster.addEventListener('mouseup', function(){killCkUp(this);}, false);
// ckMonster.addEventListener('mousedown', function(){killCkDown(this);}, false);
// ckMonster.addEventListener('mouseleave', function(){killCkDown(this);}, false);
