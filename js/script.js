const header = document.querySelector(".header__container");
window.onscroll = function (e) {
	if(window.scrollY > 66){
		header.classList.add("change");
	}
	else{
		header.classList.remove("change");
	}
};

const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".shell");
if (iconMenu){
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle("lock");
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		header.classList.remove("translate");
	});
}

const searchButton = document.querySelector(".header__search");
const searchShell = document.querySelector(".shell-search")
if (searchButton){
	searchButton.addEventListener("click", function(e){
		document.body.classList.toggle("lock");
		searchShell.classList.toggle("active");
		searchButton.classList.toggle("active");
		header.classList.remove("translate");
	});
}

const dropDowns = document.querySelectorAll(".item-shell__dropdown");
    dropDowns.forEach(dropDown => {
        dropDown.addEventListener("click", function() {
            const parent = dropDown.closest('.shell__item');
            const dropItems = parent.querySelector(".item-shell__nav");
            dropDown.classList.toggle("active");
            dropItems.classList.toggle("active");
        });
    });


document.addEventListener("DOMContentLoaded", function() {
	const headerCentre = document.querySelector(".header__centre");
	const modal = document.getElementById("modal");

	headerCentre.addEventListener("mouseenter", function() {
			modal.style.display = "block";
	});

	headerCentre.addEventListener("mouseleave", function() {
			modal.style.display = "none";
	});

	modal.addEventListener("mouseenter", function() {
			modal.style.display = "block";
	});

	modal.addEventListener("mouseleave", function() {
			modal.style.display = "none";
	});
});

const headerModal = document.querySelector(".header__modal");
const headerButton = document.querySelector(".header__languages")
if (searchButton){
	headerButton.addEventListener("click", function(e){
		document.body.classList.toggle("lock");
		headerModal.classList.toggle("active");
	});
}
