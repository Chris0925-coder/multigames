const img = document.getElementsByClassName("slide0");
const images = document.getElementsByName("carusel");
const prev = document.getElementById("btn0");
const next = document.getElementById("btn1");

const b1 = document.querySelector('.b0');
const b2 = document.querySelector(".b1");
const b3 = document.querySelector(".b2");
const b4 = document.querySelector('.b3');
const b5 = document.querySelector(".b4");
const b6 = document.querySelector(".b5");
// console.log(b1);
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
// console.log(images);
// console.log(img);
// console.log();

let slideIndex = 0;
let slideIndexB = 0;

function slideButtoms(a, b, c, d, e, f) {
		a.style.opacity = "1";
		b.style.opacity = ".3";
		c.style.opacity = ".3";
		d.style.opacity = ".3";
		e.style.opacity = ".3";
		f.style.opacity = ".3";
}

function showSlides() {
	let i;
	for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}
    slideIndex++;
    if(slideIndex > img.length) {slideIndex = 1};
    img[slideIndex-1].style.display = "block";

    if (img[slideIndex-1] == img[1]) {
    	// let botones = b3, b1, b4, b5, b6;
    	slideButtoms(b2, b3, b1, b4, b5, b6);
		} else if (img[slideIndex-1] == img[2]) {
			// let botones = b2, b1, b4, b5, b6;
    	slideButtoms(b3, b2, b1, b4, b5, b6);
		} else if (img[slideIndex-1] == img[3]) {
			// let botones = b2, b1, b3, b5, b6;
    	slideButtoms(b4, b2, b1, b3, b5, b6);
		} else if (img[slideIndex-1] == img[4]) {
			// let botones = b2, b1, b3, b4, b6;
    	slideButtoms(b5, b2, b1, b3, b4, b6);
		} else if (img[slideIndex-1] == img[5]) {
			// let botones = b2, b1, b3, b5, b4;
    	slideButtoms(b6, b2, b1, b3, b5, b4);
		} else {
			// let botones = b2, b4, b3, b5, b6;
    	slideButtoms(b1, b2, b4, b3, b5, b6);
		}
};
// console.log(img.length);
let sTime = setInterval(showSlides, 8000);

prev.addEventListener('click', () => {
	let indicator = document.querySelector(".indicators");
	// console.log(indicator);
	clearInterval(sTime);
		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		indicator.children[i].style.opacity = ".3";
		}
	slideIndexB--;

	if (slideIndexB < 0) {slideIndexB = 5}
	img[slideIndexB].style.display = "block";
	indicator.children[slideIndexB].style.opacity = "1";

});

next.addEventListener('click', () => {
	let indicator = document.querySelector(".indicators");
	clearInterval(sTime);
	if (true) {
		slideIndexB++;

		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		indicator.children[i].style.opacity = ".3";
		}
	}

	if(slideIndexB > img.length) {slideIndexB = 1}
	img[slideIndexB-1].style.display = "block";
	indicator.children[slideIndexB-1].style.opacity = "1";
});


const contenido = document.querySelector('.contenidos');
const plus = document.querySelector('.plusM');
const close = document.querySelector('.closeA');
const closeB = document.querySelector('.closeB');
// let parr = document.querySelector('.parr');
// let summary = document.querySelector('summary');
// summary.addEventListener('click', () => {
// 	parr.style.display = 'flex';
// })
// closeB.addEventListener('click', () => {
// 	parr.style.display = 'none';
// });


plus.addEventListener('click', () => {
	contenido.style.display = 'block';
});


close.addEventListener('click', () => {
	contenido.style.display = 'none';
});

// NEWCODE

// console.log(img1);
function slider1(a , b, c, d ,f , g, h){

	a.addEventListener('click', () => {
		clearInterval(sTime);
		b.style.display = 'block';
		c.style.display = 'none';
		d.style.display = 'none';
		f.style.display = 'none';
		g.style.display = 'none';
		h.style.display = 'none';

		if (a == b2) {
			slideButtoms(b2, b3, b1, b4, b5, b6);
		} else if (a == b3) {
			slideButtoms(b3, b2, b1, b4, b5, b6);
		} else if (a == b4) {
			slideButtoms(b4, b2, b1, b3, b5, b6);
		} else if (a == b5) {
			slideButtoms(b5, b3, b1, b4, b2, b6);
		} else if (a == b6) {
			slideButtoms(b6, b3, b1, b4, b5, b2);
		} else {
			slideButtoms(b1, b3, b2, b4, b5, b6);
		}
	});
	
};

slider1(b1, img1,img2,img3,img4,img5,img6);
slider1(b2, img2,img1,img3,img4,img5,img6);
slider1(b3, img3,img1,img2,img4,img5,img6);
slider1(b4, img4,img2,img3,img1,img5,img6);
slider1(b5, img5,img1,img3,img4,img2,img6);
slider1(b6, img6,img1,img2,img4,img5,img3);


let content = document.getElementsByClassName('you');
let videos = document.getElementsByClassName('youvideos');
let yt = document.querySelector('.yt');

let contents = [content[3], content[2], content[1], content[0]];
// console.log(contents[3]);

// contents.map();

// let roots = contents.map(function () {
  // return 
	// let roots = 
	// return roots.slice(3, 2, 1, 0);
	
// });
// let roots = contents.slice(3, 0);
// roots;
// console.log(videos[3]);
// console.log(contents);
yt.append(contents[0], contents[1], contents[2], contents[3]);
// yt.appendChild(contents[0], contents[1]);
// let array = contents.slice(3,2,1,0);
// console.log(contents.slice(3,2,1,0));
// videos = array.slice(3, 0);