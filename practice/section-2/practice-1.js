'use strict';

function countSameElements(collection) {
  var elementCounts = [{key: 'a', count: 0}];
  var t = 0;
  for (var i = 0; i < collection.length; i++) {
    if (elementCounts[t].key == collection[i])
      elementCounts[t].count += 1;
    else {
      t = t + 1;
      elementCounts[t] = {key: collection[i], count: 1};
    }
  }
  return elementCounts;
}
