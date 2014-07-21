
function initExplodingStars(){

var stage = new Kinetic.Stage({
  container: document.getElementById("explodingstars"),
  width: 590,
  height: 290
});

var layer = new Kinetic.Layer();

function firstStar() {
  makeStar(layer, stage, 1);
  stage.draw();
}

function makeStar(layer, stage, scale) {

  var star = new Kinetic.Star({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    numPoints: 8,
    innerRadius: 25,
    outerRadius: 50,
    fill: 'red',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {x:5, y:5},
    shadowOpacity: 0.8,
    scale: {x:scale, y:scale}
  })
  star.on('click', function() {
    blowup(star)
      });
  layer.add(star)
  stage.add(layer)
}

function manyStars(layer, stage, scale){
  for(var n = 0; n < 3; n++) {
   makeStar(layer,stage, scale)
  }
}

function blowup(star){
  size = star.scale()['x']
  star.remove()
  manyStars(layer, stage, size * 0.8)
  stage.draw()
}

firstStar();
}