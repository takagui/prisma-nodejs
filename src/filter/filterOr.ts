import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.findMany({
      where: {
        OR: [
          {
            name: {
              contains: 'ReactJS',
              mode: 'insensitive',
            },
          },
          {
            name: {
              contains: 'React Native',
              mode: 'insensitive',
            },
          },
        ],
        AND: {
          duration: 200,
        },
      },
    });

    console.log('🚀🚀🚀 filter or result', result);
  } catch (error) {
    console.log('🚀🚀🚀 filter or error', error);
  }
}

main();
