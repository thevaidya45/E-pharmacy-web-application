import express from 'express';
import {isAdmin, requiresSignIn} from "./../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router()

//routes
//creating category
router.post(
    "/create-category",
    requiresSignIn,isAdmin,
    createCategoryController
);

// update categoryy
router.put("/update-category/:id",requiresSignIn,isAdmin, updateCategoryController);

//get category
router.get("/get-category", categoryController);

router.get("/single-category/:slug", singleCategoryController);

// to delete category
router.delete("/delete-category/:id",requiresSignIn, isAdmin, deleteCategoryController);


export default router;