const fs = require('fs');
//
try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error("> file now found!");
}