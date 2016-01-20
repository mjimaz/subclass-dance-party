var makeBlinkyCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("cat");
};

makeBlinkyCatDancer.prototype= Object.create(makeDancer.prototype);
  
makeBlinkyCatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.click(
    function(){
      $(this).animate({
        height: '+=50px',
        width: '+=50px'}, 1500);
  
      $(this).animate({
        height: '-=50px',
        width: '-=50px'}, 1500);
});
};