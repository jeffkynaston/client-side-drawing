function drawStraightLines() {

  var straightLineCanvas = document.getElementById("straight-lines");
  var straightLineContext = straightLineCanvas.getContext("2d");
  straightLineContext.beginPath();
  straightLineContext.moveTo(0, 0)
  straightLineContext.lineTo(280, 120)
  straightLineContext.lineTo(320, 120)
  straightLineContext.lineTo(600, 0)
  straightLineContext.moveTo(0, 300)
  straightLineContext.lineTo(280, 180)
  straightLineContext.lineTo(320, 180)
  straightLineContext.lineTo(600, 300)
  straightLineContext.moveTo(70, 120)
  straightLineContext.lineTo(70, 180)
  straightLineContext.moveTo(100, 120)
  straightLineContext.lineTo(100, 180)
  straightLineContext.moveTo(530, 120)
  straightLineContext.lineTo(530, 180)
  straightLineContext.moveTo(500, 120)
  straightLineContext.lineTo(500, 180)
  straightLineContext.moveTo(200, 25)
  straightLineContext.lineTo(400, 25)
  straightLineContext.moveTo(200, 275)
  straightLineContext.lineTo(400, 275)
  straightLineContext.strokeStyle = "#045476";
  straightLineContext.stroke();

}
