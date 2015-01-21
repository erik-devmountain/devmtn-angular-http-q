var express = require('express')

var app = express();

var bunnyMemes = [
  'http://rs1img.memecdn.com/loving-bunny_o_1238800.jpg',
  'http://rs1img.memecdn.com/sobrero-bunny_o_1935829.jpg',
  'http://raisingrabbitsblog.com/rabbit-pictures/wp-content/uploads/2014/03/I-Felled-Over-Bunny-Meme.png',
  'http://weknowmemes.com/wp-content/uploads/2012/05/i-saw-a-carrot-this-big-no-lie-bunny-meme.jpg',
  'http://weknowmemes.com/wp-content/uploads/2013/03/easter-bunny-meme-eggs.jpg',
  'http://www.quickmeme.com/img/6f/6fba6b5530af412cffd7b1f4baa747067a6d3505d216a0aa732116e1b8e64350.jpg',
  'http://4.bp.blogspot.com/-fbjbDzHGlH8/VHKj_et-bcI/AAAAAAAAMVc/6D8AQ7WOsLU/s1600/kung%2Bfu%2Bfighting.jpg',
  'http://weknowmemes.com/wp-content/uploads/2012/04/hipster-bunny.jpg',
  'http://img.memerial.net/memerial.net/2944/marine-bunny.jpg',
  'http://img4.wikia.nocookie.net/__cb20110908215648/random-memes/images/d/de/Bunny-om-nom-nom-nom.jpg'
]

app.use(express.static(__dirname))

app.use(function(req, res, next) {
  var token = req.get('X-Token')
  if (token != 'please') {
    res.status(401).end("What's the magic word?")
  } else {
    next()
  }
})

app.get('/json/bunnies', function(req, res, next) {
  res.json(bunnyMemes)
})


app.listen(4000)
