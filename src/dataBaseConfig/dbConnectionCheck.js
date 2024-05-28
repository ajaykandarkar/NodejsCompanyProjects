// dbCheck.js

const pool = require('./dbConfig');

(async () => {
    try {
     
        const connection = await pool.getConnection();
        console.log('Connected to database successfully.');

       
        connection.release();
        
    
        const [rows, fields] = await pool.query('SELECT 1');
        console.log('Query executed successfully:', rows);

        
        pool.end();
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
})();
