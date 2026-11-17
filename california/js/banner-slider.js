export const bannerSlider = () => {
	new Swiper(".banner__slider", {
		slidesPerView: "auto",
		centeredSlides: true,
		loop: true,
		navigation: {
			prevEl: ".banner__slider-button--prev",
			nextEl: ".banner__slider-button--next",
		},
	});
};
