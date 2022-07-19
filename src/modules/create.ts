import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.modules.create({
      data: {
        description: 'Aprendendo firebase do zero',
        name: 'Aprendendo Firebase',
        CousersModules: {
          create: {
            couses: {
              connect: {
                id: 'e9507e55-bcec-4827-a94c-a244fb19471b'
              },
            },
          },
        },
      },
    });

    console.log('🚀🚀🚀 create module result', result);
  } catch (error) {
    console.log('🚀🚀🚀 create module error', error);
  }
}

main();
