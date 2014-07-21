
function initExplodingStars(){

var stage = new Kinetic.Stage({
  container: document.getElementById("explodingstars"),
  width: 590,
  height: 290
});

var layer = new Kinetic.Layer();


document.getElementById('reset').addEventListener('click', function() {
    layer.removeChildren();
    firstStar();
      }, true);



function firstStar() {
  makeStar(layer, stage, 1, 300, 150);
  stage.draw();
}

function makeStar(layer, stage, scale, x, y) {

  var star = new Kinetic.Star({
    x: Math.random() * ((x + 80)-(x - 80)) + (x-80),
    y: Math.random() * ((y + 80)-(y - 80)) + (y-80),
    numPoints: 8,
    innerRadius: 40,
    outerRadius: 80,
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

function manyStars(layer, stage, scale, x, y){
  for(var n = 0; n < 3; n++) {
   makeStar(layer,stage, scale, x, y)
  }
}

function blowup(star){
  size = star.scale()['x']
  x = star.getX()
  y = star.getY()
  star.remove()
  manyStars(layer, stage, size * 0.8, x, y)
  stage.draw()
}

firstStar();
}