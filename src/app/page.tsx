import db from '@/db';

async function searchUser() {
  const user = await db.user.findFirst({
    where: {
      isAdmin: true,
    },
  });
  return user;
}
export default async function Home() {
  const user = await searchUser();

  return (
    <div>
      <h1>hello miss glow</h1>
      <p>{user?.email}</p>
      <p>{user?.name}</p>
    </div>
  );
}
