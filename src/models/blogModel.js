import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPostsModel = async () => {
  return prisma.blogPosts.findMany({ orderBy: { createdat: "desc" } });
};

export const createPostModel = async (postData) => {
  return prisma.blogPosts.create({ data: postData });
};

export const updatePostModel = async (id, postData) => {
  return prisma.blogPosts.update({
    where: { id: parseInt(id) },
    data: postData,
  });
};

export const deletePostModel = async (id) => {
  return prisma.blogPosts.delete({ where: { id: parseInt(id) } });
};

export const searchPostsModel = async (search) => {
  return prisma.blogPosts.findMany({
    where: {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
        { categorie: { contains: search, mode: "insensitive" } },
        { tags: { has: search } },
      ],
    },
    orderBy: { createdat: "desc" },
  });
};