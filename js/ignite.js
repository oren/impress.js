(function() {

  var index = 1;
  var time = 14;
  var times = $('.time');

  function start() {
    restartTimer();
    var intervalID = setInterval(function() {
      index += 1;
      impress().next();
      restartTimer();

      if(index === 20) { window.clearInterval(intervalID) };
    }, 15000);
  };

  function restartTimer() {
    var intervalID2 = setInterval(function() {
      var step = $('.step:nth-child(' + index + ')');
      var timeElem = step.children('.time');
      times.hide();
      timeElem.show();
      timeElem.text(time);
      time -= 1;
      if(time === 0) { 
        window.clearInterval(intervalID2) 
        time = 14;
      };
    }, 1000);
  };

  Ignite =  {
    start: start
  };

})();


