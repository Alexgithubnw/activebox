
const swiper = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
    },
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slideToClickedSlide: true,
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	mousewheel: { 
		sensitivity: 1,
	},
	autoHeight: true,
    speed: 800,
    effect: 'fade',
    fadeEffect:{
        crossFade: true,
    },
});