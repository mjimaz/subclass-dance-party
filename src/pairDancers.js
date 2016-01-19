var pairDancers = function(){
  var dancers = window.dancers.slice();

  console.log('pair dancers:', dancers);
  for(var index = 1 ; index < dancers.length ; index+=2){
    var firstNode = dancers[index - 1];
    var secondNode = dancers[index];

    var left = firstNode.styleSettings.left;
    var top = firstNode.styleSettings.top;
    secondNode.setPosition(top, left+50);
  }
  
};