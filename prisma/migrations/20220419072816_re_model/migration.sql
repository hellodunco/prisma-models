/*
  Warnings:

  - You are about to drop the column `invoice_no` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `address` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `items` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_invoice_no_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_order_no_fkey";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "address" SET NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "invoice_no",
ADD COLUMN     "items" JSONB NOT NULL;

-- DropTable
DROP TABLE "Item";
