# app.py (新規作成)
from flask import Flask, request, jsonify
from flask_cors import CORS
from db import account_search

app = Flask(__name__)
CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    account_number = data.get('accountNumber')
    password = data.get('password')
    
    if account_search(account_number, password):
        return jsonify({"success": True, "message": "ログイン成功"})
    else:
        return jsonify({"success": False, "message": "ログイン失敗"}), 401

if __name__ == '__main__':
    app.run(debug=True)