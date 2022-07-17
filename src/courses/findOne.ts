import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Select * from courses limit 1
    const result = await prisma.courses.findFirst();

    // Select * from courses order by id desc limit 1
    // const result = await prisma.courses.findFirst({
    //    take: -1,
    // });

    console.log('🚀🚀🚀 find first course result', result);
  } catch (error) {
    console.log('🚀🚀🚀 find first course error', error);
  
  }  
}

main();
