var rotate = function(e) {
var rotate_factor = 0;

//console.log(e);

function rotateMe(e) {
  console.log(e);
 //console.log(e.$node);
    rotate_factor += 1;
    var rotate_angle = (180 * rotate_factor) % 360;
    $(e).rotate({angle:rotate_angle});
 
    rotateMe(e);
    // this.$node.toggle();
}

rotateMe(e);
};