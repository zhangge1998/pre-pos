'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElements = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], collectionB))
      sameElements.push(collectionA[i]);
  }
  return sameElements;
}

function isExit(element, collectionB) {
  for (var j = 0; j < collectionB[0].length; j++)
    if (element == collectionB[0][j])
      return 1;
}
