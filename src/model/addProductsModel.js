const db = require('../dataBaseConfig/dbConfig');

const createProduct = async (productData) => {
    const { name, price, quantity, stock, brand, image, description } = productData;
    const sql = `INSERT INTO products (name, price, quantity, stock, brand, image, description) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    
    try {
        console.log('SQL:', sql);
        console.log('Values:', [name, price, quantity, stock, brand, image, description]);
        const [result] = await db.execute(sql, [name, price, quantity, stock, brand, image, description]);
        return result;
    } catch (error) {
        console.error('Error executing SQL:', error);
        throw new Error('Database error: ' + error.message);
    }
};

const getAllProducts = async () => {
    const sql = `SELECT id, name, price, quantity, stock, brand, description, image FROM products`;
    const [rows] = await db.execute(sql);
    const products = rows.map(row => ({
        ...row,
        imageUrl: `http://localhost:5000/upload/${row.image}`
    }));

    return products;
};


const deleteProductById = async (id) => {
    const sql = 'DELETE FROM products WHERE id = ?';
    const [result] = await db.execute(sql, [id]);
    return result.affectedRows;
};

const updateProductById = async (productId, productData) => {
    const { name, price, quantity, stock, brand, description } = productData;
    const sql = `UPDATE products SET name = ?, price = ?, quantity = ?, stock = ?, brand = ?, description = ? WHERE id = ?`;
    try {
        const [result] = await db.execute(sql, [name, price, quantity, stock, brand,description, productId]);
        return result;
    } catch (error) {
        throw new Error('Database error: ' + error.message);
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    deleteProductById,
    updateProductById
};





