var makeDancer = function(top, left, timeBetweenSteps) {
  // this.$node = $('<span class="dancer"></span>');
  if(window.dancerType === 'panda'){
    this.$node = $('<img class="dancer" src="./images/dancing-panda.gif" onclick="rotate(this);">');
  }else{
    this.$node = $('<img class="dancer" src="./images/dancing-cat.gif">');
  }
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


