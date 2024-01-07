import { mount } from 'products/ProductsIndex';
import 'cart/CartIndex';

console.log('Container!');

const productsEl = document.querySelector('#container-products');

mount(productsEl);
