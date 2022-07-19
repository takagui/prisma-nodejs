import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {    
    const result = await prisma.authors.create({
      data: {
        name: "Robert C. Martin",
        Books: {
          create: {
            name: 'Código limpo',
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
