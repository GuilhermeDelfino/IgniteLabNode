/*
  Warnings:

  - You are about to drop the column `readAt` on the `Notifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Notifications" DROP COLUMN "readAt",
ADD COLUMN     "canceledAt" TIMESTAMP(3),
ADD COLUMN     "readedAt" TIMESTAMP(3);
