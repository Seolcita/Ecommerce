const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { 
    create, 
    listAll, 
    remove, 
    read, 
    update, 
    list, 
    productsCount, 
    productStar, 
    listRelated 
} = require("../controllers/product");

// routes
router.post("/product", authCheck, adminCheck, create);
router.get("/products/total", productsCount);
router.get("/products/:count", listAll); // products/100
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);

//the reason why we use .post
//is that we send parameters for filtering.
router.post("/products", list); 

// rating
router.put("/product/star/:productId", authCheck, productStar);

// related
router.get("/product/related/:productId", listRelated);


module.exports = router;
