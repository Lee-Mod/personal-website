function randInt(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }

  $('#rippleria').rippleria({
    // aniamtion speed
    duration: 750,
    // custom easing effect
    easing: 'linear',
    // custom color
    color: undefined
  });

  $('#rippleria').click(function(e) {
    e.preventDefault();
    $(this).rippleria('changeColor', 
      'rgba('+randInt(0,255)+','+randInt(0,255)+','+randInt(0,255)+',0.'+randInt(3,5));
  });