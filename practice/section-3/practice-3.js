'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var arr_result=[];
  var i=0;
  while(i<collectionA.length)
  {
    var count=0;
    var temp=collectionA[i];
    for(var j=i;j<collectionA.length;j++)
    {
      if(collectionA[j]==temp)
      {
        count+=1;
        i = j + 1;
      }
    }
    arr_result.push({key:temp,count:count});
  }
  for(var k=0;k<arr_result.length;k++)
  {
    for(var c=0;c<objectB.value.length;c++)
    {
      if(arr_result[k].key==objectB.value[c])
      {
        if(arr_result[k].count>=3)
          arr_result[k].count-=parseInt(arr_result[k].count/3);
      }
    }
  }
  return arr_result;
}
