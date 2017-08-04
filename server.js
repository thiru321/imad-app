var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne = {
    title: 'Article 1 | thiru',
    date: 'sep 5, 2016',
    heading: 'Article 1',
    content: `
        <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            </p>
             <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            </p>
            <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            </p>
    `
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="Viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <div class="container"> />
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
              ${content}
            </div>
            </div>
        </body>
    </html>
    
    
    
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/Article-one', function (req,res){
    res.send(createTemplate(ArticleOne));
});
app.get('/Article-two', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/Article-three', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
