import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.create({
      data: {
        name: 'Curso de Flutter',
        duration: 200,
        teacher: {
          create: {
            name: 'Rafa Camarda',
          },
        },
      },
    });

    console.log('🚀🚀🚀 create course non existing teacher result', result);
  } catch (error) {
    console.log('🚀🚀🚀 create course non existing teacher error', error);
  }
}

main();
