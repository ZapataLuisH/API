# My Store API

This project is an API for managing a store, providing endpoints to create, read, update, and delete products. Below, you'll find the description of the API in both English and Spanish.

## English

### Features

- **Create Products**: Add new products to the store.
- **Read Products**: Retrieve a list of all products or a single product by its ID.
- **Update Products**: Modify the details of an existing product.
- **Delete Products**: Remove a product from the store.

### Endpoints

- `GET /products`: Retrieve a list of all products.
- `GET /products/:id`: Retrieve details of a specific product by its ID.
- `POST /products`: Create a new product.
- `PATCH /products/:id`: Update an existing product.
- `DELETE /products/:id`: Delete a product.

## Español

### Características

- **Crear Productos**: Añadir nuevos productos a la tienda.
- **Leer Productos**: Obtener una lista de todos los productos o un solo producto por su ID.
- **Actualizar Productos**: Modificar los detalles de un producto existente.
- **Eliminar Productos**: Quitar un producto de la tienda.

### Endpoints

- `GET /products`: Obtener una lista de todos los productos.
- `GET /products/:id`: Obtener detalles de un producto específico por su ID.
- `POST /products`: Crear un nuevo producto.
- `PATCH /products/:id`: Actualizar un producto existente.
- `DELETE /products/:id`: Eliminar un producto.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:


cd your-repo-name
Install the dependencies:


npm install
Start the server:


npm run dev
Usage
Once the server is running, you can use tools like Postman or curl to interact with the API. Below are some example requests:

Get all products

GET http://localhost:3000/products
Get a product by ID

GET http://localhost:3000/products/{id}

**Create a new product**

POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "New Product",
  "price": 100,
  "image": "http://example.com/image.png"
}
**Update a product**

PATCH http://localhost:3000/products/{id}
Content-Type: application/json

{
  "name": "Updated Product",
  "price": 150
}

**Delete a product**

DELETE http://localhost:3000/products/{id}
Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

**License
This project is licensed under the MIT License - see the LICENSE file for details.**
