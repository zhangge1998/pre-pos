'use strict';

function collectSameElements(collectionA, collectionB) {
  var a = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (isExitSameElement(collectionA[i], collectionB))
      a.push(collectionA[i]);
  }
  return a;
}

function isExitSameElement(a, b) {
  for (var j = 0; j < b.length; j++)
    if (a == b[j])
      return 1;
}
