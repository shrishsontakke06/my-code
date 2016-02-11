exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var match = str.match(/\d+/);
    if(match != null) return true;
    return false;
  },

  containsRepeatingLetter : function(str) {
    var match = str.match(/([a-zA-Z]).*?\1/);
    console.log(match);
    if(match != null) return true;
    return false;
  },

  endsWithVowel : function(str) {
    //var strLength = str
    var match = str[str.length -1].match(/([aeiou])/i);
    console.log(match);
    if(match != null) return true;
    return false;

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
