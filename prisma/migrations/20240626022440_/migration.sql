/*
  Warnings:

  - You are about to alter the column `height` on the `header` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `header` MODIFY `height` INTEGER NULL;
