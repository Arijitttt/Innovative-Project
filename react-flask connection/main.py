from flask import Flask, render_template,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/members")
def member():
    #return {"members": ["member1","member2","member3"]}
    data = {
        "message":"Wow Wow Wow ! \n Just looking like a wow "
    }
    return jsonify(data)


app.run(debug=True)
