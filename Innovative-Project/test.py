from flask import Flask, render_template,jsonify,redirect
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



@app.route("/landing") 
def landing():
    return render_template('landing.html')
@app.route("/navigation")
def navigation():
    return render_template('navigation.html')
@app.route("/prediction")
def prediction():
    return render_template('prediction.html')
@app.route("/services")
def services():
    return render_template('services.html')
@app.route("/landing")
def landingred():
    return redirect('/services')


app.run(debug=True)