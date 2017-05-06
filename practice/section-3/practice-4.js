'use strict';
function createUpdatedCollection(collectionA, objectB) {
  var result = getCountSameElements(collectionA);
  for (var i = 0; i < result.length; i++) {
    if (isExit(result[i], objectB))
      isLargeThanThree(result[i]);
  }
  return result;
}

function getCountSameElements(collectionA) {
  var elementCounts = [{key: 'a', count: 0}];
  var t = 0;
  for (var j = 0; j < collectionA.length; j++)
    if (collectionA[j].length == 1)
      if (elementCounts[t].key == collectionA[j])
        elementCounts[t].count += 1;
      else {
        t = t + 1;
        elementCounts[t] = {key: collectionA[j], count: 1};
      }
    else
      elementCounts.push({key: collectionA[j].substring(0, 1), count: parseInt(collectionA[j].substring(2, 3))});
  return elementCounts;
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
