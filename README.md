# DOCKER-TO-VM

Install dependencies

```bash
bun install
```

Run scripts

```sh
    "build": "turbo run build",
    "dev": "turbo run dev",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "check-types": "turbo run check-types",
    "db:generate": "cd packages/db && npx prisma generate && cd ../..",
    "start:web": "cd apps/web && bun run start",
    "start:backend": "cd apps/backend && bun run index.ts",
    "start:websocket": "cd apps/websocket && bun run index.ts"
```

Run app using, docker compose

```bash
docker compose down -v
# wipe everything, including the broken Postgres volume
docker compose up --build
# rebuild fresh images and start clean
```
