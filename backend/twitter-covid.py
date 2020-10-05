from textblob import TextBlob
import tweepy
# import pandas as pd
# import matplotlib.pyplot as plt
from bs4 import BeautifulSoup
# import faster_than_requests as requests

import json
import os 

CONSUMER_KEY = 'k3zPF82jHHnHBzPGSqKmcIzg3'
CONSUMER_SECRET = '9F2Ct5Bg35d8g2gW8MDOfL7rqF3BIAngFd7f3ZOsiGRrErQ9XY'
OAUTH_TOKEN = '19570302-sb4qKbIkRZmJ5LwxUesDUW25HvIULSnc7wb5EiEM5'
OAUTH_TOKEN_SECRET = 'Dj5THDLaDyP24ElqkiFVqwrQFfKi8VXMC6KgvjBxgEvHx'

def twitter():
    auth = tweepy.OAuthHandler('yiirpf1Y9kEXK78NSaverITCp', '7Kv4hfmTfXyeQ7Fcf3v3AECUOW9puCoc2cAx4FnpzJzZCfDtmn')

    # Redirect user to Twitter to authorize
    # try:
    #    redirect_url = auth.get_authorization_url()
    #except tweepy.TweepError:
    #    print('Error! Failed to get request token.')

    # token = session.get('request_token')
    #session.delete('request_token')
    #auth.request_token = { 'oauth_token' : token,'oauth_token_secret' : verifier }
    api = tweepy.API(auth)

    for friend in tweepy.Cursor(api.friends).items():
        # Process the friend here
        print(friend)

    hasil = []
    #for tweet in tweepy.Cursor(api.search, q="covid", lang='id').items(2000):
    #    hasil.append(tweet)

    print(len(hasil))

def analisis(text):
    #text = '''
    #Bob anak jelek
    #'''

    blob = TextBlob(str(translate(text)))
    print(blob.tags)          # [('The', 'DT'), ('titular', 'JJ'),
                        #  ('threat', 'NN'), ('of', 'IN'), ...]

    print(blob.noun_phrases)   # WordList(['titular threat', 'blob',
                        #            'ultimate movie monster',
                        #            'amoeba-like mass', ...])
    print(blob.word_counts)

    print(blob.words)

    print(blob.sentiment_assessments)

    print(blob.tokenize())

    print(blob.definition)

    for sentence in blob.sentences:
        print(sentence.sentiment.polarity*100)
    
def webcapture(url):
    headers = {
    # pretend I am a browser
    'User-Agent': 'Mozilla/5.0',
    }
    
    session = requests.Session() #setup session
    data = session.get(url, headers=headers) #scrape the data
    soup = BeautifulSoup(data.text, 'html.parser') #parse the data
    return soup #return the parsed data

# analisis('bob anak baik')
def translate(text):
    blob = TextBlob(text)
    print(blob.detect_language())
    print(blob.tags)          # [('The', 'DT'), ('titular', 'JJ'),
                        #  ('threat', 'NN'), ('of', 'IN'), ...]

    print(blob.noun_phrases)   # WordList(['titular threat', 'blob',
                        #            'ultimate movie monster',
                        #            'amoeba-like mass', ...])
    print(blob.word_counts)

    print(blob.words)

    print(blob.sentiment_assessments)
    en = blob.translate(to='en')
    print(en)
    return en

#webcapture('https://requests.readthedocs.io/en/master/')

#translate('aku baik')
analisis('dia dan aku itu anak baik bukan anak jelek')