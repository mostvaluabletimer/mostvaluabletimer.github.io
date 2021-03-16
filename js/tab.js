let tabs = document.getElementsByClassName("tab");

function toggleActvTab(el, a) {
  let i, tabC = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabC.length; i++) {
    tabC[i].style.display = "none";
    tabC[i].classList.remove('tabflex');
  }

  for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('actvTab');
    }
    // if (screenWidth >1023 && document.body.scrollWidth > 1023) {
    //   document.getElementById(a).style.display = "block";
    // }else {
      document.getElementById(a).classList.add('tabflex');
    // }
  el.classList.add('actvTab');
  // showBtn();
}

let sTab = document.getElementsByClassName("searchTab");

for (let i = 0; i < sTab.length; i++) {
  sTab[i].addEventListener("click", function() {
    this.classList.toggle("activeBtn");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      if (panel.id == 'p0') {
        document.getElementById('p1').style.maxHeight = null;
        if (document.getElementById('b1').classList.contains("activeBtn")) {
          document.getElementById('b1').classList.toggle("activeBtn");
        }
      }else {
        document.getElementById('p0').style.maxHeight = null;
        if (document.getElementById('b0').classList.contains("activeBtn")) {
          document.getElementById('b0').classList.toggle("activeBtn");
        }
      }
    }
  });
}

function dummy(){
  document.getElementById('p1').style.maxHeight = null;
  if (document.getElementById('b1').classList.contains("activeBtn")) {
    document.getElementById('b1').classList.toggle("activeBtn");
  }
  document.getElementById('p0').style.maxHeight = null;
  if (document.getElementById('b0').classList.contains("activeBtn")) {
    document.getElementById('b0').classList.toggle("activeBtn");
  }
}

function closeWindow(el){
  el.parentNode.parentNode.remove();
  hit = hit - hit;
}

document.getElementById('openDon').addEventListener('click', function(){openWindow(this);}, false);

document.getElementById('openPP').addEventListener('click', function(){openWindow(this);}, false);

function cNode(string, type){
  if (type == 0 || type == null) {
    return document.createElement(string);
  }else {
    return document.createTextNode(string);
  }
}
// function openDon(){
//   let parentDiv, itemDiv, h3Title, img1, img2, img3, p1, p2, p3, title, txt1 = '@johngvc', txt2 = 'johngvc@gmail.com', closeSpan, iClose,  src1 = './img/picpay.webp', src2 = './img/paypal.webp', src3 = './img/rops.webp', txt3 = 'ROPS • cutegld@gmail.com (login e email)', t1,t2,t3, title_;
//
//     if (!isIRO) {
//       title = 'Apoie doando';
//     }else {
//       title = 'Support us by donating';
//     }
//
//     parentDiv = cNode('DIV',0);
//     parentDiv.id = 'donating';
//     itemDiv = cNode('DIV',0);
//     itemDiv.classList.add('item');
//     h3Title = cNode('H3',0);
//     img1 = cNode('IMG', 0);
//     img1.src = src1;
//     img1.alt = 'PicPay';
//     img2 = cNode('IMG',0);
//     img2.src = src2;
//     img2.alt = 'PayPal';
//     img3 = cNode('IMG',0);
//     img3.src = src3;
//     img3.alt = 'ROPs';
//     p1 = cNode('P',0);
//     p2 = cNode('P',0);
//     p3 = cNode('P',0);
//     closeSpan = cNode('SPAN',0);
//     closeSpan.id = 'closeDon';
//     iClose = cNode('I',0);
//     iClose.classList.add('fa');
//     iClose.classList.add('fa-times');
//
//     t1 = cNode(txt1,1);
//     t2 = cNode(txt2,1);
//     t3 = cNode(txt3,1);
//     title_ = cNode(title,1);
//
//     h3Title.appendChild(title_);
//     itemDiv.appendChild(h3Title);
//     if (!isIRO) {
//       itemDiv.appendChild(img3);
//       p3.appendChild(t3);
//       itemDiv.appendChild(p3);
//     }
//     itemDiv.appendChild(img1);
//     p1.appendChild(t1);
//     itemDiv.appendChild(p1);
//     itemDiv.appendChild(img2);
//     p2.appendChild(t2);
//     itemDiv.appendChild(p2);
//     closeSpan.appendChild(iClose);
//     itemDiv.appendChild(closeSpan);
//
//     parentDiv.appendChild(itemDiv);
//     body.appendChild(parentDiv);
//
//     closeSpan.addEventListener('click', function(){closeWindow(this);}, false);
//
// }

