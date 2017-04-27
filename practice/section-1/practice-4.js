'use strict';

function collectSameElements(collectionA, objectB) {
	var a=[];
	for(var i=0;i<collectionA.length;i++)
	{
	for(var j=0;j<objectB.value.length;j++)
	  {
		if(collectionA[i].key==objectB.value[j])
			a.push(collectionA[i].key);
	  }
	}
  return a;
}
