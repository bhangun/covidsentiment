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
       
        #print(f'payload : {payload}')
        return analisis(payload)

def analisis(text):
    trans = translate(text)

    print(trans)
    lang = trans[1]
   
    percent = round(trans[9]*100)
    print(percent)
    result = jsonify({
            "polarity":percent,
            "positive": posneg(percent) ,
            "negative": neg(percent) ,
            "isHoax": is_hoax(percent),
            "language":lang,

            "tags": trans[2],
            "noun_phrases": trans[3],
            "word_counts": trans[4],
            "words":trans[5],
            "tokenize":trans[6],
            "sentiment_assessments":trans[7],
            "translation":trans[8]
        })
    return result

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

def polarity(s):
    blob = TextBlob(s)
    polarity=0
    for sentence in blob.sentences:
        polarity += sentence.sentiment.polarity
        print(polarity)
    return [polarity,blob.sentiment_assessments]

def translate(text):
    blob = TextBlob(text)
    lang = blob.detect_language()
    transl=''
    p = 0
    sa = []
    if lang!='en': #selain bahasa inggris masuk kesini
        transl = blob.translate(to='en')
        pol = polarity(str(transl))
        p = pol[0]
        sa = pol[1]
    else:
        p = polarity(text)[0]
        sa = blob.sentiment_assessments

    return [transl,
            lang,  
            blob.tags,
            blob.noun_phrases,
            blob.word_counts,
            blob.words,
            blob.tokenize(),
            sa,
            text,
            p]

app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5050)
