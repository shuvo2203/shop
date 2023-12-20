const Product = require('../models/productmodel');

exports.addProduct = async (req, res) => {
    const { name, description, price, category, quantity } = req.body;
    const img = req.file.filename;

    const product = await Product.create({
        name, description, price, category, quantity, img
    });
    res.status(200).json(product);
}