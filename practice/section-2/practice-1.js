'use strict';

function countSameElements(collection) {
  var elementCounts = [{key: 'a', count: 0}];
  var subscript = 0;
  for (var i = 0; i < collection.length; i++) {
    if (elementCounts[subscript].key == collection[i])
      elementCounts[subscript].count += 1;
    else {
      subscript = subscript + 1;
      elementCounts[subscript] = {key: collection[i], count: 1};
    }
  }
  return elementCounts;
}
