from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS
from db import get_data_sender, account_search, insert_send, balance_send, insert_past, get_all_recipients;
 


app = Flask(__name__)

#CORSエラー回避
CORS(
    app,
    supports_credentials=True
)




#ログイン時に使用
@app.route('/account', methods=['POST'])
def account_check():
    account_number = request.json.get('accountNumber')
    password = request.json.get('password')
    
    if not account_number or not password:
        return jsonify({"error": "Account number and password are required"}), 400

    user = account_search(account_number, password)

    if user:
        return jsonify(user), 200
    else:
        return jsonify({"error": "Invalid account number or password"}), 401


#送金時に使用
@app.route('/send-money', methods=['POST'])
def send():

    #reactからの値の取得
    sender_id = request.json['sender_id']
    receiver_id = request.json['receiver_id']
    amount = request.json['amount']
    type = request.json['type']
    message = request.json['message']
    determination = request.json['determination']

    print(sender_id, receiver_id, amount, type,  message, determination)

    #履歴データベースに追加
    det = insert_send(sender_id, receiver_id, amount, type,  message, determination)
    
    #残高の増減
    det2 = balance_send(sender_id, receiver_id, amount)


    if(det & det2):
        print('success\n')
        return jsonify(), 200
    else:
        print('lost\n')
        return jsonify(), 300





# テスト
@app.route('/send', methods=['POST'])
def create_transaction():

    if not request.json or 'amount' not in request.json or 'message' not in request.json:
        return jsonify({'error': 'Invalid request, missing amount or message'}), 400


    #reactからの値の取得
    amount = request.json['amount']
    message = request.json['message']

    print(amount)



    #dbにデータ追加のテスト
    data = (15, 111, 4040, 'request', 'これが追加されたら成功', True)
    insert_past(data)



    #dbからデータ取得
    list1 = get_data_sender(1)
    print(list1)




    
    #エラーがないときは200を返す
    return jsonify(amount), 200




if __name__ == '__main__':
    app.run(debug=True)

@app.route('/account', methods=['POST'])
def account_check():
    account_number = request.json.get('accountNumber')
    password = request.json.get('password')
    
    if not account_number or not password:
        return jsonify({"error": "Account number and password are required"}), 400

    user = account_search(account_number, password)

    if user:
        # パスワードを除外してユーザー情報を返す
        user_info = {
            "id": user[0],
            "user_name": user[2],
            "balance": user[4],
            "account_number": user[5],
            "registered_id": user[6]
        }
        return jsonify(user_info), 200
    else:
        return jsonify({"error": "Invalid account number or password"}), 401
    

# check.py
@app.route('/recipients', methods=['GET'])
def get_recipients():
    recipients = get_all_recipients()
    return jsonify(recipients), 200