import { PrismaClient } from "@prisma/client";
const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "prodution") globalThis.Prisma = db;
export default db;
