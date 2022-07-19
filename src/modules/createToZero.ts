import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.cousersModules.create({
      data: {
        couses: {
          create: {
            duration: 200,
            name: 'Curso de Go',
            description: 'Curso completo de Go'
          },
        },
        modules: {
          create: {
            name: 'Aprendendo sobre microserviços',
            description: 'Desenvolvendo microserviços do zero',
          },
        },
      },
    });

    console.log('🚀🚀🚀 create to zero modules result', result);
  } catch (error) {
    console.log('🚀🚀🚀 create to zero modules error', error);
  }
}

main();
