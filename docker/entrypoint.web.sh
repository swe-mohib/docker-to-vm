#!/bin/sh
set -e

echo "Running database migrations..."
cd /usr/src/app/packages/db
bunx prisma migrate deploy

echo "Starting web app..."
cd /usr/src/app
exec bun run start:web