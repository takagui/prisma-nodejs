import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {    
    const result = await prisma.books.create({
      data: {
        name: 'Arquitetura Limpa',
        author_id: 'ea023be2-b894-4429-b461-d1bcc70c8f6e',
      },
    });

    console.log('🚀🚀🚀 create book result', result);
  } catch (error) {
    console.log('🚀🚀🚀 create book error', error);
  }
}

main();
