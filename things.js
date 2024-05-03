var express = require('express');
var router = express.Router();

const fetch = require('node-fetch')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
router.get('/', async function(req, res){
   const url = req.query.url
   const response = await fetch(url);
  const html = await response.text();
  console.log('result', html);
  const dom = new JSDOM(html, {
   contentType: 'text/html',
   runScripts: "outside-only" 
 });

 const results = [
     ['Url', 'Anchor Text', 'External']
 ];

 const urls = dom.window.document.querySelectorAll('a');
 urls.forEach(url => {
     const externalLink = url.host !== dom.window.location.host;
     const href = url.href;
     const text = url.innerText;
     results.push([href, text, externalLink]);
 });

 const csvContent = results.map(line =>
     line.map(cell => {
      if (!cell) {
         return '';
       }
         return typeof(cell) === 'boolean' ? (cell ? 'TRUE' : 'FALSE') : `"${cell.replace(/"/g, '""')}"`;
     }).join('\t')).join('\n');
 
 res.send(csvContent);
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;