const img = document.getElementsByClassName("slide0");
const images = document.getElementsByName("carusel");
const prev = document.getElementById("btn0");
const next = document.getElementById("btn1");


console.log(images);
console.log(img);
// console.log(btn);

let slideIndex = 0

function showSlides() {
	// img = document.getElementsByClassName("slide0");
	let i;
	for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}

	// let slideIndex = 0;

    slideIndex++;

    if(slideIndex > img.length) {
    	slideIndex = 1
    }
    img[slideIndex-1].style.display = "block";
    // img[slideIndex-1].style.transition = "transform 0.6s ease-in-out";
    setTimeout(showSlides,6000);
    // console.log(slideIndex);
};

showSlides();

prev.addEventListener('click', () => {
	// slideIndex--;
	if (true) {
		slideIndex--;
		img[slideIndex-1];
		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		}
	}
	img[slideIndex-1].style.display = "block";
});

next.addEventListener('click', () => {
	// slideIndex--;
	if (true) {
		slideIndex++;
		img[slideIndex-1];
		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		}
	}
	img[slideIndex-1].style.display = "block";
});