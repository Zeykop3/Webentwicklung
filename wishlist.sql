CREATE TABLE IF NOT EXISTS wishlist (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    TEXT NOT NULL,
    product_id TEXT NOT NULL,
    UNIQUE (user_id, product_id)           -- verhindert Duplikate
);
