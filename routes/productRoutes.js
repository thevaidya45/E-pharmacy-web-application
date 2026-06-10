import express from 'express';
import {isAdmin,requiresSignIn} from '../middlewares/authMiddleware.js';
import {  createProductController, deleteproductcontroller, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productphotoController, searchProductController, updateproductcontroller } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

// routess

router.post("/create-product", requiresSignIn,isAdmin,formidable(), createProductController);

//update product
router.put("/update-product/:pid", requiresSignIn,isAdmin,formidable(), updateproductcontroller);

// to get products
router.get("/get-products", getProductController);

router.get("/get-products/:slug", getSingleProductController);

router.get("/product-photo/:pid", productphotoController);

//delete product
router.delete("/delete-product/:pid", deleteproductcontroller);

//filter product
router.post("/product-filters",productFilterController);

router.get("/product-count",productCountController);

router.get("/product-list/:page",productListController);

router.get("/search/:keyword", searchProductController);

router.get("/product-category/:slug",productCategoryController);




export default router;