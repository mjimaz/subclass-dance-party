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

var pairDancers = function(){
  var dancers = window.dancers;

  for(var index = 1 ; index < dancers.length ; index+=2){
    var firstNode = dancers[index - 1];
    var secondNode = dancers[index];

    var left = firstNode.styleSettings.left;
    var top = firstNode.styleSettings.top;
    secondNode.setPosition(top, left+50);
  }
  
};