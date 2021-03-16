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
  cortina.style.width = "0";
  cortinaBtn.classList.toggle('rotate');
  dummy();

}
