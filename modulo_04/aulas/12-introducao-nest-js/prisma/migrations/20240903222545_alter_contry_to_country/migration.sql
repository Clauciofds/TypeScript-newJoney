/*
  Warnings:

  - You are about to drop the column `contry` on the `authors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "authors" DROP COLUMN "contry",
ADD COLUMN     "country" CHAR(2);
