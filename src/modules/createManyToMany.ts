import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.cousersModules.create({
      data: {
        fk_id_course: 'faea3e4d-1cbe-41ca-9130-73c6c65380ea',
        fk_id_module: '32b3f0b9-cc39-4bb7-8779-e0f36d4b8c35',
      },
    });

    console.log('🚀🚀🚀 create many to many module result', result);
  } catch (error) {
    console.log('🚀🚀🚀 create many to many module error', error);
  }
}

main();
