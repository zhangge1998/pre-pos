'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], objectB))
      collectionA[i].count -= 1;
  }
  return collectionA;
}

function isExit(a, objectB) {
  for (var j = 0; j < objectB.value.length; j++)
    if (a.key == objectB.value[j])
      return 1;
}


