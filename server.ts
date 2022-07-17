import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.create({
      data: {
        duration: 200,
        name: 'Curso de NodeJs',
        description: 'Curso de NodeJS com Express',
      },
    });
  
    console.log('🚀🚀🚀 insert course result', result);
  } catch (error) {
    console.log('🚀🚀🚀 insert course error', error);
  }
}

main();