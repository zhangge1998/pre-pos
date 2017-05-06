'use strict';
function countSameElements(collection) {
  var result = [{name:'a',summary:0}];
  for (var i = 0; i < collection.length; i++) {
    finditemStatus(collection[i], result);
  }
  return result;
}

function finditemStatus(item, result) {
  for (var x = 0; x < result.length; x++) {
    if (item.charAt(0) == result[x].name) {
      countResult(item, result[x]);
      return;
    }
  }
  countPush(item, result);
}

function countResult(item, result) {
  result.summary += elementCount(item);
}

function countPush(item, result) {
  result.push({name: item.charAt(0), summary: elementCount(item)});
}

function elementCount(item) {
  if (item.length == 1) {
    return 1;
  }
  else if (item.charAt(1) != '[') {
    return parseInt(item.charAt(2));
  }
  else {
    var count = 0;
    for (var y = 0; y < item.length; y++) {
      if (item[y] != ']') {
        count++;
      }
    }
    return parseInt(item.substr(2, count - 2));
  }
}
