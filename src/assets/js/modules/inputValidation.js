const cardInput = document.querySelectorAll('.pay__form-item--input.card');
const cvvInput = document.querySelector('.pay__form-item--input.cvv');
const cardholderInput = document.querySelector('.pay__form-item--input.cardholder');
const expireInput = document.querySelector('.pay__form-item--input.expire');

function cardValidation() {
	for (let i = 0; i < cardInput.length; i++) {
		cardInput[i].addEventListener('keyup', function () {
			this.value = this.value.replace(/[^\d]/g, '');
			if (this.value.length >= 4 && i !== 3) {
				cardInput[i + 1].focus();
			}
		});
	}

	cvvInput.addEventListener('keyup', function () {
		this.value = this.value.replace(/[^\d]/g, '');
	});

	cardholderInput.addEventListener('keyup', function () {
		this.value = this.value.replace(/[\d]/g, '');
	});

	expireInput.addEventListener('keyup', function () {
		this.value.length === 2 ? (this.value += '/') : this.value;
	});

	if (module.hot) {
		module.hot.dispose(() => {
			cardInput.removeEventListener('keyup', this.cardValidation());
			cvvInput.removeEventListener('keyup', this.cardValidation());
			cardholderInput.removeEventListener('keyup', this.cardValidation());
			expireInput.removeEventListener('keyup', this.cardValidation());
		});
	}
}

cardValidation();
