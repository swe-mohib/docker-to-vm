export const dynamic = "force-dynamic";

import { prismaClient } from "@repo/db";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {users.length == 0
        ? "No users"
        : users.map((e, i) => (
            <p key={i}>
              {e.id}: {e.username}
            </p>
          ))}
      {/* {JSON.stringify(users)} */}
    </div>
  );
}
// export const revalidate = 60; // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
