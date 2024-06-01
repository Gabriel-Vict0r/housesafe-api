/*
  Warnings:

  - Added the required column `id_category` to the `Immobile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_type` to the `Immobile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Immobile" ADD COLUMN     "id_category" INTEGER NOT NULL,
ADD COLUMN     "id_type" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
