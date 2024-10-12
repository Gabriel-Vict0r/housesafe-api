-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "status" SET DEFAULT 'N',
ALTER COLUMN "status" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "Broker" ALTER COLUMN "status" SET DEFAULT 'N',
ALTER COLUMN "status" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "status" SET DEFAULT 'N',
ALTER COLUMN "status" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "Immobile" ALTER COLUMN "status" SET DEFAULT 'D',
ALTER COLUMN "status" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "Type" ALTER COLUMN "status" SET DEFAULT 'N',
ALTER COLUMN "status" SET DATA TYPE CHAR;

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "phone" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "message" VARCHAR NOT NULL,
    "status" CHAR NOT NULL DEFAULT 'A',

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
