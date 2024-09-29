//Selecionar telefone com um clique
function selectText(containerid) {
	if (document.selection) {
		// IE
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select();
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
	}
}

//slides
let totalSlides = document.querySelectorAll(".slide").length;
let currentSlide = 0;
document.querySelector(
	".sliders"
).style.width = `calc(100vw * ${totalSlides} )`;
document.querySelector(".slider-controls").style.height = `${
	document.querySelector(".sliders").clientHeight
}px`;

function goPrev() {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = totalSlides - 1;
	}
	updateMargin();
}
function goNext() {
	currentSlide++;
	if (currentSlide > totalSlides - 1) {
		currentSlide = 0;
	}
	updateMargin();
}

function updateMargin() {
	let bannerWidth = document.querySelector(".banner").clientWidth;
	let newMargin = currentSlide * bannerWidth;
	document.querySelector(".slider-width").style.marginLeft = `-${
		newMargin * 2
	}px`;
	document.querySelector(".ativado").classList.remove("ativado");
	document.querySelector(`.num${currentSlide}`).classList.add("ativado");
}

setInterval(goNext, 7000);

//bolinhas embaixo dos slides
for (let i = 0; i < totalSlides; i++) {
	document.querySelector(
		".sliders-pointers"
	).innerHTML += `<div class="num${i} pointer"></div>`;
}
document.querySelector(".num0").classList.add("ativado");

//aparecer ao ver pela primeira vez
const viewSliders = document.querySelector(".banner");
const observerSliders = new IntersectionObserver((entries) => {
	if (entries[0].isIntersecting === true) {
		document.querySelector(".sliders").style.marginLeft = "0px";
		setTimeout(() => {
			document.querySelector(".sliders").style.opacity = "1";
		}, 1.2);
	}
});
observerSliders.observe(viewSliders);