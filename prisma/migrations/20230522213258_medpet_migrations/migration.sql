/*
  Warnings:

  - Changed the type of `status` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "value" SET DATA TYPE TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL;
