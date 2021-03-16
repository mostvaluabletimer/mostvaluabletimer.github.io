window.addEventListener("load", resize, false);

function resize(){
  let header = document.getElementById("h"),
  footer = document.getElementById("f"),
  header_ = window.getComputedStyle(header, null).height,
  footer_ = window.getComputedStyle(footer, null).height,
  hParse = parseFloat(header_),
  fParse = parseFloat(footer_),
  sumHeight = hParse + fParse,
  sHeight = parseFloat(window.screen.height),
  minHeight = sHeight - sumHeight +"px",
  sWidth = window.screen.width;
  document.getElementById("displaySec").style.minHeight = minHeight;
}

//variaveis e listeners
//global
let body = document.getElementById('b'),
cardsArray,
isIRO = body.classList.contains('iRO'),
mvpSearch_ = document.getElementById('mvpSearch'),
instSearch_ = document.getElementById('instSearch'),
settings_ = document.getElementById("settings");

//limpa a seção
eraser = document.getElementById('eraserBtn');
eraser.addEventListener('click', function(){clear();}, false);

//cores Tutorial
let

htabs = document.getElementsByClassName('tab'),
inputs = settings_.querySelectorAll("input[type='checkbox']"),
colors = settings_.querySelectorAll("input[type='color']"),
//pallete https://colorhunt.co/palette/171612
red = '#ffb6b9',
orange = '#ffd5be',
yellow = '#fee9b2',
white = '#fff',
green = '#a4d4ae',
defaultColors = [green, yellow, orange, red, orange, yellow, green],
customColors = document.getElementsByClassName('customColor');

//localStorage
let display = document.getElementById('mvpBox'),
instDisp= document.getElementById('instBox'),
audio = document.getElementById('mvpJingle'),
checkSound_ = document.getElementById('checkSound');
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
      saveCards('mvp',display);
    }else if (id == 'instBox') {
      elem.parentNode.remove();
      saveCards('inst',instDisp);
    }
  }
}

// reinicia o counter
function refreshItem(elem, checker){
  let id = elem.parentNode.parentNode.id,
  newId, newDesc = document.getElementById(elem.parentNode.id+'edit');
  //NÃO EXCLUIR ESSA PARTE POIS É PRA MVPS E INSTANCIAS QUE RESETAM EM UM HORARIO ESPECIFICO
    // if (typeof checker !== 'undefined') {
    //   newId = parseInt(elem.id);
    // }else {
      newId = (Date.now()+parseInt(elem.id));
    // }
    if (id == 'mvpBox') {
      saveCards('mvp',display);
    }else if (id == 'instBox') {
      saveCards('inst',instDisp);
    }
    //atualiza o id do btn de editar descrição para que seja possível acessar mais tarde, na função abaixo
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
    saveCards('mvp',display);
  }else if (id == 'instBox') {
    saveCards('inst',instDisp);
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
        saveCards('mvp',display);
      }else if (curTab.innerText == tabInst) {
        instDisp.innerHTML = '';
        saveCards('inst',instDisp);
      }
    }
  }
  openMenu();
}

//LOADING
//cookie consent
window.addEventListener('load', function(){setTimeout(ckCheck, 3000);}, false);
function ck(){
  localStorage.setItem('ckConsent', 'dismiss');
}

