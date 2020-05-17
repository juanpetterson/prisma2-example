import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// prisma.user
//   .create({
//     data: {
//       name: 'Juan',
//       email: 'juan.petterson2@gmail.com',
//     },
//   })
//   .then(() => {
//     console.log('Cadastrou');
//   });

async function main() {
  // const allUsers = await prisma.user.findMany();
  // const allUsers = await prisma.user.create({
  //   data: {
  //     name: 'Juan',
  //     email: 'juan.petterson3@gmail.com',
  //     Post: {
  //       create: [{ title: 'Post 1' }, { title: 'Post 2' }],
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: {
      Post: true,
    },
  });
  console.log(allUsers);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
