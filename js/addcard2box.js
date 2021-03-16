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
      saveMvpCards();
    }else {
      instDisp.appendChild(newCard);
      ncImg.src = "./img/instancias/"+index+".gif";
      saveInstCards();
    }
    //remove a layer de informação
    cardAdd.remove();

    //chama o counter
    // tickTock();
  }
}
