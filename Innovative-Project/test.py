from flask import Flask, render_template,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/basic")
def hello():
    return render_template('demo.html')
@app.route("/react")
def member():
    
    data = {
        "message":"react - connection "
    }
    return jsonify(data)


app.run(debug=True)