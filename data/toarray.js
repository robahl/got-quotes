const fs = require('fs');

const files = ['season1.json', 'season2.json', 'season3.json',
               'season4.json', 'season5.json', 'season6.json',
               'season7.json'];
let quotes = [];

files.forEach(v => {
  let obj = JSON.parse(fs.readFileSync(`./${v}`));

  for (i in obj) {
    quotes.push(...Object.values(obj[i]));
  }
});

console.log(quotes.length);

fs.writeFileSync('quotes.json', JSON.stringify(quotes));
