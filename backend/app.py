from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
from  textblob import TextBlob
import tweepy
import pandas as pd
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup


app = Flask(__name__)
CORS(app)
api = Blueprint('api', __name__)

@api.route('/coba', methods=['GET'])
def coba():
    return 'bismillah'

@api.route('/submit', methods=['POST'])
def handle_submit():
    print(request.form['payload'])
    if request.method == "POST":
        payload = request.form['payload']
       
        print(f'payload : {payload}')
       

        # do your processing logic here.

        return analisis(payload)

def analisis(text):
    blob = TextBlob(text)
    blob.tags           # [('The', 'DT'), ('titular', 'JJ'),
                        #  ('threat', 'NN'), ('of', 'IN'), ...]
    blob.noun_phrases   # WordList(['titular threat', 'blob',
                        #            'ultimate movie monster',
                        #            'amoeba-like mass', ...])
    #blob.translate(to="id")
    hasil=0
    for sentence in blob.sentences:
        hasil += sentence.sentiment.polarity

    result = jsonify({
            "polarity":hasil,
            "tags": blob.tags,
            "noun_phrases": blob.noun_phrases,
            "word_counts": blob.word_counts,
            "words":blob.words,
            "sentiment_assessments":blob.sentiment_assessments,
            "tokenize":blob.tokenize(),
            "language":"en"
        })
    return result

def translate(blob):
    if (blob.detect_language() != 'en'):
        return blob.translate(to='en')

app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5050)
