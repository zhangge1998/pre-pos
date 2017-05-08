'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], objectB))
      isLarge(collectionA[i]);
  }
  return collectionA;
}

function isExit(element, objectB) {
  for (var j = 0; j < objectB.value.length; j++)
    if (element.key == objectB.value[j])
      return 1;
}

function isLarge(element) {
  if (element.count >= 3)
    element.count -= parseInt(element.count / 3);
}
