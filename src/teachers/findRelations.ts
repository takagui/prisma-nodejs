import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.findMany({
      include: {
        teacher: true,
      },
    });


    console.log('🚀🚀🚀 findRelation result', result);
  } catch (error) {
    console.log('🚀🚀🚀 findRelation error', error);
  }
}

main();
