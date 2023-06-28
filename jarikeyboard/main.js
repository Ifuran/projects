let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	navlist.classList.toggle('open');
	menu.classList.toggle('bx-x');
};

const sr = ScrollReveal({
	distance: '65px',
	duration: 2600,			
	reset: true
});

sr.reveal('.hero-text', {delay: 100, origin: 'top'});
sr.reveal('.hero-img', {delay: 200, origin: 'top'});
sr.reveal('.icons', {delay: 300, origin: 'left'});
sr.reveal('.chat-us', {delay: 350, origin: 'right'});