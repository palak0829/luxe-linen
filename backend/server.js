const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// APEX se Users laane wala Route
app.get('/api/users', async (req, res) => {
  try {
    const response = await fetch('https://apex.oracle.com/ords/palak787/users/all');
    const data = await response.json();
    res.json(data.items);
  } catch (e) {
    res.status(500).json({ error: 'APEX se connect nahi hua' });
  }
});

app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Luxe Linen Bedsheet' }]);
});

app.listen(3000, () => console.log('server - http://localhost:3000'));