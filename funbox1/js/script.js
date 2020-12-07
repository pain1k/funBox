console.log(111);

const products = document.querySelectorAll('.main__product');

function mouseleaveEventHandler() {
	this.classList.remove('card_selected_hover');
}

[...products].forEach((product) => {



	const card = product.querySelector('.card');
	const input = product.querySelector('input');

	if (card.classList.contains('card_enabled')) {

		card.addEventListener('mouseenter', function () {
			if (!input.checked) {
				return;
			}
			this.classList.add('card_selected_hover');
		});

		card.addEventListener('mouseleave', mouseleaveEventHandler);

		input.addEventListener('change', () => {
			card.classList.toggle('card_selected');
			card.classList.remove('card_selected_hover');
		});
	}
});