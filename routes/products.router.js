const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 3000;

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },{
      name: 'Product 2',
      price: 2000
    }
  ]);
});

router.get('/filter', (req, res)=> {
  res.send('Yo soy un filter');
});


/* router.get('/:id', (req, res) =>{
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
 });
}); */

router.get('/:id', (req, res) =>{
  const products = [];
  for (let index = 0;index < 100; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router;
