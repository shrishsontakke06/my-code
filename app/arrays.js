exports = (typeof window === 'undefined') ? global : window;


exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr.indexOf(item);
  },

  sum : function(arr) {
    var arrSum = 0;
    if(arr != null && arr.length > 0){
      for(var arrElement in arr){
          arrSum = arrSum +  arr[arrElement];
       }
    }

    return arrSum;
  },

  remove : function(arr, item) {
    for(var arrIndex in arr){
      if(arr[arrIndex] == item){
        arr.splice( arrIndex, 1 );
      }
    }

      return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var copiedArray = [];
    for(var arrIndex in arr){
      if(!(arr[arrIndex] == item)){
        copiedArray.push(arr[arrIndex]);

      }
    }
    arr = copiedArray;
    return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
      var arr3 = arr1.concat(arr2);
      return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    arr.join();
    return arr;
  },

  count : function(arr, item) {
    var occuranceCount = 0;
    for(arrElement in arr) {
      if(parseInt(item) == arr[arrElement]){
          occuranceCount = occuranceCount+1;
      }
    }
    return occuranceCount;
  },

  duplicates : function(arr) {
    arr.sort();
    var duplicateList = [];
    var dIndex = 0;
    duplicateList[dIndex] = arr[0];

    for(var index=1; index < arr.length; index++){
      if(duplicateList[dIndex] != arr[index] && arr[index] == arr[index-1]){
        dIndex = dIndex+1;
        duplicateList[dIndex] = arr[index];
      }
    }
    return duplicateList;
  },

  square : function(arr) {

      for(index in arr){
        var sqrValue = arr[index] * arr[index];
        arr[index] = sqrValue;
      }

    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var arr1 = [];
    var occuranceCount = 0;
    for(arrElement in arr) {
      if(target === arr[arrElement]){
        occuranceCount++;
      }
    }
    arr1[0] = occuranceCount;
    console.log(occuranceCount);
    return arr1;
  }
};
