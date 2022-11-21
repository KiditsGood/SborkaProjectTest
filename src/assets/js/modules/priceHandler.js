const product = document.querySelectorAll('.product');
const subValue = document.querySelector('.sub');
const totalValue = document.querySelector('.final__value');

function subCounter() {
	let subCost = 0;
	let totalCounter = 250;

	[...document.querySelectorAll('.value__input')].forEach(productItem => {
		if (productItem) {
			subCost += productItem.value * 525;
		}
	});

	totalCounter += subCost;

	subValue.innerHTML = subCost;
	totalValue.innerHTML = String(totalCounter);
}

function minusPrice() {
	for (let i = 0; i < product.length; i++) {
		const minusButton = product[i].querySelector('.value__button.minus');
		const priceValue = product[i].querySelector('.price__value');

		minusButton.onclick = function () {
			const currInput = minusButton.nextElementSibling;
			let counter = currInput.value;

			if (currInput.value === '' || currInput.value <= 0) {
				currInput.value = 1;
				priceValue.innerHTML = 525;
			} else if (counter <= 1) {
				currInput.value = 1;
				priceValue.innerHTML = 525;
			} else {
				currInput.value = counter - 1;
				priceValue.innerHTML = (counter - 1) * 525;
			}

			subCounter();
		};
	}
}

function plusPrice() {
	for (let i = 0; i < product.length; i++) {
		const plusButton = product[i].querySelector('.value__button.plus');
		const priceValue = product[i].querySelector('.price__value');

		plusButton.onclick = function () {
			const currInput = plusButton.previousElementSibling;
			let counter = parseInt(currInput.value, 10);

			if (currInput.value === '' || currInput.value <= 0) {
				currInput.value = 1;
				priceValue.innerHTML = 525;
			} else if (counter === 999) {
				currInput.value = 999;
				priceValue.innerHTML = 525 * 999;
			} else {
				currInput.value = counter + 1;
				priceValue.innerHTML = (counter + 1) * 525;
			}

			subCounter();
		};
	}
}

function priceHandler() {
	for (let i = 0; i < product.length; i++) {
		const currInput = product[i].querySelector('.value__input');
		const priceValue = product[i].querySelector('.price__value');
		const priceInput = product[i].querySelector('.value__input');

		priceInput.addEventListener('change', function () {
			subCounter();
			priceValue.innerHTML = this.value * 525;

			if (currInput.value === '' || currInput.value <= 0) {
				currInput.value = 1;
				priceValue.innerHTML = 525;
				subCounter();
			}
		});
	}
}

priceHandler();
minusPrice();
plusPrice();
subCounter();
