-- CreateTable
CREATE TABLE "Broker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "Broker_pkey" PRIMARY KEY ("id")
);
