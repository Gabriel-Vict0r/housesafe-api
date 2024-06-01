/*
  Warnings:

  - Added the required column `title` to the `Immobile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Immobile" ADD COLUMN     "title" TEXT NOT NULL;
