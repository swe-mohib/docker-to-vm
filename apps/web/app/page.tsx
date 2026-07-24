export const dynamic = "force-dynamic";
import os from "os";

import { prismaClient } from "@repo/db";
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]!) {
      // skip internal (127.0.0.1) and non-ipv4 addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "127.0.0.1";
}
export default async function Home() {
  const ip = getLocalIP();
  const username = os.hostname();
  const password = ip;
  await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {users.length == 0
        ? "No users"
        : users.map((e, i) => (
            <p key={i}>
              {e.id}: {e.username},{e.password}
            </p>
          ))}
      {/* {JSON.stringify(users)} */}
    </div>
  );
}
// export const revalidate = 60; // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
