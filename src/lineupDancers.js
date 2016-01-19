var lineupDancers = function(){
  var dancers = window.dancers;
  var top = 100;
  for(var index = 0 ; index < dancers.length ; index++){
    if(index%2){ //even
      dancers[index].setPosition(top,20);
      top += 100;
    }else{ //odd
      dancers[index].setPosition(top,window.innerWidth-100);
    }
  }
};