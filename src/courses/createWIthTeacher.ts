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
              name: 'Daniele LeΓ£o Evangelista'
            },
            create: {
              name: 'Daniele LeΓ£o Evangelista'
            }
          }
        }
      }
    });

    console.log('πππ insert course with teacher result', result);
  } catch (error) {
    console.log('πππ insert course with teacher error', error);
  }
}

main();
