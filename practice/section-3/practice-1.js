'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], objectB.value))
      collectionA[i].count -= 1;
  }
  return collectionA;
}

function isExit(element, objectB) {
  for (var j = 0; j < objectB.length; j++)
    if (element.key === objectB[j])
      return 1;
}


