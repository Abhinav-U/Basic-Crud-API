const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const PORT = 3000;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//routes
app.use("/api/products", productRoute);

//API for home page
app.get("/", (req, res) => {
  res.send("This is Home Page");
});

//API for getting/displaying all products
/*
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//API for getting singular product by passing its id

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//API for creating documents from database
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//API for updating the document from database
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// API for deleting the document from database
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
*/

mongoose
  .connect("mongodb://127.0.0.1:27017/CrudDb")
  .then(() => {
    console.log("Connected to the database!!");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch(() => console.log("Connection Failed!"));
