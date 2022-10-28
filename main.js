

const button = document.addEventListener('click', handleClick)
const csvTextarea = document.querySelector('#csvTextarea');

const jsonTextarea = document.querySelector('#jsonTextarea');


function handleClick () {
  const userInput = csvTextarea.value
  csv = userInput.trim().split('\n');
  jsonTextarea.innerHTML = JSON.stringify(getEntries(csv), null, 4);
  
  console.dir(JSON.stringify(getEntries(csv),null, 4))
}


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
