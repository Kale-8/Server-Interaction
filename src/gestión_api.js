import axios from "axios";

let products;

try {
    const response = await axios.get('http://localhost:3000/products');
    products = response.data;
    console.log('Productos disponibles:');
    console.table(products);
} catch (error) {
    console.error('Error al obtener producto:', error);
}

const newProduct = {
    id: products.length > 0
        ? Math.max(...products.map(product => +product.id)) + 1
        : 1,
    name: "Auriculares Sony",
    price: 249.50,
    category: "Audio"
};

// try {
//     const response = await axios.post('http://localhost:3000/products', newProduct);
//     console.log('Producto agregado:', newProduct);
//     console.table(products);
// } catch (error) {
//     console.error('Error al agregar producto:', error);
// }
//
// const updatedWholeProduct = {
//     name: "Teclado Mecánico Razer",
//     price: 149.99,
//     category: "Accesorios"
// };
//
// try {
//     const response = await axios.put('http://localhost:3000/products/4', updatedWholeProduct);
//     console.log('Producto actualizado:');
// } catch (error) {
//     console.error('Error al agregar producto:', error);
// }