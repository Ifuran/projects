const sr = ScrollReveal({
	distance: '65px',
	duration: 2600,			
	reset: true
});
sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:350, origin:'top'});
sr.reveal('.icons', {dealay:450, origin:'left'});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
	navlist.classList.toggle('open');
	menu.classList.toggle('bx-x');
}