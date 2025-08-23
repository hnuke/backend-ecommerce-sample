db = db.getSiblingDB("ecommerce");

if (!db.getCollectionNames().includes('products')) {
    db.createCollection('products');
}

db.products.insertOne({
    "name": "Sample Product",
    "price": 20,
    "image": "",
    "description": "This is a sample product."
})