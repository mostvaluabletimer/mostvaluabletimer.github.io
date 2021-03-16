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
