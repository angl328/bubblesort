function bubbleSort(arr){

  if (arr === []){
    return [];
  }
  else if (arr.length === 1){
    return arr;
  }
  else {
    for (let i = 0; i < arr.length; i++){
        console.log('i = ' + i);
      for (let k = 0; k < (arr.length - i); k++){
        console.log('comparing index ' + k + ' to index ' + (k + 1));
        if (compare(arr[k], arr[k + 1])){
          arr = swap(arr, k);
        }
      }

    }
    return arr;
  }

}

function compare(num, num2){
  if (num > num2){
    return true;
  }
  return false;
}

function swap(arr, index){
  let temp = arr[index]
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
  return arr;
}
