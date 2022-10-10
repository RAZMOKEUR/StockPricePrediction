
from crypt import methods
import json
from flask import Flask, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)

# ridge_reg_model = pickle.load(open("ridge_reg_model.sav", 'rb'))


@app.route('/', methods=["GET"])
def msg():
    return "hey"


@app.route('/predict', methods=['POST'])
def response():
    data = request.get_json(force=True)
    data = json.dumps(data)
    data = json.loads(data)
    feature_df = pd.json_normalize(data)
    feature_df = pd.get_dummies(feature_df, columns=[
                                "source_city", "arrival_time", "destination_city", "class", "stops", "airline", 'departure_time'])
    model = pickle.load(open('ridge_reg_model.sav', 'rb'))
    empty_df = pd.DataFrame(columns=model.feature_names_in_)
    feature_df = pd.concat([empty_df, feature_df])
    feature_df.fillna(0, inplace=True)
    return list(model.predict(feature_df))


if (__name__ == '__main__'):
    app.run(debug=True, port=8000)
