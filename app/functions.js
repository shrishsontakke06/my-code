exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      var myValue =arr[0]+", ";

      var fn = function(value){
        myValue = myValue + value;
      }

      for(var len = 1; len <arr.length; len++){
        fn(arr[len]);
      }

      console.log(myValue);
    return myValue;
  },

  speak : function(fn, obj) {

  },

  functionFunction : function(str) {

  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
