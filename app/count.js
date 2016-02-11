exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

    var interval = setInterval(function() {
      if (end < start) stopCounting()
          end--;
    }, 1000);

    function stopCounting(){
      clearInterval(interval);
    }
  }
};
