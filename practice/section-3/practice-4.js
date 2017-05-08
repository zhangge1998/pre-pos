'use strict';
function createUpdatedCollection(collectionA, objectB) {
  var result = countSameElements(collectionA);
  for (var i = 0; i < result.length; i++) {
    if (isExit(result[i], objectB))
      isLarge(result[i]);
  }
  return result;
}

function countSameElements(collectionA) {
  var elementCounts = [{key: 'a', count: 0}];
  var subscript = 0;
  for (var j = 0; j < collectionA.length; j++)
    if (collectionA[j].length == 1)
      if (elementCounts[subscript].key == collectionA[j])
        elementCounts[subscript].count += 1;
      else {
        subscript = subscript + 1;
        elementCounts[subscript] = {key: collectionA[j], count: 1};
      }
    else
      elementCounts.push({key: collectionA[j].substring(0, 1), count: parseInt(collectionA[j].substring(2, 3))});
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
