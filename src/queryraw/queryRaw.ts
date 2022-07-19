import { PrismaClient, Prisma, Modules } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.$queryRaw<Modules[]>(Prisma.sql`SELECT * FROM modules`);

    result.map((item, index) => {
      console.log(`🚀🚀🚀 item ${index}`, item.name);
    })
    // console.log('🚀🚀🚀 queryRaw result', result);
  } catch (error) {
    console.log('🚀🚀🚀 queryRaw error', error);
  }
}

main();
