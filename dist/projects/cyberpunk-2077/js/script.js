$(document).ready( () => {
	$('.slider').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true,
		autoplaySpeed: 3000
	});
});