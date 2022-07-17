import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.update({
      where: {
        id: 'e9507e55-bcec-4827-a94c-a244fb19471b'
      },
      data: {
        teacher: {
          connect: {
            id: '7db61481-3976-4785-8e6b-1abc7387041a'
          },
        },
      },
    });

    console.log('🚀🚀🚀 update course with teacher result', result);
  } catch (error) {
    console.log('🚀🚀🚀 update course with teacher error', error);
  }
}

main();
