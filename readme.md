## Blogging API

A project challenge on [blogging-platform-api](https://roadmap.sh/projects/blogging-platform-api) from [roadmap.sh](https://roadmap.sh/).

A RESTful API for creating, updating, searching, and managing blog posts using **Express**, **Prisma**, and **PostgreSQL**.

### Features

- Create, update, delete, and fetch blog posts.
- Search blog posts by title, content, category, and tags.
- Input validation using **express-validator**.
- Prisma as the ORM and PostgreSQL as the database.

### Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for building APIs.
- **Prisma**: ORM for database interactions.
- **PostgreSQL**: Relational database.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [PostgreSQL](https://www.postgresql.org/) (version 12.x or higher)
- [Prisma](https://www.prisma.io/)

### Getting Started

Follow these steps to get the project up and running:

#### 1. Clone the Repository

```bash
git clone https://github.com/kaleb110/blogging-platform-api
cd blogging-platform-api
```

#### 2. Install dependancies

```bash
npm install
```

#### 3. Setup enviroment Variables

Create a .env file in the root directory of your project and replace DATABASE_URL with your postgresql connection string.

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/blogdb?schema=public"
PORT=5000
```

#### 4. Setup Prisma

To initialize Prisma and apply migrations to your PostgreSQL database:

```bash
npx prisma migrate dev --name init
```

#### 5. Start the Server

```bash
npm start
```

### API endpoints

1. fetch all posts

```bash
GET /posts
```

2. fetch a single posts

```bash
GET /posts/id
```

3. update post

```bash
PUT /posts/id
```

4. delete post

```bash
DELETE /posts/id
```

5. search post

```bash
GET /posts/?search=term
```

thanks ! made with ❤️
