import sqlite3

dbFile = 'test.db'

# 既存のテーブルを削除（存在する場合）
conn = sqlite3.connect(dbFile)
cursor = conn.cursor()

cursor.execute('DROP TABLE IF EXISTS transactions')
cursor.execute('DROP TABLE IF EXISTS users')

# ユーザーテーブルの作成
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    password STRING,
    user_name TEXT NOT NULL,
    photo BLOB,
    balance REAL,
    account_number INTEGER,
    registered_id INTEGER
)
''')

# 履歴テーブルの作成
cursor.execute('''
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER,
    receiver_id INTEGER,
    amount REAL NOT NULL,
    request_date DATETIME DEFAULT (datetime('now')),
    send_date DATETIME DEFAULT (datetime('now')),
    message TEXT,
    determination BOOLEAN,
    type TEXT NOT NULL, --請求送金判別カラム  
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
)
''')

# テストデータの挿入
with open('./images/icon1.png', 'rb') as f:
    icon1 = f.read()
with open('./images/icon2.png', 'rb') as f:
    icon2 = f.read()
with open('./images/icon3.png', 'rb') as f:
    icon3 = f.read()
with open('./images/icon4.png', 'rb') as f:
    icon4 = f.read()
with open('./images/icon5.png', 'rb') as f:
    icon5 = f.read()
with open('./images/icon6.png', 'rb') as f:
    icon6 = f.read()
# テストデータの挿入
users_data = [
    #   password  名前     icon   残高     口座番号  tourokuzumiid
    (1, '7464', '田中花子', icon1, 1000.0, 123456, 101),
    (2, '2237', '鈴木かける', icon2, 1500.0, 123457, 102),
    (3, '6908', '佐藤修二', icon3, 2000.0, 123458, 103),
    (4, '4637', '安藤太郎', icon4, 2500.0, 123459, 104),
    (5, '4322', '池上温子', icon5, 3000.0, 123460, 105),
    (6, '1234', '田川七', icon6, 3500.0, 123461, 106),
    (7, '4443', '上野篤俊', icon1, 4000.0, 123462, 107),
    (8, '8393', '太田正', icon2, 4500.0, 123463, 108),
    (9, '3438', '高橋吉', icon3, 5000.0, 123464, 109),
    (10, '1432', '小川宗孝', icon4, 5500.0, 123465, 110)
]


cursor.executemany('''
INSERT INTO users (id, password, user_name, photo, balance, account_number, registered_id)
VALUES (?, ?, ?, ?, ?, ?, ?)
''', users_data)

# サンプルトランザクションデータの挿入
transactions_data = [
    (1, 2, 100.0, 'send', 'こんにちは', True),
    (1, 3, 200.0, 'request', 'んにち', False),
    (1, 4, 300.0, 'send', 'こんには', True),
    (4, 5, 400.0, 'request', 'んにちは', False),
    (5, 6, 500.0, 'send', 'にちは', True),
    (6, 7, 600.0, 'request', 'こちは', False),
    (7, 8, 700.0, 'send', 'こは', True),
    (8, 9, 800.0, 'request', 'いい', False),
    (9, 10, 900.0, 'send', 'ああ', True),
    (10, 1, 1000.0, 'request', 'よろしくお願いします', False)
]

cursor.executemany('''
INSERT INTO transactions (sender_id, receiver_id, amount, type, message, determination)
VALUES (?, ?, ?, ?, ?, ?)
''', transactions_data)






def get_data_sender(sender_id):
    conn = sqlite3.connect(dbFile)
    c = conn.cursor()
    c.execute('select * from transactions where sender_id =  ?', (sender_id, ))
    list1 = c.fetchall()
    conn.commit()
    conn.close()
    return list1


#ログイン時に使用
# db.py (関連する部分のみ)

def account_search(account_number, password):
    conn = sqlite3.connect(dbFile)
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE account_number = ? AND password = ?', (account_number, password))
    user = c.fetchone()
    conn.close()
    if user:
        return {
            "id": user[0],
            "user_name": user[2],
            "balance": user[4],
            "account_number": user[5],
            "registered_id": user[6]
        }
    return None


#送金の履歴をデータベースに追加
def insert_send(sender_id, receiver_id, amount, type,  message, determination):
    conn = sqlite3.connect(dbFile)
    cursor = conn.cursor()
    cursor.execute('''INSERT INTO transactions (sender_id, receiver_id, amount, type, message, determination)
    VALUES (?, ?, ?, ?, ?, ?)''', (sender_id, receiver_id, amount, type,  message, determination))

    #dbに追加されているか確認
    cursor.execute("SELECT * FROM transactions;")
    transactions = cursor.fetchall()
    print("Contents of transactions table:")
    for transaction in transactions:
        print(transaction)

    conn.commit()
    conn.close()
    return True

def insert_past(data):
    conn = sqlite3.connect(dbFile)
    cursor = conn.cursor()
    cursor.execute('''INSERT INTO transactions (sender_id, receiver_id, amount, type, message, determination)
    VALUES (?, ?, ?, ?, ?, ?)''', data)
    conn.commit()
    conn.close()


# 送金の時の残高計算
def balance_send(sender_id, receiver_id, amount):
    conn = sqlite3.connect(dbFile)
    cursor = conn.cursor()

    amount = float(amount)

    # 送信者の残高を取得
    cursor.execute('SELECT balance FROM users WHERE id = ?', (sender_id,))
    sender_balance = cursor.fetchone()

    
    sender_balance = float(sender_balance[0])

    print(sender_balance)

    # 受信者の残高を取得
    cursor.execute('SELECT balance FROM users WHERE id = ?', (receiver_id,))
    receiver_balance = cursor.fetchone()

    if receiver_balance is None:
        print(f"Receiver with id {receiver_id} not found.")
        conn.close()
        return False

    receiver_balance = float(receiver_balance[0])

    # 送信者の残高を更新
    new_sender_balance = sender_balance - amount
    if new_sender_balance < 0:
        print("Insufficient funds.")
        conn.close()
        return False

    cursor.execute('UPDATE users SET balance = ? WHERE id = ?', (new_sender_balance, sender_id))

    # 受信者の残高を更新
    new_receiver_balance = receiver_balance + amount
    cursor.execute('UPDATE users SET balance = ? WHERE id = ?', (new_receiver_balance, receiver_id))

    # 変更をコミット
    conn.commit()

    # 更新後のDBを出力
    cursor.execute("SELECT * FROM users;")
    users = cursor.fetchall()
    print("Contents of users table:")
    for user in users:
        print(user)

    conn.close()
    return True







# テーブルの確認
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print(f"Tables in {dbFile}: {tables}")

# ユーザーテーブルのスキーマ確認
cursor.execute("PRAGMA table_info(users);")
user_schema = cursor.fetchall()
print("Schema of users table:")
for column in user_schema:
    print(column)

# 履歴テーブルのスキーマ確認
cursor.execute("PRAGMA table_info(transactions);")
transaction_schema = cursor.fetchall()
print("Schema of transactions table:")
for column in transaction_schema:
    print(column)

# テーブルの内容確認
cursor.execute("SELECT * FROM users;")
users = cursor.fetchall()
print("Contents of users table:")
for user in users:
    print(user)

cursor.execute("SELECT * FROM transactions;")
transactions = cursor.fetchall()
print("Contents of transactions table:")
for transaction in transactions:
    print(transaction)

# データベース接続の閉鎖
conn.commit()
conn.close()

import hashlib

def account_search(account_number, password):
    conn = sqlite3.connect(dbFile)
    c = conn.cursor()
    c.execute('SELECT * FROM users WHERE account_number = ?', (account_number,))
    user = c.fetchone()
    conn.close()
    if user:
        # パスワードをハッシュ化して比較
        hashed_password = hashlib.sha256(password.encode()).hexdigest()
        if hashed_password == user[1]:  # user[1]がパスワードフィールド
            return user
    return False

# db.py
def get_all_recipients():
    conn = sqlite3.connect(dbFile)
    c = conn.cursor()
    c.execute('SELECT id, user_name, photo, account_number FROM users')
    recipients = c.fetchall()
    conn.close()
    return [{"id": r[0], "name": r[1], "icon": r[2], "accountNumber": r[3]} for r in recipients]