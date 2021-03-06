import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.teachers.createMany({
      data: [
        {
          name: 'Daniele Leรฃo Evangelista',
        },
        {
          name: 'Diego Fernandes',
        },
        {
          name: 'Rodrigo Gonรงalves',
        },
        {
          name: 'Mayk Brito',
        },
        {
          name: 'Jakeliny Gracielly',
        },
      ],
    });

    console.log('๐๐๐ insert teacher result', result);
  } catch (error) {
    console.log('๐๐๐ insert teacher error', error);
  }
}

main();
