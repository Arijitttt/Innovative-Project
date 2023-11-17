from flask import Flask, render_template, request
import pickle
import numpy as np

model = pickle.load(open('co2.pkl', 'rb'))
app = Flask(__name__, template_folder='templates')

@app.route('/')
def man():
    return render_template('home.html')

@app.route('/predict', methods=['POST'])
def home():
    data1 = float(request.form['a'])
    data2 = float(request.form['b'])
    data3 = float(request.form['c'])
    arr = np.array([[data1, data2, data3]])
    pred = model.predict(arr)
    return render_template("home.html", prediction_text = "The Carbon Emission of Car is %2d!" %(pred))
    
if __name__=="__main__":
    app.run(debug=True)