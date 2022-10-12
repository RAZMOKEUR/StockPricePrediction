from flask import Flask
from flask_cors import CORS
from model import arima_model
import json


app = Flask(__name__)
CORS(app)


@app.route('/', methods=["GET"])
def msg():
    return "he saber"


@app.route('/predict', methods=["GET"])
def msg2():
    return "API data + prediction"


@app.route('/predict/<string:ticker>', methods=["GET"])
def predict(ticker):
    print('prediction en cours ..')
    prediction = arima_model.prediction(ticker)
    prediction = prediction.to_json(date_format='iso')
    return prediction


@app.route('/prices/<string:ticker>', methods=["GET"])
def prices(ticker):
    print('recherche des données ....')
    prices_history = arima_model.priceHistory(ticker)
    prices_history = prices_history.to_json(date_format='iso')
    # print(prices_history)
    return prices_history


if (__name__ == '__main__'):
    app.run(debug=True, port=8000)
