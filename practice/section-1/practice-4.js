'use strict';

function collectSameElements(collectionA, objectB) {
  var sameElements = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], objectB.value))
      sameElements.push(collectionA[i].key);
  }
  return sameElements;
}

function isExit(element, objectB) {
  for (var j = 0; j < objectB.length; j++) {
    if (element.key == objectB[j])
      return 1;
  }
}
