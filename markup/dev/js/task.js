// 'use strict'; 


// function addClass() {
// 	var link = document.querySelectorAll('li a');
// 	var active = document.getElementsByClassName('active');

// 	Array.from(link).forEach(function(item) {
// 		item.addEventListener('click', function(e) {
// 			if (active.length > 0 && active[0] !== this.parentElement) {
// 				active[0].classList.remove('active');
// 			}
// 			this.parentElement.classList.toggle('active');
// 			console.log(item);
// 		});
// 	});
// }

	var	header = document.getElementById('header');
	var	hightHeader = header.offsetHeight;


function fixedHeaderOnScroll() {
	var	main = document.getElementById('main');

		function scrollPage() {
			var isFixed = window.pageYOffset > hightHeader;


			/*if (window.pageYOffset < hightHeader) {
				header.classList.remove('fixed');
				//main.style.paddingTop = '0px';
			} else {
				header.classList.add('fixed');
				//main.style.paddingTop = hightHeader +'px';
			}
		}*/
		function toogleClass() {
			if (!isFixed) {
				header.classList.remove('fixed')
			} else {
				header.classList.add('fixed')
			}
		}

		function createPadding() {
			main.style.paddingTop = !isFixed ? 0 : (hightHeader +'px')
		}

		toogleClass();
		//createPadding();
	}

	window.addEventListener('scroll', scrollPage);
}

function addClass() {
	var link = document.querySelectorAll('li a');
	var blockAnchor = document.querySelectorAll('.block-item');
	var active = document.getElementsByClassName('active');
	var getNameAnchor;

	Array.from(link).forEach(function(item) {
		item.addEventListener('click', function() {
			getNameAnchor = this.getAttribute('href').slice(1).toString();
			var block = document.getElementById(getNameAnchor);
			var blockY = block.offsetTop - hightHeader;


			var currentY;
			currentY = window.pageYOffset || document.documentElement.scrollTop;
			
			var int = setInterval(function() {
				if (currentY < blockY) {
				currentY += 10;
				if (currentY >= blockY) {
					clearInterval(int);
				}
			} else {
				currentY -= 10;

				if (currentY <= blockY) {
					clearInterval(int);
				}
			}
			window.scrollTo(0, currentY);
			}, 10);
		});
	});
}


var submit = document.querySelector('[type="submit"]');
submit.addEventListener('click', function() {
	var arrVal = [];
	var	inpText = document.querySelectorAll('.form-child');
	var	name = document.querySelectorAll('.data-form .item');
	for (var i = 0; i < inpText.length; i++) {
		var str = inpText[i].value +'~' + inpText[i].getAttribute('id');
		arrVal.push(str);
		nameId = name[i].getAttribute('id');
		if (~nameId.indexOf(arrVal[i].slice(-2))) {
		// console.log('delete');
			if (!inpText[i].value) {
				name[i].innerHTML = "нет данных";
			} else {
				name[i].innerHTML = inpText[i].value;
			}
		}
	}


	var inp = document.querySelectorAll('[type="radio"]');
	var	nameRadio = document.getElementById('radio');
	
	for (var i = 0; i < inp.length; i++) {
		if (inp[i].checked) {
			nameRadio.innerHTML =  inp[i].value;
		}
	}

	var	check = document.querySelectorAll('[type="checkbox"]');
	var	nameCheckbox = document.getElementById('checkbox');
	var checkboxVal = [];

	for (var i = 0; i < check.length; i++) {
		if (check[i].checked) {
			checkboxVal.push(check[i].value);
			nameCheckbox.innerHTML = checkboxVal.join(', ');
		} 
	}

	if (checkboxVal.length === 0) {
			nameCheckbox.innerHTML = 'возраст не указан';		
	}

});