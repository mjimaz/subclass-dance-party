var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer makeMeDraggable" ></span>');
// this.$node.mousedown(
//   function(event){
//   console.log('drag:', this);
//       var top = event.pageY;
//       var left = event.pageX;
//     // console.log('inside drag this=', this);
//     console.log('top=', top, "left=", left);
//       this.styleSettings = {
//        top: top,
//        left: left
//     };
//     $(this).attr('style', "top: "+top+"px; left: "+left+"px;");
// //     $(this).draggable();


//     }
//   );
var isMouseDown = false;

var time;

this.$node.mousedown(function(e){
  var context = this;
  console.log('mouse down, context:', context);
  time = setInterval(function(e, context){
    return function(){dragDancer(e, context);};
  }, 1000);
}
  );

var dragDancer = function(event, context){
  console.log('dragmouse up: context, ', context);
  var e = window.event;
  $(context).css({left:e.pageX - 40, top:e.pageY - 40});
};

this.$node.mouseup(function(e){
  isMouseDown = false;
  console.log('mouse up isMouseDown', isMouseDown);
    //$(this).css({left:e.pageX - 40, top:e.pageY - 40});
    clearInterval(time);
});

// $(this).draggable({
//   drag: function( event, ui ) {
//     console.log('drag');
//     var top = event.clientY;
//   var left = event.clientX;
//     ui.attr('style', "top: "+top+"px; left: "+left+"px;");
//   }
// });

  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
  
makeDancer.prototype.setPosition = function(top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};

// $(function() {
//     $( "#dancer" ).draggable();
//   });
