const minusButton = document.querySelectorAll('.value__button.minus');
const plusButton = document.querySelectorAll('.value__button.plus');
const priceInput = document.querySelectorAll('.value__input');

function minusPrice() {
	for (let i = 0; i < minusButton.length; i++) {
		minusButton[i].onclick = function () {
			const currInput = minusButton[i].nextElementSibling;

			const counter = currInput.value;

			if (counter <= 1) {
				currInput.value = 1;
			} else {
				currInput.value = counter - 1;
			}
		};
	}
}

function plusPrice() {
	for (let i = 0; i < plusButton.length; i++) {
		plusButton[i].onclick = function () {
			const currInput = plusButton[i].previousElementSibling;

			const counter = parseInt(currInput.value, 10);

			if (counter === 999) {
				currInput.value = 999;
			} else {
				currInput.value = counter + 1;
			}
		};
	}
}

// function priceValidation() {
// 	for (let i = 0; i < priceInput.length; i++) {
// 		priceInput[i].addEventListener('blur', function () {
// 			if (this.value === '' || this.value === 0){
// 				this.value = 1;
// 			}
// 		});
//
// 		priceInput[i].addEventListener('keydown', function (event) {
// 			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
// 				console.log('123');
// 			} else {
// 				if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
// 					event.preventDefault();
// 				}
// 			}
// 		});
// 	}
// }

minusPrice();
plusPrice();
