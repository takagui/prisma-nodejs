import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {    
    const result = await prisma.authors.create({
      data: {
        name: "Robert C. Martin",
        Books: {
          create: {
            name: 'Cรณdigo limpo',
          },
        },
      },
    });

    console.log('๐๐๐ create author result', result);
  } catch (error) {
    console.log('๐๐๐ create author error', error);
  }
}

main();
