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
    if (item.charAt(0) === result[j].key) {
      result[j].count += elementCount(item);
      return;
    }
  }
  result.push({key: item.charAt(0), count: elementCount(item)});
}

function elementCount(item) {
  if (item.length === 1)
    return 1;
  else
    return parseInt(item.charAt(2));
}

