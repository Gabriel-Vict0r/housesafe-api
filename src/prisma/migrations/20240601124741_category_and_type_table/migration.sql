-- AlterTable
ALTER TABLE "Broker" ALTER COLUMN "image" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
