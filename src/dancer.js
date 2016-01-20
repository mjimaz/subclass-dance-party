var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer makeMeDraggable" ></span>');
// this.$node.mousedown(
//   function(){
//   // console.log('drag:', this);
//   //     var top = event.clientY;
//   //     var left = event.clientX;
//   //   // console.log('inside drag this=', this);
//   //   console.log('top=', top, "left=", left);
//     //   this.styleSettings = {
//     //    top: top,
//     //    left: left
//     // };
//     // $(this).attr('style', "top: "+top+"px; left: "+left+"px;");
//     $(this).draggable();


//     }
//   );

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
