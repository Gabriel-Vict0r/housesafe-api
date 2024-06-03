/*
  Warnings:

  - You are about to alter the column `number` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "number" SET DATA TYPE INTEGER;
