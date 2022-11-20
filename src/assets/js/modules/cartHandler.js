const products = document.querySelectorAll('.product');

function cartCutter() {
	for (let i = 0; i < products.length; i++) {
		const removeButton = products[i].querySelector('.product__remove');
		const currProduct = products[i];

		removeButton.onclick = function () {
			currProduct.classList.add('remove');

			setTimeout(function () {
				currProduct.remove();
			}, 1000);
		};
	}
}

cartCutter();
