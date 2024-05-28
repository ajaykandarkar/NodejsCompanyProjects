const express = require('express');
const productController = require('../controler/addProductControler');
const multer = require('multer');

// Configure Multer for file uploads
var imageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './src/upload');
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

const upload = multer({ storage: imageConfig });

const router = express.Router();

// Update the route to handle file uploads
router.post('/products', upload.single('image'), productController.createProduct);
router.get('/products', productController.getAllProducts);
router.delete('/products/:id', productController.deleteProductById);
router.put('/products/:id',productController.updateProductById);

module.exports = router;

