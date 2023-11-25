from flask import Flask, render_template,jsonify,redirect,request
from flask_cors import CORS
from chat import get_response
import pickle
import numpy as np

model = pickle.load(open('co2Model.pkl', 'rb'))
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
@app.route("/map")
def map():
    return render_template('map.html')
@app.route("/landing")
def landingred():
    return redirect('/services')

@app.route('/prediction', methods=['POST'])
def predict():
    data1 = float(request.form['a'])
    data2 = float(request.form['b'])
    data3 = float(request.form['c'])
    arr = np.array([[data1, data2, data3]])
    pred = model.predict(arr)
    return render_template("prediction.html", prediction_text = "The Carbon Emission of Car is %2d kt" %(pred))



@app.post("/predict")
def chatbot():
    text = request.get_json().get("message")
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)


if __name__=="__main__":
    app.run(debug=True)