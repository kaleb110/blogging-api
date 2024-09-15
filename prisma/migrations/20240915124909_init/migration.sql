-- CreateTable
CREATE TABLE "BlogPosts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "tags" TEXT[],
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogPosts_pkey" PRIMARY KEY ("id")
);
