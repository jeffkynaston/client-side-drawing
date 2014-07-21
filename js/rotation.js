function drawRotation(){
  var stage = new Kinetic.Stage({
            container: 'rotation',
            width: 600,
            height: 300
          });

  var rectangle1 = new Kinetic.Rect({
    x: 250,
    y: 50,
    width: 50,
    height: 100,
    fill: '#045476',
    stroke: 'black',
    strokeWidth: 4
  });

  var rectangle2 = new Kinetic.Rect({
    x: 300,
    y: 100,
    width: 100,
    height: 50,
    fill: '#045476',
    stroke: 'black',
    strokeWidth: 4
  });

  var rectangle3 = new Kinetic.Rect({
    x: 300,
    y: 150,
    width: 50,
    height: 100,
    fill: '#045476',
    stroke: 'black',
    strokeWidth: 4
  });

  var rectangle4 = new Kinetic.Rect({
    x: 200,
    y: 150,
    width: 100,
    height: 50,
    fill: '#045476',
    stroke: 'black',
    strokeWidth: 4
  });

  var group = new Kinetic.Group({
        x: 300,
        y: 150,
        offset:{ x:300, y:150 }
      });

  group.add(rectangle1)
  group.add(rectangle2)
  group.add(rectangle3)
  group.add(rectangle4)

  shapesLayer = new Kinetic.Layer();

  shapesLayer.add(group)

  stage.add(shapesLayer)
  stage.draw()

  var amplitude = 50;
  var opposite = -50;
  var period = 2000;
  var anim = new Kinetic.Animation(function(frame) {
        rectangle1.setY(amplitude * Math.sin(frame.time * 2 * Math.PI/ period));
        rectangle2.setX(opposite * Math.sin(frame.time * 2 * Math.PI/ period) + 350);
        rectangle3.setY(opposite * Math.sin(frame.time * 2 * Math.PI/ period) + 200);
        rectangle4.setX(amplitude * Math.sin(frame.time * 2 * Math.PI/ period) + 150);
      }, shapesLayer);

  anim.start();

  var angularSpeed = 360 / 4;
  var rotatation = new Kinetic.Animation(function(frame) {
    var angleDiff = frame.timeDiff * angularSpeed / 1000;
    group.rotate(angleDiff);
  }, shapesLayer);

  rotatation.start();

}