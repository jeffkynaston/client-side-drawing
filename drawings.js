window.onload=function(){

// straight lines
var straightLineCanvas = document.getElementById("straight-lines");
var context = straightLineCanvas.getContext("2d");
context.beginPath();
context.moveTo(0, 0)
context.lineTo(280, 120)
context.lineTo(320, 120)
context.lineTo(600, 0)
context.moveTo(0, 300)
context.lineTo(280, 180)
context.lineTo(320, 180)
context.lineTo(600, 300)
context.moveTo(70, 120)
context.lineTo(70, 180)
context.moveTo(100, 120)
context.lineTo(100, 180)
context.moveTo(530, 120)
context.lineTo(530, 180)
context.moveTo(500, 120)
context.lineTo(500, 180)
context.moveTo(200, 25)
context.lineTo(400, 25)
context.moveTo(200, 275)
context.lineTo(400, 275)
context.strokeStyle = "#045476";
context.stroke();



// gradients
var gradientsCanvas = document.getElementById("gradients")
var gradientContext = gradientsCanvas.getContext("2d")
var blueGreenGradient = gradientContext.createLinearGradient(0,0,600,0)
blueGreenGradient.addColorStop(0, "#045476");
// blueGreenGradient.addColorStop(0, "#27C4D9");
blueGreenGradient.addColorStop(0.45, "#0B8AA8");
blueGreenGradient.addColorStop(0.55, "#0B8AA8");
// blueGreenGradient.addColorStop(0.3, "045476");
// blueGreenGradient.addColorStop(0.8, "0B8AA8");
blueGreenGradient.addColorStop(1, "#27C4D9");
gradientContext.fillStyle = blueGreenGradient;
gradientContext.fillRect(0, 0, 600, 300);



// shapes
var shapesCanvas = document.getElementById("shapes")
var shapesContext = shapesCanvas.getContext("2d")
shapesContext.fillStyle = "#045476";
shapesContext.fillRect(50, 25, 150, 100)
shapesContext.fillStyle = "#27C4D9"
shapesContext.strokeStyle = "#045476"
shapesContext.strokeRect(250, 25, 190, 100)
shapesContext.strokeRect(240, 35, 190, 100)
shapesContext.strokeRect(230, 45, 190, 100)
shapesContext.fillStyle = "#045476";
shapesContext.fillRect(50, 140, 150, 40)


// animations 

var animationsCanvas = document.getElementById("animations")
var animationsContext = animationsCanvas.getContext("2d")
var colorStops = [0.000, 0.125, 0.375, 0.625, 0.875, 1.00]
setInterval(function(){
	var animatedGradient = animationsContext.createLinearGradient(0,0,600,100)
	animatedGradient.addColorStop(colorStops[0], "#449BB5");
	animatedGradient.addColorStop(colorStops[1], "#043D5D");
	animatedGradient.addColorStop(colorStops[2], "#EB5055");
	animatedGradient.addColorStop(colorStops[3], "#68C39F");
	animatedGradient.addColorStop(colorStops[4], "#FFFCF5");
	animatedGradient.addColorStop(colorStops[5], "#449BB5");
	animationsContext.clearRect(0, 0, 600, 300);
	animationsContext.fillStyle = animatedGradient;
	animationsContext.fillRect(0, 0, 600, 300);

	for (i=0;i<colorStops.length;i++)
		if (colorStops[i] > 0.99) {
			colorStops[i] = 0.00

		} else {
			colorStops[i] += 0.01
		}
		
}, 1000/60)


// Elastic Stars with Kinetic.js
// var elasticStarsCanavs = document.getElementById("animations")
// var elasticStarsContext = elasticStarsCanavs.getContext("2d")
var tween = null;
        
function addStar(layer, stage) {
	debugger
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


};