import { PrismaPg } from "@prisma/adapter-pg";

import { envVars } from "../src/config/env.js";
import { PrismaClient } from "@prisma/client";

const connectionString = envVars.DATABASE_URL as string;

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
