My Store API
English
Introduction
My Store API is a simple RESTful service built with Node.js and Express.js. This API allows users to manage a collection of products, providing endpoints to create, read, update, and delete products. The project includes basic error handling and data validation.

Features
Create Product: Add a new product to the collection.
Get Products: Retrieve a list of all products.
Get Product by ID: Retrieve details of a specific product using its ID.
Update Product: Update the details of an existing product.
Delete Product: Remove a product from the collection.
Installation
Clone the repository:
bash
Copiar código
git clone https://github.com/your-username/my-store.git
Navigate to the project directory:
bash
Copiar código
cd my-store
Install dependencies:
bash
Copiar código
npm install
Usage
Start the server:
bash
Copiar código
npm run dev
The API will be running on http://localhost:3000.
API Endpoints
GET /products: Retrieve all products.
GET /products/filter: Retrieve filtered products.
GET /products/
: Retrieve a product by ID.
POST /products: Create a new product.
PATCH /products/
: Update a product by ID.
DELETE /products/
: Delete a product by ID.
Error Handling
Errors are handled using middleware to ensure that meaningful messages are returned to the client. If a product is not found, a 404 error is returned with a JSON message.

Example
json
Copiar código
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Product not found"
}
Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss improvements.

License
This project is licensed under the MIT License.

Español
Introducción
My Store API es un servicio RESTful simple construido con Node.js y Express.js. Esta API permite a los usuarios gestionar una colección de productos, proporcionando endpoints para crear, leer, actualizar y eliminar productos. El proyecto incluye manejo básico de errores y validación de datos.

Características
Crear Producto: Agregar un nuevo producto a la colección.
Obtener Productos: Recuperar una lista de todos los productos.
Obtener Producto por ID: Recuperar los detalles de un producto específico utilizando su ID.
Actualizar Producto: Actualizar los detalles de un producto existente.
Eliminar Producto: Eliminar un producto de la colección.
Instalación
Clonar el repositorio:
bash
Copiar código
git clone https://github.com/tu-usuario/my-store.git
Navegar al directorio del proyecto:
bash
Copiar código
cd my-store
Instalar dependencias:
bash
Copiar código
npm install
Uso
Iniciar el servidor:
bash
Copiar código
npm run dev
La API estará ejecutándose en http://localhost:3000.
Endpoints de la API
GET /products: Recuperar todos los productos.
GET /products/filter: Recuperar productos filtrados.
GET /products/
: Recuperar un producto por ID.
POST /products: Crear un nuevo producto.
PATCH /products/
: Actualizar un producto por ID.
DELETE /products/
: Eliminar un producto por ID.
Manejo de Errores
Los errores se manejan utilizando middleware para asegurar que se devuelvan mensajes significativos al cliente. Si no se encuentra un producto, se devuelve un error 404 con un mensaje en formato JSON.

Ejemplo
json
Copiar código
{
  "statusCode": 404,
  "error": "Not Found",
  "message": "Producto no encontrado"
}
Contribuyendo
¡Las contribuciones son bienvenidas! Por favor, envía un pull request o abre un issue para discutir mejoras.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.
