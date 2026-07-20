import { prismaClient } from "@repo/db";

Bun.serve({
  port: 8081,
  fetch(req, server) {
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    async message(ws, message) {
      const username = "user_" + Date.now();
      const password = "pass_" + Date.now();
      try {
        const user = await prismaClient.user.create({
          data: {
            username,
            password,
          },
        });
        console.log("Created user:", user.id);
        ws.send(message);
      } catch (err) {
        console.error("Failed to create user:", err);
        ws.send(JSON.stringify({ error: "Failed to process message" }));
      }
    },
  },
});
