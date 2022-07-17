import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.create({
      data: {
        name: 'Curso de Java',
        duration: 500,
        description: 'Curso de Java 17',
        teacher: {
          connectOrCreate: {
            where: {
              name: 'Daniele Leão Evangelista'
            },
            create: {
              name: 'Daniele Leão Evangelista'
            }
          }
        }
      }
    });

    console.log('🚀🚀🚀 insert course with teacher result', result);
  } catch (error) {
    console.log('🚀🚀🚀 insert course with teacher error', error);
  }
}

main();
