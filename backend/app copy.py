from flask import Flask, Blueprint, request, jsonify
from flask_cors import CORS
from  textblob import TextBlob
import tweepy
import pandas as pd
# import matplotlib.pyplot as plt
# from bs4 import BeautifulSoup


app = Flask(__name__)
#CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)
api = Blueprint('api', __name__)

@api.route('/coba', methods=['GET'])
def coba():
    return "bismillah coba"

@api.route('/submit', methods=['POST'])
def handle_submit():
    print(request.form['payload'])
    if request.method == "POST":
        payload = request.form['payload']
       
        print(f'payload : {payload}')

        return analisis(payload)

def analisis(text):
   
    blob = TextBlob(text)
    lang = blob.detect_language()
    transl = ''
    polarity=0
    sentences = blob.sentences
    
    if (lang != 'en'):
        transl = blob.translate(to='en')
        enBlob = transblob(transl)
        sentences = enBlob.sentences
    
    for sentence in sentences:
        polarity += sentence.sentiment.polarity

    percent = round(polarity*100)
    print(percent)
    result = jsonify({
            "polarity":percent,
            "positive": posneg(percent) ,
            "negative": neg(percent) ,
            "isHoax": is_hoax(percent),
            "language":lang,

            "tags": blob.tags,
            "noun_phrases": blob.noun_phrases,
            "word_counts": blob.word_counts,
            "words":blob.words,
            "tokenize":blob.tokenize(),
            "sentiment_assessments":blob.sentiment_assessments,
            "translation":transl

        })
    return result

def transblob(text):
    blob = TextBlob(text)
    #transl = blob.translate(to='en')
    return blob

def posneg(value):
    if value > 0:
        return value
    elif value ==0:
        return 100
    else:
        return (100+value)

        
def neg(value):
    if value <0:
        return value
    elif value == 0:
        return -100
    else:    
        return (100-value)*-1

def is_hoax(value):
    if value < 0 and value > -50 :
        return "Ada kecenderungan konten Hoax"
    elif value < 0 & value < -50 :
        return "Patut diduga konten Hoax"
    elif value > 0 & value > 50:
        return "Patut diduga BUKAN konten Hoax"
    elif value > 0 & value < 50:
        return "Kemungkinan BUKAN konten Hoax"
    else:
        return "Netral"

def translate(text):
    blob = TextBlob(text)
    transl = blob.translate(to='en')
    return {
            "tags": blob.tags,
            "noun_phrases": blob.noun_phrases,
            "word_counts": blob.word_counts,
            "words":blob.words,
            "tokenize":blob.tokenize(),
            "sentiment_assessments":blob.sentiment_assessments,
            "translation":transl
        }


app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5050)


'''

def resuljsonmain(polarity,
            positive,
            negative,
            isHoax,
            language):
    return jsonify({
        "polarity":polarity,
        "positive": positive,
        "negative": negative ,
        "isHoax": isHoax,
        "language":language,
    })
def resuljsondetail(
            tags,
            noun_phrases,
            word_counts,
            words,
            tokenize,
            sentiment_assessments,
            translation):
    return jsonify({
            "tags": tags,
            "noun_phrases": noun_phrases,
            "word_counts": word_counts,
            "words":words,
            "tokenize":tokenize,
            "sentiment_assessments":sentiment_assessments,
            "translation":translation
    })
'''