'use strict';

function countSameElements(collection) {
  var arr_result=[];
  var i=0;
    while(i<collection.length) {
      var count = 0;
      var temp=collection[i];
      for (var j = i; j < collection.length; j++) {
        if (collection[j] == temp) {
          count += 1;
          i=j+1;
        }
      }
      arr_result.push({key: temp, count: count});
    }
    return arr_result;

}
