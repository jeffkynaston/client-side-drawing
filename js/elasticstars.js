function drawElasticStars() {

var tween = null;
        
function addStar(layer, stage) {
  var scale = Math.random();

  var starColors =  ["#27C4D9", "#045476", "#0B8AA8"]

  var star = new Kinetic.Star({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    numPoints: 5,
    innerRadius: 50,
    outerRadius: 100,
    fill: starColors[Math.floor(Math.random() * starColors.length)],
    opacity: 0.8,
    draggable: true,
    scale: {x:scale, y:scale},
    rotationDeg: Math.random() * 180,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: {x:5,y:5},
    shadowOpacity: 0.6,
    startScale: scale
  });

  layer.add(star);
}
var stage = new Kinetic.Stage({
  container: document.getElementById("elasticstars"),
  width: 600,
  height: 300
});

var layer = new Kinetic.Layer();
var dragLayer = new Kinetic.Layer();

for(var n = 0; n < 10; n++) {
  addStar(layer, stage);
}

stage.add(layer);
stage.add(dragLayer);

// bind stage handlers
stage.on('mousedown', function(evt) {
  var shape = evt.targetNode;
  shape.moveTo(dragLayer);
  stage.draw()
  // restart drag and drop in the new layer
  shape.startDrag();
});

stage.on('mouseup', function(evt) {
  var shape = evt.targetNode;
  shape.moveTo(layer);
  stage.draw();
});

stage.on('dragstart', function(evt) {
  var shape = evt.targetNode;
  if (tween) {
    tween.pause(); 
  }
  shape.setAttrs({
    shadowOffset: {
      x: 15,
      y: 15
    },
    scale: {
      x: shape.getAttr('startScale') * 1.2,
      y: shape.getAttr('startScale') * 1.2
    }
  });
});
stage.on('dragend', function(evt) {
  var shape = evt.targetNode;
  
  tween = new Kinetic.Tween({
    node: shape, 
    duration: 0.5,
    easing: Kinetic.Easings.ElasticEaseOut,
    scaleX: shape.getAttr('startScale'),
    scaleY: shape.getAttr('startScale'),
    shadowOffsetX: 5,
    shadowOffsetY: 5
  });
  
  tween.play();
});


}