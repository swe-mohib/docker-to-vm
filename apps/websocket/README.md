# WEBSOCKET

### To run websocket app using docker manually:

Create network

```bash
docker create network cn
```

Run postgres database

```bash
docker run --name postgres -p 5432:5432 --network cn -e POSTGRES_PASSWORD=password -d postgres
```

Build image

```bash
docker build -t immohib/docker-to-vm-websocket -f ./docker/Dockerfile.websocket .
```

Run image

```bash
docker run --name websocket -p 8081:8081 --network cn -e DATABASE_URL=postgresql://postgres:password@postgres:5432/postgres -d immohib/docker-to-vm-websocket
```

Push to docker

```bash
docker push immohib/docker-to-vm-websocket
```

Pull from docker

```bash
docker pull immohib/docker-to-vm-websocket
```

### To run using docker compose:

```bash
docker-compose up
```
