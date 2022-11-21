const products = document.querySelectorAll('.product');
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

function cartCutter() {
	for (let i = 0; i < products.length; i++) {
		const removeButton = products[i].querySelector('.product__remove');
		const currProduct = products[i];

		removeButton.onclick = function () {
			currProduct.classList.add('remove');

			setTimeout(function () {
				currProduct.remove();
				subCounter();
			}, 1000);
		};
	}
}

cartCutter();
