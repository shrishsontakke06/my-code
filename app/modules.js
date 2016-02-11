exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
      var mod = {};
      mod.greeting = str1;
      mod.name = str2;

      mod.sayIt = function() {
          return str1+", "+str2;
        };

      return mod;
  }
};
