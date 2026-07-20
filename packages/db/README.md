# @repo/db

Install dependencies(at root)

```bash
bun install
```

Prisma migrate

```bash
bunx prisma migrate dev --name init
```

Prisma migrate

```bash
bunx prisma generate
```

Update the .env file with the right credentials

```sh
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres
```

Create a DB locally

```sh
docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 --network cn postgres
```
