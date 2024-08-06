import sqlite3

dbFile = 'test.db'

# データベース接続の作成
conn = sqlite3.connect(dbFile)
cursor = conn.cursor()

# ユーザーテーブルの作成
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    user_name TEXT NOT NULL,
    photo BLOB,
    Balance REAL,
    account_number INTEGER,
    registerd_id INTEGER,
)
''')

# 履歴テーブルの作成
cursor.execute('''
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER,
    receiver_id INTEGER,
    amount REAL NOT NULL,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id), 
    
)
''')

# テーブルの確認
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print(f"Tables in {dbFile}: {tables}")

# データベース接続の閉鎖
conn.commit()
conn.close()

