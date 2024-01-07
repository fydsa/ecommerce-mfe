import { faker } from '@faker-js/faker';

const mount = (el: Element) => {
	let products = '';
	for (let i = 0; i < 3; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}
	el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
	const targetEl = document.querySelector('#dev-products');
	if (targetEl) mount(targetEl);
}

export { mount };
