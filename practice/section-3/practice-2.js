'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i = 0; i < collectionA.length; i++) {
    if (isExit(collectionA[i], objectB))
      isLargeThanThree(collectionA[i]);
  }
  return collectionA;
}
function isExit(a, objectB) {
  for (var j = 0; j < objectB.value.length; j++)
    if (a.key == objectB.value[j])
      return 1;
}
function isLargeThanThree(a) {
  if (a.count >= 3)
    a.count -= parseInt(a.count / 3);
}
