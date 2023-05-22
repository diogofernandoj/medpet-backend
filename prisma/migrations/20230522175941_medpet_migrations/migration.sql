/*
  Warnings:

  - Made the column `client_name` on table `appointments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "appointments" ALTER COLUMN "client_name" SET NOT NULL,
ALTER COLUMN "date" SET DATA TYPE TEXT;
