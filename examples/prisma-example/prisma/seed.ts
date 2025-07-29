import { PrismaClient } from "../src/generated/prisma/client";
import { faker } from "@faker-js/faker";
import { ProjectCreateManyInput } from "../src/generated/prisma/models";

const data = Array.from({ length: 100 }).map<ProjectCreateManyInput>(() => ({
  description: faker.lorem.paragraph(),
  name: faker.company.buzzPhrase(),
  createdAt: faker.date.recent({
    days: 365,
  }),
}));

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
