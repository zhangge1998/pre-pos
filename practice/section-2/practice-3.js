'use strict';
function countSameElements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    finditemStatus(collection[i], result);
  }
  return result;
}

function finditemStatus(item, result) {
  for (var j = 0; j < result.length; j++) {
    if (item.charAt(0) === result[j].name) {
      result[j].summary += elementCount(item);
      return;
    }
  }
  result.push({name: item.charAt(0), summary: elementCount(item)});
}

function elementCount(item) {
  if (item.length === 1) {
    return 1;
  }
  else if (item.charAt(1) != '[') {
    return parseInt(item.charAt(2));
  }
  else {
    var count = 0;
    for (var k = 0; k < item.length; k++) {
      if (item[k] != ']') {
        count++;
      }
    }
    return parseInt(item.substr(2, count - 2));
  }
}
