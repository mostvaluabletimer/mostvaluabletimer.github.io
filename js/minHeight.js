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
