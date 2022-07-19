import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    let skip = 0;
    let exist = true

    while (exist) {
      // [1, 2, 3, 4, 5, 6]
      const result = await prisma.courses.findMany({
        skip: skip, // a partir do item 0
        take: 2,    // [1, 2] 
      });

      skip += 2;
  
      if (result.length <= 0) {
        exist = false;
      }

      console.log('🚀🚀🚀 pagination result', result);
      console.log('----------------------------------')
    }
  } catch (error) {
    console.log('🚀🚀🚀 pagination error', error);
  }
}

main();
