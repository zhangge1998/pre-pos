'use strict';
function createUpdatedCollection(collectionA, objectB) {
  var result = getCountSameElements(collectionA);
  for (var i = 0; i < result.length; i++) {
    if (isExit(result[i], objectB))
      isLarge(result[i]);
  }
  return result;
}

function getCountSameElements(collectionA) {
  var elementCounts = [{key: 'a', count: 0}];
  var subscript = 0;
  for (var i = 0; i < collectionA.length; i++) {
    if (elementCounts[subscript].key == collectionA[i])
      elementCounts[subscript].count += 1;
    else {
      subscript = subscript + 1;
      elementCounts[subscript] = {key: collectionA[i], count: 1};
    }
  }
  return elementCounts;
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
