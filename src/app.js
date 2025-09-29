const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    image: "/images/headphones.jpg"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    description: "Latest smartphone with advanced camera features",
    category: "Electronics", 
    image: "/images/smartphone.jpg"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 129.99,
    description: "Comfortable running shoes for all terrains",
    category: "Sports",
    image: "/images/shoes.jpg"
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Product Listing API',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      health: '/health'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/products', (req, res) => {
  const { category, minPrice, maxPrice } = req.query;
  
  let filteredProducts = products;
  
  if (category) {
    filteredProducts = filteredProducts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
  }
  
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
  }
  
  res.json({
    products: filteredProducts,
    total: filteredProducts.length
  });
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Only start server if this file is run directly, not when required as module
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Product listing server running on port ${PORT}`);
    console.log(`Health check available at: http://localhost:${PORT}/health`);
    console.log(`Products API available at: http://localhost:${PORT}/api/products`);
  });
}

module.exports = app;