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
    if (item === result[j].key) {
      result[j].count += 1;
      return;
    }
  }
  result.push({key: item.charAt(0), count: 1});
}
