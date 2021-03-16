window.addEventListener('load', disableColors, false);
window.addEventListener('load', fnCheck, false);
inputs[6].addEventListener('change', highContrast, false);
inputs[7].addEventListener('change', disableColors, false);

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function(){checkT_(this)}, false);
}

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('change', function(){checkColor(this)}, false);
}

function checkT_(input){
  localStorage.setItem(input.id, input.checked);
}

function checkColor(input){
  if (inputs[7].checked == true) {
    localStorage.setItem(input.id, input.value);
  }
  tutBckg();
}

function tutBckg(){
    for (let i = 0; i < customColors.length; i++) {
      customColors[i].style.backgroundColor = colors[i].value;
    }
}

function fnCheck() {
  for (let i = 0; i < inputs.length; i++) {
    let value = localStorage.getItem(inputs[i].id);


    if (localStorage.checkT == 'true') {
           htabs[2].classList.remove('actvTab');
           document.getElementById('tutBox').style.display = 'none';
           htabs[0].classList.add('actvTab');
             document.getElementById('mvpBox').classList.add('tabflex');
    }

    inputs[i].checked = booleana(value);
    if (i == 6 && booleana(value)) {
      body.classList.add('contrast');
    }
  }

  colorCheck();
  tutBckg();
};

function colorCheck(){
  if (inputs[7].checked == true) {
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
    colors[i].disabled = !booleana((inputs[7].checked).toString());
    if (inputs[7].checked == false) {
      defColor(i);
    }else {
      colorCheck();
    }
  }tutBckg();
}

function defColor(index){
    colors[index].value = defaultColors[index];
}
