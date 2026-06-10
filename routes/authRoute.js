import express from 'express'
import { registerController,loginController,testController, forgotPasswordController, updateProfileController} from '../controllers/authController.js';
import { isAdmin, requiresSignIn } from '../middlewares/authMiddleware.js';
//route object
const router = express.Router();

//routing
//Register || method post
router.post("/register",registerController);

//LOGIN || post
router.post('/login',loginController);

//forgot password
router.post('/forgot-password',forgotPasswordController)

router.get('/test',requiresSignIn,isAdmin,testController);

// for route procteted auth
router.get("/user-auth", requiresSignIn, (req, res)=> {
    res.status(200).send({ok: true});
});

router.get("/admin-auth", requiresSignIn,isAdmin, (req, res) => {
    res.status(200).send({ok: true});
});

//update
router.put("/profile",requiresSignIn, updateProfileController)


export default router;