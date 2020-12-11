var Canvas = require('canvas');
var fs = require('fs');

var canvas = Canvas.createCanvas(200, 200);
var ctx = canvas.getContext('2d');
var text = "🤐";

var ctx = canvas.getContext("2d");
ctx.font = "200px Arial";
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(text, canvas.width / 2, canvas.height / 2);

const out = fs.createWriteStream(__dirname + '/test.png');
const stream = canvas.createPNGStream();
stream.pipe(out);

out.on('finish', () =>  console.log('The PNG file was created.'));
 
