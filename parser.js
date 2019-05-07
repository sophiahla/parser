const rp = require('request-promise');
const url = 'https://myscore.com.ua';
const $ = require('cheerio');

rp(url)
  .then(function(html){
  	console.log($( html));
  })
  .catch(function(err){
    //handle error
  });