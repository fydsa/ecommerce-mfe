import { faker } from '@faker-js/faker';

let products = '';

for (let i = 0; i < 3; i++) {
	const name = faker.commerce.productName();
	products += `<div>${name}</div>`;
}

const el = document.querySelector('#dev-products');

if (el) el.innerHTML = products;
