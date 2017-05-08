'use strict';

function collectSameElements(collectionA, objectB) {
  var sameElements = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], objectB))
      sameElements.push(collectionA[i].key);
  }
  return sameElements;
}

function isExit(element, objectB) {
  for (var j = 0; j < objectB.value.length; j++) {
    if (element.key == objectB.value[j])
      return 1;
  }
}
