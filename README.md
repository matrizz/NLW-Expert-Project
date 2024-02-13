# Node.js Project with Docker, PostgreSQL, Fastify, and Redis

This is a Node.js project that utilizes Docker to manage development and production environments, PostgreSQL as a relational database, Fastify as a web framework, Redis as an in-memory database and Prisma as ORM.

## Prerequisites

- Node.js: [Installation](https://nodejs.org/)
- Docker: [Installation](https://docs.docker.com/get-docker/)
- PostgreSQL: [Installation](https://www.postgresql.org/download/)
- Redis: [Installation](https://redis.io/download)
- Prisma: [Instalation](https://www.prisma.io/docs/orm/tools/prisma-cli#installation)

## Installation

1. Clone this repository:

```bash
git clone https://github.com/matrizz/NLW-Expert-Project.git
cd your-project
```

2. Install project dependencies:

```bash
npm install
```

3. Copy the `.env.example` file to `.env` and configure the environment variables:

```bash
cp .env.template .env
```

4. Start the Docker containers:

```bash
docker compose up -d
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

6. Start the server:

```bash
npm start
```

## Usage

The server will be running at http://localhost:3333.

# TODO

- [ ] Frontend
