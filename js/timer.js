window.addEventListener('load', cardOnLoad, false);
window.addEventListener('load', tickTock, false);

let
vivo, delay, aberta, fiveMin, errTime,
ten2MvpDelay = document.getElementById('tenMinColor'),
five2MvpDelay = document.getElementById('fiveMinColor'),
mvpInDelay = document.getElementById('mvpInDelay'),
mvpBorn = document.getElementById('mvpBorn'),
ten2OpenDun = document.getElementById('tenMinInst'),
five2OpenDun = document.getElementById('fiveMinInst'),
openDun = document.getElementById('openInst');

if (!isIRO) {
  vivo = 'MVP vivo';
  delay = 'MVP em delay';
  aberta = 'Instância livre';
  errTime = 'HORÁRIO INCORRETO';
}else {
  vivo = 'Boss is alive';
  delay = 'Boss on delay';
  aberta = 'Instance can be reopened';
  errTime = 'TIME ERROR';
}


function cardOnLoad(){
  if (!isIRO) {
    if (localStorage.mvp) {
      display.innerHTML = localStorage.getItem('mvp');
    }
    if (localStorage.inst) {
      instDisp.innerHTML = localStorage.getItem('inst');
    }
  }else {
    if (localStorage.mvpIRO) {
      display.innerHTML = localStorage.getItem('mvpIRO');
    }
    if (localStorage.instIRO) {
      instDisp.innerHTML = localStorage.getItem('instIRO');
    }
  }
}

function tickTock(){
  let arr = document.getElementsByClassName('timer_'),
  pInt = document.getElementsByClassName('refresh');
  setInterval(function(){
    for (let i = 0; i < arr.length; i++) {
      let ts1 = (arr[i].parentNode.id)-Date.now(),
       cardBckg = arr[i].parentNode,
       displayId = arr[i].parentNode.parentNode.id,
       img = arr[i].previousSibling.previousSibling,
       src = img.src,
       h3 = arr[i].previousSibling.previousSibling.previousSibling,
       h3name = h3.innerText;

       if (ts1 > 0) {
         if (ts1 > parseInt(pInt[i].id)) {
           arr[i].innerHTML = errTime;
         }
         else {
           timing(ts1,arr[i]);
           if (ts1 < 300000) {
             //5 min

             if (displayId == 'mvpBox') {
               cardBckg.style.backgroundColor = five2MvpDelay.value;
               if (!isIRO) {
                 fiveMin = '5 minutos para o delay do MVP';
               }else {
                 fiveMin = '5 minutes to Boss delay';
               }
             }else {
               cardBckg.style.backgroundColor = five2OpenDun.value;
               if (!isIRO) {
                 fiveMin = '5 minutos para a abertura da instância';
               }else {
                 fiveMin = '5 minutes for Instance to be reopened';
               }
             }
             if (ts1 < 1001 && checkSound.checked == true) {
                audio.play();
             }
             if (ts1 > 299000 && document.getElementById('fiveMinMVP').checked == true) {
               displayNotification(h3name, fiveMin, src);
             }
           }else if (ts1 < 600000) {
             //10 min
            if (displayId == 'mvpBox') {
              cardBckg.style.backgroundColor = ten2MvpDelay.value;

            }else {
              cardBckg.style.backgroundColor = ten2OpenDun.value;
            }
           }else {
             //mt tempo
             cardBckg.style.backgroundColor = white;
           }
         }
       }else {
         let ts12 = ts1*(-1);
         if (displayId == 'mvpBox') {
           if (ts12 < 600000) {
             //delay 10min
             if (ts12 < 1001 && document.getElementById('delayMVP').checked == true) {
               displayNotification(h3name, delay, src);
             }
             cardBckg.style.backgroundColor = mvpInDelay.value;
             timing(ts12,arr[i]);
           }else {
             //finalizdo
             if (ts12 < 601000 && document.getElementById('aliveMVP').checked == true) {
               displayNotification(h3name, vivo, src);
             }
             cardBckg.style.backgroundColor = mvpBorn.value;
             arr[i].innerHTML = vivo.toUpperCase();
           }
         }else {
           //finalizado
           if (ts12 < 1001 && document.getElementById('openDungeon').checked == true) {
             displayNotification(h3name, aberta, src);
           }
           arr[i].innerHTML = aberta.toUpperCase();
           cardBckg.style.backgroundColor = openDun.value;
         }
       }
  }}
  ,1000);
}
