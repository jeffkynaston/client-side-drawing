function drawGradients(){

var gradientsCanvas = document.getElementById("gradients")
var gradientContext = gradientsCanvas.getContext("2d")
var blueGreenGradient = gradientContext.createLinearGradient(0,0,600,0)
blueGreenGradient.addColorStop(0, "#045476");
blueGreenGradient.addColorStop(0.45, "#0B8AA8");
blueGreenGradient.addColorStop(0.55, "#0B8AA8");
blueGreenGradient.addColorStop(1, "#27C4D9");
gradientContext.fillStyle = blueGreenGradient;
gradientContext.fillRect(0, 0, 600, 300);

};