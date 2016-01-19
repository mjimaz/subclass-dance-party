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

var dragDancer = function(){
  console.log('drag:', this);
      var top = event.clientY;
      var left = event.clientX;
      $(this).setPosition(top, left);
};