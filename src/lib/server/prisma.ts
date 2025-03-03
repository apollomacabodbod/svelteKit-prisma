// const { PrismaClient } = await import("@prisma/client");

// const prisma = global.prisma || new PrismaClient()

// if (process.env.NODE_ENV === "development") {
// 	global.prisma = prisma
// }

// export { prisma }



import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV === "development") {
  globalForPrisma.prisma = prisma;
}

