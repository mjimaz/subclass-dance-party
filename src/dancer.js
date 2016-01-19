var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
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


