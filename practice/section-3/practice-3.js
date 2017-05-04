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
  var arr_result = [];
  var i = 0;
  while (i < collectionA.length) {
    var count = 0;
    var temp = collectionA[i];
    for (var j = i; j < collectionA.length; j++) {
      if (collectionA[j] == temp) {
        count += 1;
        i = j + 1;
      }
    }
    arr_result.push({key: temp, count: count});
  }
  return arr_result;
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
