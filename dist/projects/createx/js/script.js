$(document).ready(function(){
	$('.promo__slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		draggable: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnDotsHover: true,
		nextArrow: '<img src="icons/slider-btn.svg" alt="next-btn" class="slick-next slick-arrow">',
		prevArrow: '<img src="icons/slider-btn.svg" alt="prev-btn" class="slick-prev slick-arrow">',
		appendDots: '.promo__slider-dots'
	});

	const slickDotsContainer = document.querySelectorAll('.slick-dots li button');
	slickDotsContainer.forEach(dot => {
		dot.textContent = '0' + dot.textContent;
	});


	$('.projects__slider').slick({
		autoplay: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		variableWidth: true,
		nextArrow: '<div class="projects__arrow projects__arrow_next arrow arrow_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/></svg></div>',
		prevArrow: '<div class="projects__arrow projects__arrow_prev arrow arrow_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/></svg></div>',
		appendArrows: '.projects__arrows'
	});

	const projectsArrows = document.querySelectorAll('.projects__arrow');
	projectsArrows.forEach(arrow => {
		arrow.style.display = 'flex';
	});

	$('.clients__slider').slick({
		autoplay: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<div class="clients__arrow clients__arrow_next arrow arrow_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/></svg></div>',
		prevArrow: '<div class="clients__arrow clients__arrow_prev arrow arrow_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/></svg></div>',
		appendArrows: '.clients__arrows'
	});

	const clientsArrows = document.querySelectorAll('.clients__arrow');
	clientsArrows.forEach(arrow => {
		arrow.style.display = 'flex';
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1200) {
			$('.go-top').fadeIn();
			$('.go-top').css('display', 'flex');
		} else {
			$('.go-top').fadeOut();
		}
	});

	$("a").click(function() {
		const _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});
});