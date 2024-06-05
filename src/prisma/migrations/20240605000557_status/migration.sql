-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "status" CHAR NOT NULL DEFAULT 'N';

-- AlterTable
ALTER TABLE "Broker" ADD COLUMN     "status" CHAR NOT NULL DEFAULT 'N';

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "status" CHAR NOT NULL DEFAULT 'N';

-- AlterTable
ALTER TABLE "Immobile" ALTER COLUMN "status" SET DEFAULT 'D',
ALTER COLUMN "status" SET DATA TYPE CHAR;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "status" CHAR NOT NULL DEFAULT 'N';