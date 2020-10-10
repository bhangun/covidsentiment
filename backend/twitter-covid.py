# from textblob import TextBlob
# import tweepy
# import pandas as pd
# import matplotlib.pyplot as plt
from bs4 import BeautifulSoup
# import faster_than_requests as requests

import json
import os 
import requests

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

    #print(blob.definition)

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
    ext= soup.extract() #return the parsed data
    ii = _remove_attrs(soup)
    #i2 = soup.clear()
    p = soup.find_all('p')
    gettext =soup.get_text()
    tt=''
    for d in p:
        tt += extract(str(d))
    return tt #,s.get_text()

def extract(text):
    s= BeautifulSoup(text, 'html.parser')
    return s.get_text()

def _remove_attrs(soup):
    for tag in soup.findAll(True): 
        tag.attrs = None
    return soup
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

name = 'blogspider'
start_urls = ['https://blog.scrapinghub.com']

def parse(self, response):
    for title in response.css('.post-header>h2'):
        yield {'title': title.css('a ::text').get()}

    for next_page in response.css('a.next-posts-link'):
        yield response.follow(next_page, self.parse)

#webcapture('https://requests.readthedocs.io/en/master/')

#translate('aku baik')
#analisis('dia dan aku itu anak baik bukan anak jelek')

print(webcapture('https://www.kompas.com/tren/read/2020/10/06/104500965/apa-itu-omnibus-law-cipta-kerja-isi-dan-dampaknya-bagi-buruh?page=all'))
