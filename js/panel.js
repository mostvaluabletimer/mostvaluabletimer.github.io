let cortinaBtn = document.getElementById("cortinaBtn"),
settingsBtn = document.getElementById("settingsBtn"),
cortina = document.getElementById("cortina"),
settings = document.getElementById("settings"),
circularMenu = document.getElementById('circularMenu'),
menuBtn = document.getElementById('menuBtn');
cortinaBtn.addEventListener("click",function(){ openSideBar(this);},false);
settingsBtn.addEventListener("click",function(){ openSideBar(this);},false);
menuBtn.addEventListener("click", openMenu,false);

function openMenu(){
	circularMenu.classList.toggle('active');
}

function open(a){
			a.classList.toggle("rotate");
			if (a.id == 'cortinaBtn') {
				cortina.style.width = "100vw";
				settings.style.width = "0";
			}else {
				settings.style.width = "100vw";
				cortina.style.width = "0";
				menuBtn.classList.toggle('darkGrayBack');
			}
}
function close(a){
	if (a.id == 'cortinaBtn') {
		cortina.style.width = "0";
		dummy();
	}else {
		settings.style.width = "0";
		menuBtn.classList.toggle('darkGrayBack');
	}
		a.classList.toggle("rotate");
}

function openSideBar(el){
	if (cortina.style.width == "100vw" || settings.style.width == "100vw"){
	    close(el);
		}else {
	    open(el);
			openMenu();
		}
	}
