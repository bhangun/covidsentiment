import scrapy

class BlogSpider(scrapy.Spider):
    name = 'tura'
    start_urls = ['https://tura.tech']

    def parse(self, response):
        for title in response.css('.post-header>h2'):
            yield {'title': title.css('a ::text').get()}

        for next_page in response.css('a.next-posts-link'):
            yield response.follow(next_page, self.parse)