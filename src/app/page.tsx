import db from '@/db';

async function userCreate() {
  const createdUser = await db.user.create({
    data: {
      email: 'the_shoguns@yahoo.com',
      isAdmin: true,
      name: 'Admin',
    },
  });
  console.log(createdUser);
  return createdUser;
}
export default async function Home() {
  const user = await userCreate();

  return (
    <div>
      <h1>hello miss glow</h1>
      <p>{user?.email}</p>
      <p>{user?.name}</p>
    </div>
  );
}
