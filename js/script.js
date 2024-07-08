"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header__container");
	const iconMenu = document.querySelector(".header__burger");
	const menuBody = document.querySelector(".shell");
	const searchButton = document.querySelector(".header__search");
	const searchShell = document.querySelector(".shell-search");
	const dropDowns = document.querySelectorAll(".item-shell__dropdown");
	const headerCentre = document.querySelector(".header__centre");
	const modal = document.getElementById("modal");
	const headerModal = document.querySelector(".header__modal");
	const headerButton = document.querySelector(".header__languages");

	// Add or remove header class on scroll
	window.addEventListener("scroll", () => {
		header.classList.toggle("change", window.scrollY > 66);
	});

	// Toggle menu
	if (iconMenu && menuBody) {
		iconMenu.addEventListener("click", () => {
			document.body.classList.toggle("lock");
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
			header.classList.remove("translate");
		});
	}

	// Toggle search
	if (searchButton && searchShell) {
		searchButton.addEventListener("click", () => {
			document.body.classList.toggle("lock");
			searchShell.classList.toggle("active");
			searchButton.classList.toggle("active");
			header.classList.remove("translate");
		});
	}

	// Dropdowns toggle
	dropDowns.forEach(dropDown => {
		dropDown.addEventListener("click", () => {
			const parent = dropDown.closest('.shell__item');
			const dropItems = parent.querySelector(".item-shell__nav");
			dropDown.classList.toggle("active");
			dropItems.classList.toggle("active");
		});
	});

	// Header centre modal display toggle
	if (headerCentre && modal) {
		const showModal = () => modal.style.display = "block";
		const hideModal = () => modal.style.display = "none";

		headerCentre.addEventListener("mouseenter", showModal);
		headerCentre.addEventListener("mouseleave", hideModal);
		modal.addEventListener("mouseenter", showModal);
		modal.addEventListener("mouseleave", hideModal);
	}

	// Header languages modal toggle
	if (headerButton && headerModal) {
		headerButton.addEventListener("click", () => {
			document.body.classList.toggle("lock");
			headerModal.classList.toggle("active");
		});
	}
});
