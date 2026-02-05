import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  // Prisma 7 requires adapter-based configuration
  // DATABASE_URL is configured in prisma.config.ts
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new (PrismaClient as any)({
    adapter: undefined, // Will use default adapter from prisma.config.ts
  });
}

export function getPrisma(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

// Lazy-loaded prisma instance
export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    return getPrisma()[prop as keyof PrismaClient];
  },
});

export default prisma;
