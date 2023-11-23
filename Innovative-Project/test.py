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



@app.route("/third")
def third():
    return render_template('3rd Page.html')

@app.route("/fourth")
def fourth():
    return render_template('4th Page.html')
app.run(debug=True)