'use strict';
function countSameElements(collection) {
  var elementCounts = [{key: 'a', count: 0}];
  var t = 0;
  for (var j = 0; j < collection.length; j++)
    if (collection[j].length == 1)
      if (elementCounts[t].key == collection[j])
        elementCounts[t].count += 1;
      else {
        t = t + 1;
        elementCounts[t] = {key: collection[j], count: 1};
      }
    else
      elementCounts.push({key: collection[j].substring(0, 1), count: parseInt(collection[j].substring(2, 3))});
  return elementCounts;
}
