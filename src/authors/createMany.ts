import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {    
    const result = await prisma.authors.create({
      data: {
        name: "Mayk Brito",
        Books: {
          createMany: {
            data: [
              { name: 'Como começar na programação' },
              { name: 'Como ser muito produtivo' },
            ],
          },
        },
      },
    });

    console.log('🚀🚀🚀 create author result', result);
  } catch (error) {
    console.log('🚀🚀🚀 create author error', error);
  }
}

main();
