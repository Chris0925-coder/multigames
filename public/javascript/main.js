const img = document.getElementsByClassName("slide0");
const images = document.getElementsByName("carusel");
const prev = document.getElementById("btn0");
const next = document.getElementById("btn1");

let b1 = document.querySelector('.b0');
let b2 = document.querySelector(".b1");
let b3 = document.querySelector(".b2");
let b4 = document.querySelector('.b3');
let b5 = document.querySelector(".b4");
let b6 = document.querySelector(".b5");
// console.log(b1);
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');
console.log(images);
console.log(img);
// console.log();

let slideIndex = 0

function showSlides() {
	let i;
	for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}
    slideIndex++;
    if(slideIndex > img.length) {slideIndex = 1};
    img[slideIndex-1].style.display = "block";

    if (img[slideIndex-1] == img[1]) {
			b2.style.opacity = "1";
			b3.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
		} else if (img[slideIndex-1] == img[2]) {
			b3.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
		} else if (img[slideIndex-1] == img[3]) {
			b4.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b3.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
		} else if (img[slideIndex-1] == img[4]) {
			b5.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b3.style.opacity = ".3";
			b6.style.opacity = ".3";
		} else if (img[slideIndex-1] == img[5]) {
			b6.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b3.style.opacity = ".3";
		} else {
			b1.style.opacity = "1";
			b3.style.opacity = ".3";
			b2.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
		}
};

let sTime = setInterval(showSlides, 8000);

prev.addEventListener('click', () => {
	clearInterval(sTime);
		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		}
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

		for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
		}
	}

	if(slideIndex > img.length) {
    	slideIndex = 1

    }
	img[slideIndex-1].style.display = "block";
});


let contenido = document.querySelector('.contenidos');
let plus = document.querySelector('.plusM');
let close = document.querySelector('.closeA');
let closeB = document.querySelector('.closeB');
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

console.log(img1);
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
			b2.style.opacity = "1";
			b3.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";

			// a.classList.toggle("active");
		} else if (a == b3) {
			b3.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
			// a.style.opacity = ".1";
		} else if (a == b4) {
			b4.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b3.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
			// a.style.opacity = ".1";
		} else if (a == b5) {
			b5.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b3.style.opacity = ".3";
			b6.style.opacity = ".3";
			// a.style.opacity = ".1";
		} else if (a == b6) {
			b6.style.opacity = "1";
			b2.style.opacity = ".3";
			b1.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b3.style.opacity = ".3";
			// a.style.opacity = ".1";
		} else {
			b1.style.opacity = "1";
			b3.style.opacity = ".3";
			b2.style.opacity = ".3";
			b4.style.opacity = ".3";
			b5.style.opacity = ".3";
			b6.style.opacity = ".3";
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
console.log(contents[3]);

// contents.map();

// let roots = contents.map(function () {
  // return 
	// let roots = 
	// return roots.slice(3, 2, 1, 0);
	
// });
// let roots = contents.slice(3, 0);
// roots;
// console.log(videos[3]);
console.log(contents);
yt.append(contents[0], contents[1], contents[2], contents[3]);
// yt.appendChild(contents[0], contents[1]);
// let array = contents.slice(3,2,1,0);
// console.log(contents.slice(3,2,1,0));
// videos = array.slice(3, 0);