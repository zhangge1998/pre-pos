'use strict';

function collectSameElements(collectionA, collectionB) {
  var sameElements = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (isExitSameElement(collectionA[i], collectionB))
      sameElements.push(collectionA[i]);
  }
  return sameElements;
}

function isExitSameElement(element, collectionB) {
  for (var j = 0; j < collectionB.length; j++)
    if (element == collectionB[j])
      return 1;
}