function ckCheck(){
  if (!localStorage.ckConsent) {
    let ckHtml,
    divCookie = cNode('DIV',0);
    divCookie.id = 'cookie';
    body.appendChild(divCookie);

    if (!isIRO) {
      ckHtml = '<div class=" whiteTxt"><p> No Ragnarok Online, os Cookies nos ajudam a ganhar experiência para ficarmos mais fortes e melhores. Aqui não é diferente; no entanto, ajudam a gente aqui no MVT a melhorar o timer para você! (PS: não conte à Celine que roubamos alguns Cookies da fábrica !)<br> <a href="javascript:void(0)" id="readMore"><b>Saiba mais</b></a></p></div><button class="greenBack" id="btnCookie"> <img src="./img/cookie.gif" alt="Cookie (Vermelho)"><br>Ok!</button>';
    }else {
      ckHtml = "<div class='whiteTxt'><p> On Ragnarok Online, Cookies help us obtain xp to get stronger and better. It's the same here at MVT: they help us improve the timer for you! (PS: Don't tell Celine we rescued some Cookies from the factory!)<br><a href='javascript:void(0)' id='readMore'><b>Read more</b></a></p></div><button class='greenBack' id='btnCookie'><img src='./img/cookie.gif' alt='Cookie (Red)'><br>Ok!</button>";
    }
    divCookie.innerHTML = ckHtml;
    let readMore_ = document.getElementById('readMore'),
    btnCookie_ = document.getElementById('btnCookie');
    readMore_.addEventListener('click', function(){openWindow(this); closeWindow(this);}, false);
    btnCookie_.addEventListener('click', function(){ck(); closeWindow(this);}, false);
  }

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
function saveCards(type, elem){
  let html = elem.innerHTML;
  if (!isIRO) {
    localStorage.setItem(type,html);
  }else {
    localStorage.setItem(type+'IRO',html);
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


let cortinaBtn_ = document.getElementById("cortinaBtn"),
settingsBtn_ = document.getElementById("settingsBtn"),
cortina_ = document.getElementById("cortina"),

circularMenu_ = document.getElementById('circularMenu'),
menuBtn_ = document.getElementById('menuBtn');
cortinaBtn_.addEventListener("click",function(){ openSideBar(this);},false);
settingsBtn_.addEventListener("click",function(){ openSideBar(this);},false);
menuBtn_.addEventListener("click", openMenu,false);

function openMenu(){
	circularMenu_.classList.toggle('active');
}

function open(a){
			a.classList.toggle("rotate");
			if (a.id == 'cortinaBtn') {
				cortina_.style.width = "100vw";
				settings_.style.width = "0";
			}else {
				settings_.style.width = "100vw";
				cortina_.style.width = "0";
				menuBtn_.classList.toggle('darkGrayBack');
			}
}
function close(a){
	if (a.id == 'cortinaBtn') {
		cortina_.style.width = "0";
		dummy();
	}else {
		settings_.style.width = "0";
		menuBtn_.classList.toggle('darkGrayBack');
	}
		a.classList.toggle("rotate");
}

function openSideBar(el){
	if (cortina_.style.width == "100vw" || settings_.style.width == "100vw"){
	    close(el);
		}else {
	    open(el);
			openMenu();
		}
	}

  let customColor_ = document.getElementById('customColor'),
  contraste = document.getElementById('contrast'),
  selectTab_ = document.getElementById('selectTab'),
  checkTu = document.getElementById('checkT');

  window.addEventListener('load', disableColors, false);
  window.addEventListener('load', fnCheck, false);
  contraste.addEventListener('change', highContrast, false);
  customColor_.addEventListener('change', disableColors, false);
  selectTab_.addEventListener('change', function(){setSelectOpt(this);})
  checkTu.addEventListener('change', function(){disableSelect(this);})

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function(){checkT_(this)}, false);
  }

  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('change', function(){checkColor(this)}, false);
  }

  function disableSelect(elem){
    selectTab_.disabled = !elem.checked;
  }
  function checkT_(input){
    localStorage.setItem(input.id, input.checked);
  }

  function checkColor(input){
    if (customColor_.checked == true) {
      localStorage.setItem(input.id, input.value);
    }
    tutBckg();
  }

  function setSelectOpt(select){
    localStorage.setItem(select.id, select.value);
  }

  function tutBckg(){
      for (let i = 0; i < customColors.length; i++) {
        customColors[i].style.backgroundColor = colors[i].value;
      }
  }

  function fnCheck() {
    if (localStorage.checkT == 'true' && localStorage.selectTab) {
           let actvPanel = localStorage.getItem('selectTab'),
           tabActv = document.getElementById(actvPanel+'Tab');
           toggleActvTab(tabActv, actvPanel);
    }else {
      toggleActvTab(document.getElementById('tutBoxTab'), 'tutBox');
      selectTab_.disabled = true;
    }
    selectTab_.value = localStorage.getItem('selectTab');

    if (localStorage.contrast == 'true') {
      body.classList.add('contrast');
    }

    for (let i = 0; i < inputs.length; i++) {
      let value = localStorage.getItem(inputs[i].id);
      inputs[i].checked = booleana(value);
    }

    colorCheck();
    tutBckg();
  };

  function colorCheck(){
    if (customColor_.checked == true) {
      for (let i = 0; i < colors.length; i++) {
        let value = localStorage.getItem(colors[i].id);
        if (value != null) {
          colors[i].value = value;
        }else {
          defColor(i);
        }
      }
    }
  }

  function highContrast() {
    body.classList.toggle('contrast');
  }

  function disableColors(){
    for (let i = 0; i < colors.length; i++) {
      colors[i].disabled = !booleana((customColor_.checked).toString());
      if (customColor_.checked == false) {
        defColor(i);
      }else {
        colorCheck();
      }
    }tutBckg();
  }

  function defColor(index){
      colors[index].value = defaultColors[index];
  }

  window.addEventListener('load', function(){setTimeout(isItIRO, 1000);}, false);

      cardsArray =
      [
        [
          ['Orc Herói','1h','gef_fild03',3600000],
          ['Maya','2h','anthell02 ',7200000],
          ['Maya','8h','gld_dun03 ',28800000],
          ['Maya','8h','gld_dun02_2',28800000],
          ['Senhor dos Orcs','2h','gef_fild10',7200000],
          ['Besouro-ladrão Dourado','1h','prt_sewb4',3600000],
          ['Eddga','2h','pay_fild10',7200000],
          ['Eddga','8h','gld_dun01 ',28800000],
          ['Eddga','8h','gld_dun01_2',28800000],
          ['Osíris','1h','moc_pryd04',3600000],
          ['Amon Ra','1h','moc_pryd06',3600000],
          ['Freeoni','2h','moc_fild17',7200000],
          ['Drácula','1h','gef_dun01',3600000],
          ['Doppelganger','2h','gef_dun02 ',7200000],
          ['Doppelganger','8h','gld_dun02 ',28800000],
          ['Doppelganger','8h','gld_dun04',28800000],
          ['Abelha-rainha','2h','mjolnir_04 ',7200000],
          ['Abelha-rainha','8h','gld_dun02',28800000],
          ['Flor do Luar','1h','pay_dun04 ',3600000],
          ['Flor do Luar','8h','gld_dun01',28800000],
          ['Lady Tanee','7h','ayo_dun02',25200000],
          ['Bafomé','2h','prt_maze03 ',7200000],
          ['Bafomé','8h','gld_dun03',28800000],
          ['Faraó','1h','in_sphinx5',3600000],
          ['Drake','2h','treasure02',7200000],
          ['Cavaleiro da Tempestade','1h','xmas_dun02',3600000],
          ['Boitatá','2h','bra_dun02',7200000],
          ['Leak','2h','dew_dun01',7200000],
          ['Senhor dos Mortos','2:13h','Nifflheim',7980000],
          ['Senhor das Trevas','1h','gl_chyard ',3600000],
          ['Senhor das Trevas','1h','gl_chyard_ ',3600000],
          ['Senhor das Trevas','8h','gld_dun04 ',28800000],
          ['Senhor das Trevas','8h','gld_dun04_2',28800000],
          ['Gorynych','2h','mosk_dun03',7200000],
          ['Lady Branca','1:56h','lou_dun03',6960000],
          ['Hatii','2h','xmas_fild01',7200000],
          ['Ktullanux','2h','ice_dun03',7200000],
          ['Memória de Thanatos','2h','Torre de Thanatos',7200000],
          ['Superaprendiz','2h','teg_dun02',7200000],
          ['Aprendiz','8h','teg_dun01',28800000],
          ['RSX-0806','2:05h','ein_dun02',7500000],
          ['Samurai Encarnado','1:31h','ama_dun03',5460000],
          ['Serpente Suprema','1:34h','gon_dun03',5640000],
          ['Tao Gunka','5h','beach_dun',18000000],
          ['General Tartaruga','1h','tur_dun04',3600000],
          ['Atroce','3h','ra_fild03 ',10800000],
          ['Atroce','5h','ra_fild04 ',18000000],
          ['Atroce','3h','ve_fild01 ',10800000],
          ['Atroce','6h','ve_fild02 ',21600000],
          ['Atroce','8h','gld_dun03_2',28800000],
          ['Kraken','2:20h','iz_dun05',8400000],
          ['Kiel-D-01','2h','kh_dun02',7200000],
          ['Vesper','2h','jupe_core',7200000],
          ['Detardeurus','3h','abyss_03',10800000],
          ['Bispo Decadente','2h','abbey02',7200000],
          ['Pesar Noturno','5h','ra_san05',18000000],
          ['Rainha Scaraba','2h','dic_dun02',7200000],
          ['Rainha Scaraba Dourada','2h','dic_dun03',7200000],
          ['Amon Ra Pesadelo','1h','moc_prydn2',3600000],
          ['Egnigen Cenia','2h','lhz_dun02',7200000],
          ['Valquíria Randgris','8h','odin_tem03',28800000],
          ['Pyuriel Furiosa','8h','gld2_prt',28800000],
          ['General Daehyun','8h','gld2_pay',28800000],
          ['Guardião Morto Kades','8h','gld2_gef',28800000],
          ['Gioia','8h','gld2_ald',28800000],
          ['Ifrit','11h','thor_v03',39600000],
          ['Belzebu','12h','abbey03',43200000],
          ['Bafomé Amaldiçoado','2h','gl_cas02_',7200000],
          ['Morroc Ferido','12h','moc_fild22',43200000],
          ['Vigia do Tempo','2h','c_tower3_',7200000],
          ['Gemaring','1h','lasa_dun01',3600000]

        ],
        [
          ['Memorial dos Orcs','2h',7200000],
          ['Altar do Selo','12h',43200000],
          ['Caverna do Polvo','3h',10800000],
          ['Esgotos de Malangdo','3h',10800000],
          ['Labirinto da Neblina','2h',7200000],
          ['Torneio de Magia','23h',46800000],
          ['Memórias de Sarah','20h',72000000],
          ['Palácio das Mágoas','23h',82800000],
          ['Pesadelo Musical','20h',72000000],
          ['Charleston em Crise','20h',72000000],
          ['Torre do Demônio','23h',82800000],
          ['Maldição de Glast Heim','23h',82800000],
          ['Covil de Vermes','23h',82800000],
          ['Laboratório Central','23h',82800000],
          ['Fábrica do Terror','23h',82800000],
          ['Sala Final','23h',82800000],
          ['Ilha Bios','23h',82800000],
          ['Caverna de Mors','23h',82800000],
          ['Templo do Demônio Rei','23h',82800000],
          ['Ninho de Nidhogg','3d',259200000],
          ['Laboratório de Wolfchev','3d',259200000],
          ['Glast Heim Sombria','70h',252000000],
          ['Torre sem Fim','7d',604800000],
          ['Hospital Abandonado','7d',604800000],
          ['Caverna de Buwaya','7d',604800000],
          ['Lago de Bakonawa','7d',604800000],
          ['Salão de Ymir','16h', 57600000],
          ['Sussurro Sombrio','3d',259200000]
        ]
      ];

      cardsArray2 =
      [
        [
          ['Orc Hero','1h','gef_fild03',3600000],
          ['Maya','2h','anthell02 ',7200000],
          ['Maya','8h','gld_dun03 ',28800000],
          ['Maya','8h','gld_dun02_2',28800000],
          ['Orc Lord','2h','gef_fild10',7200000],
          ['Golden Thief Bug','1h','prt_sewb4',3600000],
          ['Eddga','2h','pay_fild10',7200000],
          ['Eddga','8h','gld_dun01 ',28800000],
          ['Eddga','8h','gld_dun01_2',28800000],
          ['Osiris','1h','moc_pryd04',3600000],
          ['Amon Ra','1h','moc_pryd06',3600000],
          ['Phreeoni','2h','moc_fild17',7200000],
          ['Dracula','1h','gef_dun01',3600000],
          ['Doppelganger','2h','gef_dun02 ',7200000],
          ['Doppelganger','8h','gld_dun02 ',28800000],
          ['Doppelganger','8h','gld_dun04',28800000],
          ['Mistress','2h','mjolnir_04 ',7200000],
          ['Mistress','8h','gld_dun02',28800000],
          ['Moonlight Flower','1h','pay_dun04 ',3600000],
          ['Moonlight Flower','8h','gld_dun01',28800000],
          ['Lady Tanee','7h','ayo_dun02',25200000],
          ['Baphomet','2h','prt_maze03 ',7200000],
          ['Baphomet','8h','gld_dun03',28800000],
          ['Pharaoh','1h','in_sphinx5',3600000],
          ['Drake','2h','treasure02',7200000],
          ['Stormy Knight','1h','xmas_dun02',3600000],
          ['Boitata','2h','bra_dun02',7200000],
          ['Leak','2h','dew_dun01',7200000],
          ['Lord of the Dead','2h 13minh','Nifflheim',7980000],
          ['Dark Lord','1h','gl_chyard ',3600000],
          ['Dark Lord','1h','gl_chyard_ ',3600000],
          ['Dark Lord','8h','gld_dun04 ',28800000],
          ['Dark Lord','8h','gld_dun04_2',28800000],
          ['Gopinch','2h','mosk_dun03',7200000],
          ['White Lady','1h 56minh','lou_dun03',6960000],
          ['Hatii','2h','xmas_fild01',7200000],
          ['Ktullanux','2h','ice_dun03',7200000],
          ['Memory of Thanatos','2h','Torre de Thanatos',7200000],
          ['Supernovice','2h','teg_dun02',7200000],
          ['Novice','8h','teg_dun01',28800000],
          ['RSX-0806','2h 5minh','ein_dun02',7500000],
          ['Samurai Specter','1h 31minh','ama_dun03',5460000],
          ['Evil Snake Lord','1h 34minh','gon_dun03',5640000],
          ['Tao Gunka','5h','beach_dun',18000000],
          ['Turtle General','1h','tur_dun04',3600000],
          ['Atroce','3h','ra_fild03 ',10800000],
          ['Atroce','5h','ra_fild04 ',18000000],
          ['Atroce','3h','ve_fild01 ',10800000],
          ['Atroce','6h','ve_fild02 ',21600000],
          ['Atroce','8h','gld_dun03_2',28800000],
          ['Kraken','2h 20minh','iz_dun05',8400000],
          ['Kiel-D-01','2h','kh_dun02',7200000],
          ['Vesper','2h','jupe_core',7200000],
          ['Detardeurus','3h','abyss_03',10800000],
          ['Fallen Bishop','2h','abbey02',7200000],
          ['Gloom Under Night','5h','ra_san05',18000000],
          ['Scaraba Queen','2h','dic_dun02',7200000],
          ['Golden Scaraba Queen','2h','dic_dun03',7200000],
          ['Nightmare Amon Ra','1h','moc_prydn2',3600000],
          ['Egnigem Cenia','2h','lhz_dun02',7200000],
          ['Valkyrie Randgris','8h','odin_tem03',28800000],
          ['Angry Student Pyuriel','8h','gld2_prt',28800000],
          ['General Daehyun','8h','gld2_pay',28800000],
          ['Dead Guardian Kades','8h','gld2_gef',28800000],
          ['Gioia','8h','gld2_ald',28800000],
          ['Ifrit','11h','thor_v03',39600000],
          ['Beelzebub','12h','abbey03',43200000],
          ['Great Demon Baphomet','2h','gl_cas02_',7200000],
          ['Wounded Morocc','12h','moc_fild22',43200000],
          ['Timeholder','2h','c_tower3_',7200000],
          ['Giant Eggring','1h','lasa_dun01',3600000]

        ],
        [
          ['Orc Memory','2h',7200000],
          ['Sealed Shrine','12h',43200000],
          ['Octopus Cave','3h',10800000],
          ['Malangdo Culvert','3h',10800000],
          ['Hazy Forest','2h',7200000],
          ['Geffen Magic Tournament','23h',46800000],
          ["Sara's Memory",'20h',72000000],
          ['Ghost Palace','23h',82800000],
          ['Nightmarish Jitterbug','20h',72000000],
          ['Charleston Crisis','20h',72000000],
          ["Devil's Tower",'23h',82800000],
          ['Old Glast Heim','23h',82800000],
          ['Faceworm Nest','23h',82800000],
          ['Central Laboratory','23h',82800000],
          ['Horror Toy Factory','23h',82800000],
          ['The Last Room','23h',82800000],
          ['Isle of Bios','23h',82800000],
          ["Morse's Cave",'23h',82800000],
          ['Temple of Demon God','23h',82800000],
          ["Nidhoggur's Nest",'3d',259200000],
          ["Wolfchev's Laboratory",'3d',259200000],
          [0],
          ['Endless Tower','7d',604800000],
          ["Bangungot's Instance",'7d',604800000],
          ["Buwaya's Cave",'7d',604800000],
          ['Bakonawa Extermination','7d',604800000],
          ['Room of Consciousness	','16h', 57600000],
          ['Sky Fortress','3d',259200000],
          ['VIP Summoner', '6h', 21600000],
          ['Airship Raid', '23h', 82800000],
          ['Wave Mode', '23h', 82800000],
          ['Heart Hunter War Base 2', '23h', 82800000],
          ['Werner Laboratory Central Room', '23h', 82800000]
        ]
      ];
  //
  function isItIRO(){
    if (!isIRO) {
      populate(cardsArray, 'adicionar');
    }else {
      populate(cardsArray2, 'add');
    }
  }

  function populate(array, add){
    let
    divEls = [], p1Arr=[], p2Arr=[], h3Arr=[],imgArr=[],btnArr=[],
    p1Txt= [], p2Txt = [], h3Txt=[];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        // console.log('cardsArray2['+i+']['+j+']');
        if (array[i][j].length == 1) {
          continue;
        }

          divEls[j] = document.createElement('DIV'),
          p1Arr[j] = document.createElement('P'),
          h3Arr[j] = document.createElement('H3'),
          imgArr[j] = document.createElement('IMG'),
          btnArr[j] = document.createElement('BUTTON'),
          divEls[j] = cNode('DIV'),
          p1Arr[j] = cNode('P'),
          h3Arr[j] = cNode('H3'),
          imgArr[j] = cNode('IMG'),
          btnArr[j] = cNode('BUTTON'),

          btnTxt = cNode(add, 1),
          h3Txt[j] = cNode(array[i][j][0], 1),
          p1Txt[j] = cNode(array[i][j][1], 1),
          imgArr[j].alt = array[i][0];

          divEls[j].classList.add('box');
          divEls[j].classList.add('item');
          h3Arr[j].classList.add('name');
          p1Arr[j].classList.add('intervalo');
          btnArr[j].classList.add('addCard');
          btnArr[j].classList.add('search');
          btnArr[j].name = j;

          btnArr[j].appendChild(btnTxt);
          p1Arr[j].appendChild(p1Txt[j]);
          h3Arr[j].appendChild(h3Txt[j]);

          divEls[j].appendChild(h3Arr[j]);
          divEls[j].appendChild(imgArr[j]);
          divEls[j].appendChild(p1Arr[j]);
          if (i == 0) {
            p2Arr[j] = cNode('P'),
            p2Txt[j] = cNode(array[i][j][2], 1);
            p2Arr[j].classList.add('mapId');
            p2Arr[j].appendChild(p2Txt[j]);
            divEls[j].appendChild(p2Arr[j]);
          }
          divEls[j].appendChild(btnArr[j]);
          if (i == 0) {
            mvpSearch_.appendChild(divEls[j]);
            imgArr[j].src = "./img/mvp/"+j+".gif";
          }else {
            instSearch_.appendChild(divEls[j]);
            imgArr[j].src = "./img/instancias/"+j+".gif";
          }

          btnArr[j].setAttribute('onclick','addInfo(this);');
      }
    }
  }

  window.addEventListener('load', cardOnLoad, false);
  window.addEventListener('load', tickTock, false);

  let
  vivo, delay, aberta, fiveMin, errTime,
  ten2MvpDelay = document.getElementById('tenMinColor'),
  five2MvpDelay = document.getElementById('fiveMinColor'),
  mvpInDelay_ = document.getElementById('mvpInDelay'),
  mvpBorn_ = document.getElementById('mvpBorn'),
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
        cardBckg.style.order = ts1;
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
               if (ts1 < 1001 && checkSound_.checked == true) {
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
               cardBckg.style.backgroundColor = mvpInDelay_.value;
               timing(ts12,arr[i]);
             }else {
               //finalizdo
               if (ts12 < 601000 && document.getElementById('aliveMVP').checked == true) {
                 displayNotification(h3name, vivo, src);
               }
               cardBckg.style.backgroundColor = mvpBorn_.value;
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

  function ifToggle(elem, attClass) {
    if (document.getElementById(elem).classList.contains(attClass)) {
      document.getElementById(elem).classList.toggle(attClass);
    }
  }

  function toggleActvTab(el, a) {
    let i, tabC = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabC.length; i++) {
      tabC[i].style.display = "none";
      tabC[i].classList.remove('tabflex');
    }

    for (i = 0; i < htabs.length; i++) {
        htabs[i].classList.remove('actvTab');
      }
        document.getElementById(a).classList.add('tabflex');
    el.classList.add('actvTab');
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
          ifToggle('b1', "activeBtn");
        }else {
          document.getElementById('p0').style.maxHeight = null;
          ifToggle('b0', "activeBtn");
        }
      }
    });
  }

  function dummy(){
    document.getElementById('p1').style.maxHeight = null;
    document.getElementById('p0').style.maxHeight = null;
    ifToggle('b1', "activeBtn");
    ifToggle('b0', "activeBtn");
  }

  function closeWindow(el){
    if (el.id == 'btnCookie') {
      el.parentNode.remove();
    }else if(el.id == 'readMore') {
      el.parentNode.parentNode.parentNode.remove();
    }else {
      el.parentNode.parentNode.remove();
      hit = hit - hit;
    }
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

  function openWindow(el){
    let parentDiv = cNode('DIV',0), inner;
    body.appendChild(parentDiv);

    if (el.id == 'openPP' || el.id == 'readMore') {
      parentDiv.id = 'ppolicy';
      if (!isIRO) {
        inner = '<div class="item"><div class = "contentPP"><h3>Declaração de Privacidade</h3><div class="imgContainer"><img id="ckMonster" src="./img/cookie.gif" alt="Cookie (vermelho)"></div><h3>Local Storage</h3><p>O site guarda suas preferências utilizando o Local Storage, não coletando nenhuma informação adicional, assim como os MVPs e Instâncias adicionados.</p><h3>Cookies</h3><p>Para garantir uma melhoria contínua, o MVT coleta informações através de cookies para gerar relatórios no Google Analytics, e servem para identificar visitantes novos ou retornantes, localização e idioma, páginas visitadas, tempo de sessão, sistema operacional, browser, tipo de aparelho e provedor de internet. O MVT também possui plugins do Facebook e são utilizados cookies para facilitar o uso do plugin e outros serviços. Nosso site está hospedado no GitHub Pages, que pode coletar informações de nossos visitantes como endereços de IP. Você pode optar por bloquear cookies em seu Browser, como este <a href="https://www.cookielawinfo.com/ways-to-block-cookies-in-different-browsers/">tutorial</a> mostra. Há sempre a opção de navegar anonimamente para que nenhuma informação seja guardada em seu browser. Porém, algumas funcionalidades poderão ficar indisponíveis.</p><p>Saiba mais:</p><p><a href="https://help.github.com/en/github/site-policy/github-privacy-statement#additional-services">GitHub</a></p><p><a class="" href="https://www.facebook.com/policies/cookies/">Facebook</a></p><p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=en">Google Analytics</a></p></div><span id="closeThis"><i class="fa fa-times"></i></span></div>';
      }else {
        inner = '<div class="item"><div class = "contentPP"><h3>Privacy Statement</h3><div class="imgContainer"><img id="ckMonster" src="./img/cookie.gif" alt="Cookie (red)"></div><h3>Local Storage</h3><p>The site saves your preferences using Local Storage, as well as the added MVPs and Instances, collecting no further information.</p><h3>Cookies</h3><p>To ensure continuous improvement, MVT collects information through cookies to generate reports in Google Analytics, and serves to identify new or returning visitors, location and language, pages visited, session time, operating system, browser, device type, and provider. Internet MVT also has Facebook plugins and cookies are used to facilitate the use of the plugin and other services. Our site is hosted on GitHub Pages, which may collect information from our visitors as IP addresses. You can choose to block cookies in your browser, as this <a href="https://www.cookielawinfo.com/ways-to-block-cookies-in-different-browsers/">tutorial</a> shows. There is always the option of browsing anonymously so that no information is stored in your browser. However, some features may be unavailable.</p><p>Read more:</p><p><a href="https://help.github.com/en/github/site-policy/github-privacy-statement#additional-services">GitHub</a></p><p><a class="" href="https://www.facebook.com/policies/cookies/">Facebook</a></p><p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=en">Google Analytics</a></p></div><span id="closeThis"><i class="fa fa-times"></i></span></div>';
      }

    }else {
      parentDiv.id = 'donating';
      if (!isIRO) {
        inner = '<div class="item"><h3>Apoie doando</h3><img src="./img/rops.webp" alt="ROPs"><p>ROPS • cutegld@gmail.com (login e email)</p><img src="./img/picpay.webp" alt="PicPay"><p>@johngvc</p><img src="./img/paypal.webp" alt="PayPal"><p>johngvc@gmail.com</p><span id="closeThis"><i class="fa fa-times"></i></span></div>';
      }else {
        inner = '<div class="item"><h3>Support by donating</h3><img src="./img/picpay.webp" alt="PicPay"><p>@johngvc</p><img src="./img/paypal.webp" alt="PayPal"><p>johngvc@gmail.com</p><span id="closeThis"><i class="fa fa-times"></i></span></div>';
      }
    }
    parentDiv.innerHTML = inner;
    let closeBtn = document.getElementById('closeThis'), ckMonster = document.getElementById('ckMonster');
    closeBtn.addEventListener('click', function(){closeWindow(this);}, false);
    if (ckMonster != null) {
      let hp = Math.ceil(Math.random() * 20);
      ckMonster.addEventListener('mousedown', function(){killCkUp(this, hp);}, false);
      ckMonster.addEventListener('touchstart', function(){killCkUp(this, hp);}, false);
      ckMonster.addEventListener('mouseup', function(){killCkDown(this, hp);}, false);
      ckMonster.addEventListener('touchend', function(){killCkDown(this, hp);}, false);
      // console.log(hp);
    }
  }

  function addInfo(el){
  let dhmt, curTime, server1, server2, add, description, servidor;
    if (!isIRO) {
      dhmt = 'Data e Hora da Morte/Término';
      curTime = 'Horário Atual';
      server1 = 'bRO-Thor';
      server2 = 'bRO-Valhalla';
      add = 'Adicionar';
      description = 'Descrição (breve)';
      servidor = 'Servidor';
    }else {
      dhmt = 'Death or End Time';
      curTime = 'Current Time';
      server1 = 'iRO-Chaos';
      server2 = 'iRO-Thor';
      add = 'Add';
      description = 'Short description';
      servidor = 'Server';
    }

    let
    h3name = el.parentNode.firstChild.innerHTML,
    body = document.querySelector('BODY'),
    cardAdd = document.createElement('DIV'),
    caItem = document.createElement('DIV'),
    nameAdd = document.createElement('H3'),
    nameAdd_ = document.createTextNode(h3name),
    inputs0 = document.createElement('DIV'),
    p0 = document.createElement('P'),
    p0_ = document.createTextNode(dhmt),
    inputTime = document.createElement('INPUT'),
    inputDay = document.createElement('INPUT'),
    breakLine0 = document.createElement('BR'),
    spanCheck = document.createElement('SPAN'),
    checkTxt = document.createTextNode(curTime),
    inputCheck = document.createElement('INPUT'),
    inputs1 = document.createElement('DIV'),
    p1 = document.createElement('P'),
    p1_ = document.createTextNode(servidor),
    selectServ = document.createElement('SELECT'),
    selOpt0 = document.createElement('OPTION'),
    selOpt0_ = document.createTextNode(server1),
    selOpt1 = document.createElement('OPTION'),
    selOpt1_ = document.createTextNode(server2),
    inputs2 = document.createElement('DIV'),
    p2 = document.createElement('P'),
    p2_ = document.createTextNode(description),
    inputDesc = document.createElement('INPUT'),
    maxL = document.createElement('SPAN'),
    maxL_ = document.createTextNode('25'),
    infoBtn = document.createElement('BUTTON'),
    infoBtn_ = document.createTextNode(add),
    closeInfo = document.createElement('SPAN'),
    iFa = document.createElement('I');

    cardAdd.id = 'cardAdd';
    caItem.classList.add('item');
    inputs0.classList.add('inputs');
    inputTime.id = 'deathTime';
    inputTime.name = 'deathTime';
    inputTime.type = 'time';
    inputTime.placeholder = 'hh:mm (24h)';
    inputDay.placeholder = 'aaaa/mm/dd'
    inputDay.id = 'deathDay';
    inputDay.name = 'deathDay';
    inputDay.type = 'date';
    inputCheck.id = 'dateNow';
    inputCheck.name = 'dateNow';
    inputCheck.type = 'checkbox';
    inputs1.classList.add('inputs');
    selectServ.id = 'deathServer';
    selectServ.classList.add('server');
    inputs2.classList.add('inputs'),
    inputDesc.id = 'deathDesc';
    inputDesc.name = 'deathDesc';
    inputDesc.type = 'text';
    inputDesc.maxLength = '25';
    maxL.classList.add('charRem');
    infoBtn.classList.add('addInfo');
    infoBtn.id = 'btnInfo';
    infoBtn.type = 'button';
    closeInfo.id = 'closeInfo';
    iFa.classList.add('fa');
    iFa.classList.add('fa-times');

    body.appendChild(cardAdd);
    cardAdd.appendChild(caItem);
    caItem.appendChild(nameAdd);
    nameAdd.appendChild(nameAdd_);
    caItem.appendChild(inputs0);
    caItem.appendChild(inputs1);
    caItem.appendChild(inputs2);
    caItem.appendChild(infoBtn);
    infoBtn.appendChild(infoBtn_);
    caItem.appendChild(closeInfo);
    closeInfo.appendChild(iFa);
    inputs0.appendChild(p0);
    p0.appendChild(p0_);
    inputs0.appendChild(inputTime);
    inputs0.appendChild(inputDay);
    inputs0.appendChild(breakLine0);
    inputs0.appendChild(spanCheck);
    spanCheck.appendChild(inputCheck);
    spanCheck.appendChild(checkTxt);
    inputs1.appendChild(p1);
    p1.appendChild(p1_);
    inputs1.appendChild(selectServ);
    selectServ.appendChild(selOpt0);
    selOpt0.appendChild(selOpt0_);
    selectServ.appendChild(selOpt1);
    selOpt1.appendChild(selOpt1_);
    inputs2.appendChild(p2);
    p2.appendChild(p2_);
    inputs2.appendChild(inputDesc);
    inputs2.appendChild(maxL);
    maxL.appendChild(maxL_);

    function showMaxLength(element){
      if(element.value.length > element.maxLength){
          return false;
      }
      maxL.innerHTML = (element.maxLength - element.value.length);
    }

    function infoRmv(){
      cardAdd.remove();
    }

    inputDesc.addEventListener('keyup', function(){showMaxLength(this);});
    closeInfo.addEventListener('click', infoRmv, false);

    infoBtn.addEventListener('click', function(){addCard2Box(el);},false);
    cortina_.style.width = "0";
    cortinaBtn_.classList.toggle('rotate');
    dummy();

  }

  function addCard2Box(el){
    let
    inDesc = document.getElementById('deathDesc'),
    tdate = document.getElementById('deathDay').value,
    ttime = document.getElementById('deathTime').value,
    timeNow = document.getElementById('dateNow'),
    origin = el.parentNode.parentNode.id,
    endTime, indice, ind, cardArray, alertMsg;

    if (!isIRO) {
      alertMsg = 'Por favor, insira a data e/ou horário';
      cardArray = cardsArray;
    }else {
      alertMsg = 'Insert date and/or time';
      cardArray = cardsArray2;
    }

    if (origin == 'mvpSearch') {
      indice = 0;
      ind = 3;
    }else {
      indice = 1;
      ind = 2;
    }

    if (timeNow.checked == true) {
      endTime = Date.now();
    }else {
      endTime = new Date(tdate + ' ' + ttime).getTime();
    }

    if ( (tdate == "" || ttime == "") && !timeNow.checked ) {
      alert(alertMsg);
    }else {
      let dS = document.getElementById('deathServer').value,
      index = el.name,
      newCard = document.createElement('DIV'),
      ncHeader = document.createElement('H3'),
      ncInterval = document.createElement('P'),
      ncImg = document.createElement('IMG'),
      ncTimer = document.createElement('P'),
      ncServer = document.createElement('P'),
      ncDesc = document.createElement('P'),
      ncDelete = document.createElement('P'),
      ncRefresh = document.createElement('P'),
      ncEdit = document.createElement('P'),

      ncName = document.createTextNode(cardArray[indice][index][0]),
      ncInt = document.createTextNode(cardArray[indice][index][1]),

      ncServer_ = document.createTextNode(dS),
      ncDesc_ = document.createTextNode(inDesc.value),
      ncDel = document.createElement('I'),
      ncRef = document.createElement('I'),
      ncEd = document.createElement('I');
      newCard.classList.add('box');
      newCard.classList.add('item');
      ncHeader.classList.add('name');
      ncInterval.classList.add('intervalo');
      ncTimer.classList.add('timer');
      ncTimer.classList.add('timer_');
      ncServer.classList.add('servidor');
      ncDesc.classList.add('description');
      ncDelete.classList.add('delete');
      ncRefresh.classList.add('refresh');
      ncRefresh.id = cardArray[indice][index][ind];
      ncEdit.classList.add('quickEdit');
      ncDel.classList.add('fas');
      ncDel.classList.add('fa-trash-alt');
      ncRef.classList.add('fas');
      ncRef.classList.add('fa-redo');
      ncEd.classList.add('fas');
      ncEd.classList.add('fa-edit');

      ncImg.alt = cardArray[indice][index][0];

      ncHeader.appendChild(ncName);
      ncInterval.appendChild(ncInt);
      ncServer.appendChild(ncServer_);
      ncDesc.appendChild(ncDesc_);
      ncDelete.appendChild(ncDel);
      ncRefresh.appendChild(ncRef);
      ncEdit.appendChild(ncEd);

      newCard.appendChild(ncHeader);
      newCard.appendChild(ncImg);
      newCard.appendChild(ncInterval);
      newCard.appendChild(ncTimer);

      if (origin == 'mvpSearch') {
        let ncMap = document.createElement('P'),
        ncMap_ = document.createTextNode(cardArray[0][index][2]);
        ncMap.classList.add('mapId');
        ncMap.appendChild(ncMap_);
        newCard.appendChild(ncMap);
      }

      newCard.appendChild(ncServer);
      newCard.appendChild(ncDesc);
      newCard.appendChild(ncDelete);
      newCard.appendChild(ncRefresh);
      newCard.appendChild(ncEdit);

      newCard.id = (endTime+cardArray[indice][index][ind]);
      let ncID = newCard.id;
      ncDesc.id = ncID+'edit';

      //funções
      ncRefresh.setAttribute('onclick', 'refreshItem(this);');
      ncDelete.setAttribute('onclick', 'deleteItem(this);');
      ncEdit.setAttribute('onclick', 'editDesc(this);');

      //coloca o tempo (estático);
      let rem = ncID - Date.now();
      if (rem > 0) {
        timing(rem,ncTimer);
      }

      //salva no localstorage e termina e finaliza a construção da card
      if (origin == 'mvpSearch') {
        display.appendChild(newCard);
        ncImg.src = "./img/mvp/"+index+".gif";
        saveCards('mvp',display);
        let temp = document.getElementById(display.id+'Tab');
        toggleActvTab(temp, display.id);
      }else {
        instDisp.appendChild(newCard);
        ncImg.src = "./img/instancias/"+index+".gif";
        saveCards('inst',instDisp);
        let temp = document.getElementById(instDisp.id+'Tab');
        toggleActvTab(temp, instDisp.id);
      }
      //remove a layer de informação
      cardAdd.remove();
    }
  }

  document.getElementById('mvpSearchBar').addEventListener('keyup',function(){lookUp(this);},false);
  document.getElementById('instSearchBar').addEventListener('keyup',function(){lookUp(this);},false);

  function lookUp(input) {
    let h,
    filter = input.value.toUpperCase(),
    mvp = input.nextElementSibling;
    div = mvp.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
     h = div[i].getElementsByTagName("h3")[0];
      if (h.innerHTML.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }
