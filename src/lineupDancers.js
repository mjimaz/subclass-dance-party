var lineupDancers = function(){
  var dancers = window.dancers;

  console.log('dancers:', dancers);
  var top = 50;
  for(var index = 0 ; index < dancers.length ; index++){
    if(index%2){ //even
      dancers[index].setPosition(top,20);
      top += 50;
    }else{ //odd
      dancers[index].setPosition(top,window.innerWidth-100);
    }
  }
};