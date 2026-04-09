# Express with PostgreSQL

A small Express + PostgreSQL app for practicing server-side rendering with EJS and basic database operations.

![Screenshot](./assets/screenshot.png)

![Local](./assets/local-db.png)

## Features

- View all users from PostgreSQL
- Search users by username (case-insensitive)
- Create a new user
- Delete all users
- Server-rendered pages with EJS

## Tech Stack

- Node.js
- Express 5
- PostgreSQL
- pg (node-postgres)
- EJS
- dotenv

## Prerequisites

Install these first:

- Node.js 18+ (Node.js 20+ recommended)
- npm
- PostgreSQL 14+ (or any compatible recent version)

## 1) Clone and install

```bash
git clone https://github.com/melio0504/express-with-postgresql
cd express-with-pg
npm install
```

## 2) Configure environment variables

Create a `.env` file in the project root.

You can use either `DATABASE_URL` or individual DB fields.

### Option A: Use `DATABASE_URL`

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/express_with_pg
PORT=3000
```

### Option B: Use split DB variables

```env
DB_HOST=localhost
DB_USER=postgres
DB_NAME=express_with_pg
DB_PASSWORD=your_password
DB_PORT=5432
PORT=3000
```

## 3) Create the PostgreSQL database

Open `psql` and run:

```sql
CREATE DATABASE express_with_pg;
```

## 4) Create tables and seed data

Run:

```bash
npm run populate
```

This creates the `usernames` table (if it does not exist) and inserts sample records.

## 5) Start the app

Run development mode:

```bash
npm run dev
```

The app starts on:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev`: starts the app with Node watch mode (`app.js`)
- `npm run populate`: runs `db/populatedb.js` to initialize and seed the database

## Routes

- `GET /` - list users and optionally filter with `?search=<term>`
- `GET /create` - show create-user form
- `POST /create` - insert a new user
- `GET /delete` - delete all users
