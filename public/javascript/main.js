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
    	// img.length = 0
    }
    img[slideIndex-1].style.display = "block";
    // img[slideIndex-1].style.transition = "transform 0.6s ease-in-out";
    //     next.addEventListener('click', () => {
    	
    // })
    // if (img[-1]) {
    // 	img.length = 0
    // }
    // console.log(slideIndex);
};



let sTime = setInterval(showSlides, 8000);

prev.addEventListener('click', () => {
	clearInterval(sTime);
	// slideIndex--;
	// if (true) {
				// img[slideIndex-1];
		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		}
	// } 

	slideIndex--;



	if (slideIndex <= 0) {
		slideIndex = 5;
	}
	img[slideIndex-1].style.display = "block";

});

next.addEventListener('click', () => {
	clearInterval(sTime);
	if (true) {
		slideIndex++;
		// img[slideIndex-1];
		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		}
	}

	if(slideIndex > img.length) {
    	slideIndex = 1
    	// img.length = 0
    }
	img[slideIndex-1].style.display = "block";
});


let contenido = document.querySelector('.contenidos');
let plus = document.querySelector('.plusM');
let close = document.querySelector('.closeA');




plus.addEventListener('click', () => {
	contenido.style.display = 'block';
});


close.addEventListener('click', () => {
	contenido.style.display = 'none';
});