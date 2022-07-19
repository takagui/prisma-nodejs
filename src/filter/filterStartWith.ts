import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.findMany({
      where: {
        name: {
          startsWith: 'curso',
          mode: 'insensitive',
        },
      },
    });

    console.log('🚀🚀🚀 filter start with result', result);
  } catch (error) {
    console.log('🚀🚀🚀 filter start with error', error);
  }
}

main();
