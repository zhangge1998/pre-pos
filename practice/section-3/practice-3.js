'use strict';
function createUpdatedCollection(collectionA, objectB) {
  var result = getCountSameElements(collectionA);
  for (var i = 0; i < result.length; i++) {
    isExit(result[i], objectB);
  }
  return result;
}

function getCountSameElements(collectionA) {
  var result = [];
  for (var i = 0; i < collectionA.length; i++) {
    finditemStatus(collectionA[i], result);
  }
  return result;
}

function finditemStatus(item, result) {
  for (var j = 0; j < result.length; j++) {
    if (item.charAt(0) === result[j].key) {
      result[j].count += 1;
      return;
    }
  }
  result.push({key: item.charAt(0), count: 1});
}

function isExit(element, objectB) {
  for (var j = 0; j < objectB.value.length; j++)
    if (element.key === objectB.value[j])
      element.count -= parseInt(element.count / 3);
}
