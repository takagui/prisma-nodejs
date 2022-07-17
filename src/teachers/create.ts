import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.teachers.createMany({
      data: [
        {
          name: 'Daniele Leão Evangelista',
        },
        {
          name: 'Diego Fernandes',
        },
        {
          name: 'Rodrigo Gonçalves',
        },
        {
          name: 'Mayk Brito',
        },
        {
          name: 'Jakeliny Gracielly',
        },
      ],
    });

    console.log('🚀🚀🚀 insert teacher result', result);
  } catch (error) {
    console.log('🚀🚀🚀 insert teacher error', error);
  }
}

main();
