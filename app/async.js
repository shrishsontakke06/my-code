exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
     /*var promise = new Promise( function (resolve, reject) {
        resolve(value);
      }
      return promise;*/
  },

  manipulateRemoteData : function(url) {
    /*var promise = new Promise( function (resolve, reject) {
      var request = new XMLHttpRequest();
      console.log("url"+url);
      request.open('GET', url);
      request.onload = function() {
        console.log("request.status"+request.status);
        if (request.status == 200) {
          console.log("request.response"+request.response);
          resolve(request.response); // we got data here, so resolve the Promise
        } else {
          reject(Error(request.statusText)); // status is not 200 OK, so reject
        }
      };
    }
    return promise;*/
  }
};
