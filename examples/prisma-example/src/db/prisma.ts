import { PrismaClient } from "../generated/prisma";

class PrismaSingleton {
  private static instance: PrismaClient | undefined;

  static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient();
    }

    return PrismaSingleton.instance;
  }
}

export const prisma = PrismaSingleton.getInstance();
