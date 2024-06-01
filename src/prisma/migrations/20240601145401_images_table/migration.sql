-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "id_immobile" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_id_immobile_fkey" FOREIGN KEY ("id_immobile") REFERENCES "Immobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
