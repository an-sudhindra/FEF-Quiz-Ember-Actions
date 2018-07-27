import Ember from 'ember';

export default Ember.Service.extend({
	cart: [],
	addToCart(color, size, price){
		// let b = {};
		// b.color = color;
		// b.size = size;
		// b.price = price;
		// b.quantity = 1;
		let quantity = 1;

		this.get('cart').push({color, size, price, quantity});
	},
	getCart(){
		return this.get('cart');
	}
});
