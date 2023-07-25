/*
  Warnings:

  - The primary key for the `WalletAsset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `_id` on the `WalletAsset` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `asset_id` to the `WalletAsset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shares` to the `WalletAsset` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WalletAsset" (
    "_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wallet_id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "shares" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "WalletAsset_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WalletAsset_asset_id_fkey" FOREIGN KEY ("asset_id") REFERENCES "Asset" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WalletAsset" ("_id", "created_at", "updated_at", "wallet_id") SELECT "_id", "created_at", "updated_at", "wallet_id" FROM "WalletAsset";
DROP TABLE "WalletAsset";
ALTER TABLE "new_WalletAsset" RENAME TO "WalletAsset";
CREATE UNIQUE INDEX "WalletAsset_wallet_id_asset_id_key" ON "WalletAsset"("wallet_id", "asset_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
