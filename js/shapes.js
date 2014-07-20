function drawShapes() {

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

}