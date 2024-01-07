import { faker } from '@faker-js/faker';

const cartText = `<div>You have ${faker.number.int()} items in you cart.</div>`;

const el = document.querySelector('#dev-cart');

if (el) el.innerHTML = cartText;
