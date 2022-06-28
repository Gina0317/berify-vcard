import { PrismaClient } from '@prisma/client';

declare global {
  var berifyDB: PrismaClient | undefined;
}

const berifyDB = global.berifyDB || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.berifyDB = berifyDB;

export default berifyDB;
