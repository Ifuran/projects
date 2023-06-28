let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	navlist.classList.toggle('open');
	menu.classList.toggle('bx-x');
}