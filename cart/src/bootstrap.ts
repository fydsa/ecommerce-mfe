import { faker } from '@faker-js/faker';

const mount = (el: Element) => {
	const cartText = `<div>You have ${faker.number.int()} items in you cart.</div>`;

	el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#cart');
	if (el) mount(el);
}

export { mount };
