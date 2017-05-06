'use strict';
function countSameElements(collection) {
  var arr_result = [];
  var i = 0;
  while (i < collection.length) {
    var count = 0;
    var temp = collection[i];
    for (var j = i; j < collection.length; j++) {
      if (collection[j].substring(0, 1) == temp.substring(0, 1)) {
        var a = collection[j].length;
        if (a == 1)
          count += 1;
        if (a == 3 || a == 4)
          count += parseInt(collection[j].substring(2, 3));
        if (a == 5)
          count += parseInt(collection[j].substring(2, 4));
        i = j + 1;
      }
    }
    arr_result.push({name: temp.substring(0, 1), summary: count});
  }
  return arr_result;
}
