const stepperItem = document.querySelectorAll('.stepper__item');

function stepperNextHandler() {
	for (let i = 0; i < stepperItem.length - 1; i++) {
		const currStep = stepperItem[i];
		const nextStep = stepperItem[i + 1];

		if (!nextStep.classList.contains('next')) {
			nextStep.classList.add('next');

			currStep.classList.add('current');
			currStep.nextElementSibling.firstElementChild.classList.add('selected');

			break;
		}
	}
}

document.querySelector('.next--step').addEventListener('click', function () {
	stepperNextHandler();
});
