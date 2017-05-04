'use strict';

function collectSameElements(collectionA, objectB) {
  var a = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (isExitSameElement(collectionA[i], objectB))
      a.push(collectionA[i]);
  }
  return a;
}
function isExitSameElement(a, b) {
  for (var j = 0; j < b.value.length; j++) {
    if (a == b.value[j])
      return 1;
  }
}
