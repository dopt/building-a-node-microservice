-- CreateTable
CREATE TABLE "StateTransition" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "transition" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StateTransition_pkey" PRIMARY KEY ("id")
);
