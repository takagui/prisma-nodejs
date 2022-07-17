import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.update({
      where: {
        id: '8eebd81b-2c38-4a04-b166-3af00f72ccbe'
      },
      data: {
        duration: 300,
      },
    });

    console.log('🚀🚀🚀 update course result', result);
  } catch (error) {
    console.log('🚀🚀🚀 update course error', error);
  }
}

main();
