import { Router } from "express";
import {
  getAllPostsController,
  createPostController,
  updatePostController,
  deletePostController,
  searchPostsController
} from "../controllers/blogController.js";
import {
  createPostValidator,
  updatePostValidator,
} from "../validators/blogValidator.js";
import { validate } from "../middlewares/validate.js"; 

const router = Router();

router.get("/", getAllPostsController);
router.post("/", createPostValidator, validate, createPostController);
router.put("/:id", updatePostValidator, validate, updatePostController);
router.delete("/:id", deletePostController);
router.get("/search", searchPostsController);

export default router;
