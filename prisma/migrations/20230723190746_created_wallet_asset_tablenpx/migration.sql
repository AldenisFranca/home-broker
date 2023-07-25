-- CreateTable
CREATE TABLE "WalletAsset" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "wallet_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "WalletAsset_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
