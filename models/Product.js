var db = require('../db'); //reference of dbconnection.js
var Product = {
    getAllProducts: function (callback) {		
		var collection = db.get().collection('demo');
		collection.find().toArray(function(err, docs) {
			return callback(docs);
		});
    },
    getProductById: function (id, callback) {
        return db.query("select * from products where product_id=?", [id], callback);
    },
    addProduct: function (item, callback) {
		var collection = db.get().collection('demo');
		collection.insertOne(item).then(function(r) {
			
		});
        //return db.query("insert into products (name,color,price,quantity,status) values (?,?,?,?,?)", [item.name, item.color, item.price, item.quantity, item.status], callback);
    }
};
module.exports = Product;