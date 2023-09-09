document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	overlay = document.querySelector('.menu__overlay'),
	counters = document.querySelectorAll('.metrics__persentage'),
	lines = document.querySelectorAll('.metrics__progressbar span'),
	typingTextElement = document.querySelector('#front-end');

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
		hamburger.classList.add('inactive');
	});

	closeElem.addEventListener('click', () => {
		menu.classList.remove('active');
		hamburger.classList.remove('inactive');
	});

	overlay.addEventListener('click', () => {
		menu.classList.remove('active');
		hamburger.classList.remove('inactive');
	});

	counters.forEach( (item, i) => {
		lines[i].style.width = item.innerHTML;
	});

	function makeTypingText(elem, time) {
		const text = elem.textContent;
		elem.textContent = ' ';
		
		for (let i = 0; i < text.length; i++) {
			setTimeout(sign => {
				elem.textContent += sign;
			}, time * i, text[i]);
		}
	}

	makeTypingText(typingTextElement, 200);
});