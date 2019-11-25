const csv = require('csv-parser')
const fs = require('fs')
const results = [];
var html1=[];
var html11=[];

fs.createReadStream('yah.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for(var i=0;i<results.length;i++){
    	html1+="<option value='"+results[i]['OEDV']+"'>"+results[i]['Osage Exploration and Development, Inc.']+"</option>";
    }
    fs.writeFile('mynewfile3.txt', html1, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  });
  fs.createReadStream('yah.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for(var i=0;i<results.length;i++){
    	html11+="'"+results[i]['OEDV']+"'"+",";
    }
    fs.writeFile('mynewfile3333.txt', html11, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  });
