import {
  getAllPostsModel,
  createPostModel,
  updatePostModel,
  deletePostModel,
  searchPostsModel,
} from "../models/blogModel.js";

export const getAllPosts = async () => {
  return getAllPostsModel();
};

export const createPost = async (postData) => {
  return createPostModel(postData);
};

export const updatePost = async (id, postData) => {
  return updatePostModel(id, postData);
};

export const deletePost = async (id) => {
  return deletePostModel(id);
};

export const searchPost = async (search) => {
  return searchPostsModel(search);
};
