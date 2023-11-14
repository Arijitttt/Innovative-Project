from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('demo.html')
'''
@app.route("/about")
def riju():
    name= "riju"
    return render_template('about.html',name=name)
'''
@app.route("/mou")
def mou():
    return "Hello mou"
app.run()
