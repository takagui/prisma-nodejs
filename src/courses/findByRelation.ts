import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.cousersModules.findMany({
      include: {
        couses: true,
        modules: true,
      }
    });

    console.log('🚀🚀🚀 find by relation courses modules result', JSON.stringify(result));
  } catch (error) {
    console.log('🚀🚀🚀 find by relation courses modules error', error);
  }
}

main();
