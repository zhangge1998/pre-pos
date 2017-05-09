'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0; i < collectionA.length; i++) {
    isExit(collectionA[i], objectB.value);
  }
  return collectionA;
}

function isExit(element, objectB) {
  for (var j = 0; j < objectB.length; j++)
    if (element.key === objectB[j])
      element.count -= parseInt(element.count / 3);
}

