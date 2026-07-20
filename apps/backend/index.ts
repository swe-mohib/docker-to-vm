import express from "express";
import { prismaClient } from "@repo/db";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  prismaClient.user
    .findMany()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/user", (req, res) => {
  const username = "user_" + Date.now();
  const password = "pass_" + Date.now();

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  prismaClient.user
    .create({
      data: {
        username,
        password,
      },
    })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(8080);
