function drawAnimations() {

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

};