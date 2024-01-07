import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

console.log('Container!');

const productsEl = document.querySelector('#container-products');
const cartEl = document.querySelector('#container-cart');

productsMount(productsEl);
cartMount(cartEl);
