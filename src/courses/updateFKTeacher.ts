import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.courses.update({
      where: {
        id: '9acf176b-c6e4-4a9a-b89b-a8ed6fa7c7cf'
      },
      data: {
        fk_id_teacher: 'b85f67c6-8b32-4d05-8dfb-644224d1b5a2'
      },
    });

    console.log('🚀🚀🚀 update course with fk teacher result', result);
  } catch (error) {
    console.log('🚀🚀🚀 update course with fk teacher error', error);
  }
}

main();
