import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.cousersModules.delete({
      where: {
        id: '72ae5cc8-77ec-4953-a849-1dd0569ffb90',
      },
    });

    console.log('🚀🚀🚀 delete courses modules result', result);
  } catch (error) {
    console.log('🚀🚀🚀 delete courses modules error', error);
  }
}

main();