function openWindow(el){
  let parentDiv = cNode('DIV',0), inner;
  body.appendChild(parentDiv);

  if (el.id == 'openPP') {
    parentDiv.id = 'ppolicy';
    if (!isIRO) {
      inner = '<div class="item"><h3>Declaração de Privacidade</h3><img id="ckMonster" src="./img/cookie.gif" alt="Cookie (vermelho)"><h3>Local Storage</h3><p>O site guarda suas preferências utilizando o Local Storage, não coletando nenhuma informação, assim como os MVPs e Instâncias adicionados.</p><h3>Cookies</h3><p>Para garantir uma melhoria contínua, o MVT coleta informações através de cookies para gerar relatórios no Google Analytics, e servem para identificar visitantes novos ou retornantes, localização e idioma, páginas visitadas, tempo de sessão, sistema operacional, browser, tipo de aparelho e provedor de internet. O MVT também possui plugins do Facebook e são utilizados cookies para facilitar o uso do plugin e outros serviços. Nosso site está hospedado no GitHub Pages, que pode coletar informações de nossos visitantes como endereços de IP. Você pode optar por bloquear cookies em seu Browser, como este <a href="https://www.cookielawinfo.com/ways-to-block-cookies-in-different-browsers/">tutorial</a> mostra. Há sempre a opção de navegar anonimamente para que nenhuma informação seja guardada em seu browser. Porém, algumas funcionalidades poderão ficar indisponíveis.</p><p>Saiba mais:</p><p><a href="https://help.github.com/en/github/site-policy/github-privacy-statement#additional-services">GitHub</a></p><p><a class="" href="https://www.facebook.com/policies/cookies/">Facebook</a></p><p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=en">Google Analytics</a></p><span id="closeThis"><i class="fa fa-times"></i></span></div>';
    }else {
      inner = '<div class="item"><h3>Declaração de Privacidade</h3><img id="ckMonster" src="./img/cookie.gif" alt="Cookie (vermelho)"><h3>Local Storage</h3><p>O site guarda suas preferências utilizando o Local Storage, não coletando nenhuma informação, assim como os MVPs e Instâncias adicionados.</p><h3>Cookies</h3><p>Para garantir uma melhoria contínua, o MVT coleta informações através de cookies para gerar relatórios no Google Analytics, e servem para identificar visitantes novos ou retornantes, localização e idioma, páginas visitadas, tempo de sessão, sistema operacional, browser, tipo de aparelho e provedor de internet. O MVT também possui plugins do Facebook e são utilizados cookies para facilitar o uso do plugin e outros serviços. Nosso site está hospedado no GitHub Pages, que pode coletar informações de nossos visitantes como endereços de IP. Você pode optar por bloquear cookies em seu Browser, como este <a href="https://www.cookielawinfo.com/ways-to-block-cookies-in-different-browsers/">tutorial</a> mostra. Há sempre a opção de navegar anonimamente para que nenhuma informação seja guardada em seu browser. Porém, algumas funcionalidades poderão ficar indisponíveis.</p><p>Saiba mais:</p><p><a href="https://help.github.com/en/github/site-policy/github-privacy-statement#additional-services">GitHub</a></p><p><a class="" href="https://www.facebook.com/policies/cookies/">Facebook</a></p><p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=en">Google Analytics</a></p><span id="closeThis"><i class="fa fa-times"></i></span></div>';
    }

  }else {
    parentDiv.id = 'donating';
    if (!isIRO) {
      inner = '<div class="item"><h3>Apoie doando</h3><img src="./img/rops.webp" alt="ROPs"><p>ROPS • cutegld@gmail.com (login e email)</p><img src="./img/picpay.webp" alt="PicPay"><p>@johngvc</p><img src="./img/paypal.webp" alt="PayPal"><p>johngvc@gmail.com</p><span id="closeThis"><i class="fa fa-times"></i></span></div>';
    }else {
      inner = '<div class="item"><h3>Apoie doando</h3><img src="./img/rops.webp" alt="ROPs"><p>ROPS • cutegld@gmail.com (login e email)</p><img src="./img/picpay.webp" alt="PicPay"><p>@johngvc</p><img src="./img/paypal.webp" alt="PayPal"><p>johngvc@gmail.com</p><span id="closeThis"><i class="fa fa-times"></i></span></div>';
    }
  }
  parentDiv.innerHTML = inner;
  let closeBtn = document.getElementById('closeThis'), ckMonster = document.getElementById('ckMonster');
  closeBtn.addEventListener('click', function(){closeWindow(this);}, false);
  if (ckMonster != null) {
    let hp = Math.ceil(Math.random() * 20);
    ckMonster.addEventListener('mouseup', function(){killCkUp(this, hp);}, false);
    ckMonster.addEventListener('mousedown', function(){killCkDown(this, hp);}, false);
    ckMonster.addEventListener('mouseleave', function(){killCkDown(this, hp);}, false);
    // console.log(hp);
  }

}
