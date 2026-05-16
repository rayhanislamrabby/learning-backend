import { PrismaClien } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { envVars } from "../src/config/env.js";

const connectionString = envVars.DATABASE_URL as string;

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClien({
  adapter,
});

export default prisma;
