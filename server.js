var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne={
    heading: 'Article 1',
    date: 'sep 5,2016',
    content: `<p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            </p>
             <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            </p>
            <p>
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
            </p>'
};


var htmlTemplate = `
<html>
    <head>
        <title>
            Article 1 | thiru
            <meta name="Viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container"> />
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            S{heading}
        </h3>
        <div>
            se5 5, 2016
        </div>
        <div>
            This is the content for my first article.
        </div>
        </div>
    </body>
</html>



`;
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/Article-one', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/Article-two', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/Article-three', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
