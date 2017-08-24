var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: '	kdinacse',
    database: '	kdinacse',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
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
var Pool = new Pool(config);
app.get('/test-db', function (req, res) {
    // make a select request
    // return a response with the results
    Pool.query('SELECT * FROM test', function (err,result){
        if (err){
            res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result));
        }
    });
});
var counter = 0;
app.get('/counter', function (req,res){
    counter = counter + 1;
    res.send(counter.toString());
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
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function (req, res) { // URL: /submit-name?name=xxxxx
    // get the name from the request.
    var name = req.query.name;
    
    names.push(name);
    //JSON: Javascript object notation.
    
    res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
