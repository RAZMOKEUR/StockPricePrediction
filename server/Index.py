from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/', methods=["GET"])
def msg():
    return "hey"


if (__name__ == '__main__'):
    app.run(debug=False, port=8000)
