
# 🛍️ Product Management with JSON Server + Axios

Welcome! This project simulates a basic product inventory system using a local server (JSON Server) and HTTP requests via **Axios**.

You'll learn how to create, read, update, and delete (CRUD) products through real API calls — a key skill in modern web development.

---

## 🧠 What You’ll Learn

✅ How APIs and mock servers work  
✅ Performing CRUD operations using HTTP methods (GET, POST, PUT, DELETE)  
✅ Sending requests using Axios  
✅ Validating data before sending it  
✅ Handling server errors and failed requests  

---

## ⚙️ Requirements

Before running the project, make sure you have:

- ✅ [Node.js](https://nodejs.org/) installed
- ✅ JSON Server installed globally  
  ```bash
  npm install -g json-server
  ```
- ✅ Axios installed in your project  
  ```bash
  npm install axios
  ```

---

## 🚀 How to Run the Project

1. **Start JSON Server** in one terminal window:
   ```bash
   json-server --watch db.json
   ```

2. **Run your script** in a separate terminal window:
   ```bash
   node gestion_api.js
   ```

You should see the product list, along with a product being added, updated, and deleted — all via real API calls! 🔥

---

## 📦 Features

- 📄 **List products** from the server (`GET`)
- ➕ **Add new products** (`POST`) with validation
- ✏️ **Update existing products** (`PUT`) with validation
- ❌ **Delete products** by ID (`DELETE`)
- 🛡️ **Validation**: Checks required fields and valid price
- 🚨 **Error handling** using `try...catch`

---

## 🧪 Sample Output

```bash
// run node gestion_api.js
Available products:
┌─────────┬────┬──────────────────────┬──────────┬──────────────┐
│ (index) │ id │        name          │  price   │   category   │
├─────────┼────┼──────────────────────┼──────────┼──────────────┤
│    0    │ 1  │   Lenovo Laptop      │ 2499.99  │ Computers     │
│    1    │ 2  │   LG Monitor         │ 799.99   │ Displays      │
│    2    │ 3  │   Logitech Mouse     │ 89.9     │ Accessories   │
│    3    │ 4  │   Mechanical Keyboard│ 149.99   │ Accessories   │
└─────────┴────┴──────────────────────┴──────────┴──────────────┘
Product added: { id: 5, name: 'Monitor', price: 200, category: 'Displays' }
Product updated: { name: 'Laptop', price: 1400, category: 'Computers', id: '1' }
Product deleted
```

---

Enjoy coding! 💻🔥
