import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.findMany({
      where: {
        id: 'e9507e55-bcec-4827-a94c-a244fb19471b'
      },
      include: {
        CousersModules: true,
      },
    });

    console.log('🚀🚀🚀 find by course id courses result', JSON.stringify(result));
  } catch (error) {
    console.log('🚀🚀🚀 find by course id courses error', error);
  }
}

main();
