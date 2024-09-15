import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  searchPost
} from "../services/blogService.js";

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: "Error fetching blog posts" });
  }
};

export const createPostController = async (req, res) => {
  const { title, content, categorie, tags } = req.body;
  try {
    const newPost = await createPost({ title, content, categorie, tags });
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Error creating blog post" });
  }
};

export const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { title, content, categorie, tags } = req.body;
  try {
    const updatedPost = await updatePost(id, {
      title,
      content,
      categorie,
      tags,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ message: "Error updating blog post" });
  }
};

export const deletePostController = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePost(id);
    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(404).json({ message: "Blog Post not found !" });
  }
};


export const searchPostsController = async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ message: "Search query is required" });
  }

  try {
    const blogPosts = await searchPost(search)

    if (blogPosts.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found matching your search query" });
    }

    res.status(200).json(blogPosts);
  } catch (error) {
    console.error("Error searching blog posts:", error);
    res.status(500).json({ message: "Error searching blog posts" });
  }
};
