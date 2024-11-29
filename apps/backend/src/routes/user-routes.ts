import express from "express";
import { userQuery, users } from "../controllers/user-controller";

const router = express.Router();

router.get("/auth/google", users);
router.get("/users/:uid", userQuery);

export default router;
