(function() {

  var index = 1;

  function start() {
    var intervalID = setInterval(function() {
      index += 1;
      impress().next();

      if(index === 20) { window.clearInterval(intervalID) };
    }, 15000);
  };

  Ignite =  {
    start: start
  };

})();


