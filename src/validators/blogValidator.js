import { body } from "express-validator";

export const createPostValidator = [
  body("title").trim().escape().notEmpty().withMessage("Title is required"),
  body("content").trim().escape().notEmpty().withMessage("Content is required"),
  body("categorie")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Category is required"),
  body("tags").isArray().withMessage("Tags must be an array"),
];

export const updatePostValidator = [
  body("title").optional().trim().escape(),
  body("content").optional().trim().escape(),
  body("categorie").optional().trim().escape(),
  body("tags").optional().isArray().withMessage("Tags must be an array"),
];
