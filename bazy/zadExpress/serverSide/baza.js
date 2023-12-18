use("magazyn")
db.products.insertMany([
  {
    category: 'Electronics',
    name: 'Smartphone',
    quantity: 50,
    unit: 'pcs',
    price: 499.99,
    description: 'High-end smartphone with advanced features.'
  },
  {
    category: 'Clothing',
    name: 'Running Shoes',
    quantity: 100,
    unit: 'pairs',
    price: 79.99,
    description: 'Comfortable running shoes for sports enthusiasts.'
  },
  {
    category: 'Home Appliances',
    name: 'Coffee Maker',
    quantity: 20,
    unit: 'pcs',
    price: 89.99,
    description: 'Automatic coffee maker for brewing your favorite coffee.'
  },
  {
    category: 'Books',
    name: 'Fantasy Novel',
    quantity: 30,
    unit: 'pcs',
    price: 19.99,
    description: 'Bestselling fantasy novel for avid readers.'
  },
  {
    category: 'Sports Equipment',
    name: 'Yoga Mat',
    quantity: 40,
    unit: 'pcs',
    price: 29.99,
    description: 'High-quality yoga mat for fitness and meditation.'
  },
  {
    category: 'Beauty',
    name: 'Perfume',
    quantity: 15,
    unit: 'bottles',
    price: 59.99,
    description: 'Exquisite perfume with a captivating fragrance.'
  },
  {
    category: 'Furniture',
    name: 'Office Chair',
    quantity: 25,
    unit: 'pcs',
    price: 129.99,
    description: 'Ergonomic office chair for comfortable work.'
  },
  {
    category: 'Toys',
    name: 'Board Game',
    quantity: 50,
    unit: 'pcs',
    price: 39.99,
    description: 'Interactive board game for family entertainment.'
  },
  {
    category: 'Kitchenware',
    name: 'Blender',
    quantity: 10,
    unit: 'pcs',
    price: 69.99,
    description: 'Powerful blender for smoothies and food preparation.'
  },
  {
    category: 'Tech Accessories',
    name: 'Wireless Earbuds',
    quantity: 35,
    unit: 'pairs',
    price: 89.99,
    description: 'Wireless earbuds with superior sound quality.'
  }
]);
