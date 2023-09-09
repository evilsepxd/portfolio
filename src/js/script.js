const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	hamburger.classList.add('inactive');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	hamburger.classList.remove('inactive');
});

const counters = document.querySelectorAll('.metrics__persentage'),
	lines = document.querySelectorAll('.metrics__progressbar span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});