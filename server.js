const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const productRoutes = require('./src/routes/productsRoute');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/upload", express.static("./src/upload"));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
