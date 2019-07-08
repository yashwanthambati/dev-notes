function mergeSortArrays(array1,array2){
  const mergeArray = [];
  let array1Item = array1[0];
  let array2item = array2[0];
  let i=1;
  let j=1;
  //check input
  if(array1.length === 0){
    return array2;
  }
  if(array2.length === 0){
    return array1;
  }
 while(array1Item || array2item){
   console.log(array1Item,array2item);
   if(!array2item || array1Item < array2item){
     mergeArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }
   else {
       mergeArray.push(array2item);
       array2item = array2[j];
       j++;
     }
   }




  return mergeArray;
}

mergeSortArrays([0,1,3,45],[5,8,20])
