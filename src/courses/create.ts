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

async function createManyDataCouse() {
  try {
    const result = await prisma.courses.createMany({
      data: [
        { 
          duration: 200,
          name: 'Curso de ReactJS',
          description: 'Curso de ReactJS com Typescript',
        },
        {
          duration: 200,
          name: 'Curso de React Native',
          description: 'Curso de React Native com Expo',
        },
        {
          duration: 200,
          name: 'Curso de Elixir',
          description: 'Curso de Elixir',
        },
      ],
    });

    console.log('🚀🚀🚀 insert many courses result', result);
  } catch (error) {
    console.log('🚀🚀🚀 insert many courses error', error);

  }
}

main();
createManyDataCouse()