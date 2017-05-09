'use strict';
function createUpdatedCollection(collectionA, objectB) {
  var arreyResult = countSameElements(collectionA);
  for (var i = 0; i < arreyResult.length; i++) {
    isExit(arreyResult[i], objectB);
  }
  return arreyResult;
}

function countSameElements(collectionA) {
  var result = [];
  for (var i = 0; i < collectionA.length; i++) {
    finditemStatus(collectionA[i], result);
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

function isExit(element, objectB) {
  for (var j = 0; j < objectB.value.length; j++)
    if (element.key === objectB.value[j])
      element.count -= parseInt(element.count / 3);
}

