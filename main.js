let csv = `"Day of Week", "Number of Crashes"
"Sunday", 13664
"Monday", 17279
"Tuesday", 17337
"Wednesday", 17394
"Thursday", 17954
"Friday", 19147
"Saturday", 15714
 `

/*
- get keys
- iterate through csv make line string into array

*/


csv = csv.trim().split('\n');

function formatValues(string) {
  return string.split(',').map(key => key.trim());
}

function buildObject(keys, values) {
  let currentObj = {};
  for (let j = 0; j < keys.length; j++) {
    currentObj[keys[j]] = values[j]
  }
  return currentObj;
}

function getKeys(csv) {
  return formatValues(csv[0]);
}

function getEntries(csv) {
  let result = [];
  let keys = getKeys(csv);
  for (let i = 1; i < csv.length; i++) {
    let line = csv[i];
    let values = formatValues(line);
    let object = buildObject(keys, values);
    result.push(object);
  }
  return result;
}

console.dir(JSON.stringify(getEntries(csv)));


//console.dir(keys)