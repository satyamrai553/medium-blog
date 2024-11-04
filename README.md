
# Medium Blog Clone

This is a Medium-like blogging application built with React, Tailwind CSS, and a backend API. It allows users to sign up, sign in, create and publish blogs, and view other users' blogs. The application includes authentication and authorization using JWT.

## Features

- User Authentication (Sign up, Sign in)
- Create, publish, and view blogs
- User Profile management
- Responsive and modern design using Tailwind CSS

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Hono, Postgres, and Prisma
- **Authentication**: JWT (JSON Web Token)

## Installation

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/satyamrai553/medium-blog.git
cd medium-blog
```

### 2. Install Dependencies

Navigate to the root of your project and install the dependencies:

```bash
npm install
```


### 3. Environment Configuration

#### `.env` File

Create a `.env` file in the root of your project to set up your environment variables. Here’s an example of what to include:

```env
DATABASE_URL=mongodb://localhost:27017/your-database-name
```

#### `wrangler.toml` Configuration (for Cloudflare Workers)

If you're using Cloudflare Workers, add the following variables in the `wrangler.toml` configuration file:

```toml
[env.production]
DATABASE_URL = "your_database_url"
JWT_SECRET = "your_jwt_secret_key"
```

### 4. Run the Application

To start both frontend and backend servers, run:

```bash
npm run dev
```

