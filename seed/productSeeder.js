var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop');

var products = [
	new Product({
		imagePath:'https://pimg.tradeindia.com/03962392/s/4/Ganesh-murti.jpg',
		title: 'Ganesha',
		description: 'Awesome murti!!!',
		price: 10
	}),
	new Product({
		imagePath:'https://pimg.tradeindia.com/03962392/s/4/Ganesh-murti.jpg',
		title: 'Ganesha',
		description: 'Awesome murti!!!',
		price: 10
	}),
	new Product({
		imagePath:'https://pimg.tradeindia.com/03962392/s/4/Ganesh-murti.jpg',
		title: 'Ganesha',
		description: 'Awesome murti!!!',
		price: 10
	}),
	new Product({
		imagePath:'https://pimg.tradeindia.com/03962392/s/4/Ganesh-murti.jpg',
		title: 'Ganesha',
		description: 'Awesome murti!!!',
		price: 10
	})
];

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if( done == products.length){
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}