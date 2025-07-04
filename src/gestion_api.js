import axios from "axios";

// Function to validate product data
const validateProduct = ({name, price, category}) =>
    name && price && category && typeof price === "number" && price > 0
        ? true
        : (console.error(!name || !price || !category
            ? "All fields (name, price, category) are required."
            : "Price must be a number greater than 0."),
            false);

let products;

// READ products (GET)
try {
    const response = await axios.get('http://localhost:3000/products');
    products = response.data;
    console.log('// run node gestion_api.js');
    console.log('Available products:');
    console.table(products);
} catch (error) {
    console.error('Error fetching products:', error.message);
}

// CREATE product (POST)
const newProduct = {
    id: products.length > 0
        ? Math.max(...products.map(product => +product.id)) + 1
        : 1,
    name: "Monitor",
    price: 200,
    category: "Displays"
};

if (validateProduct(newProduct)) {
    try {
        const response = await axios.post('http://localhost:3000/products', newProduct);
        console.log('Product added:', newProduct);
    } catch (error) {
        console.error('Error adding product:', error.message);
    }
}

// UPDATE product (PUT)
const updatedProduct = {
    name: "Laptop",
    price: 1400,
    category: "Computers"
};

if (validateProduct(updatedProduct)) {
    try {
        const response = await axios.put('http://localhost:3000/products/1', updatedProduct);
        console.log('Product updated:', {...updatedProduct, id: '1'});
    } catch (error) {
        console.error('Error updating product:', error.message);
    }
}

// DELETE product
try {
    await axios.delete('http://localhost:3000/products/4');
    console.log('Product deleted');
} catch (error) {
    console.error('Error deleting product:', error.message);
}