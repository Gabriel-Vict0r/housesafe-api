-- CreateTable
CREATE TABLE "Immobile" (
    "id" SERIAL NOT NULL,
    "id_broker" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,
    "price" DECIMAL(12,3) NOT NULL,
    "additional" VARCHAR(255) NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "bathroom" INTEGER NOT NULL,
    "vehicle_vacany" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "recreation_area" INTEGER NOT NULL,
    "pools" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Immobile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Immobile_address_id_key" ON "Immobile"("address_id");

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_id_broker_fkey" FOREIGN KEY ("id_broker") REFERENCES "Broker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
