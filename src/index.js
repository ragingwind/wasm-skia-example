const CanvasKitInit = require('canvaskit-wasm/bin/canvaskit.js')

CanvasKitInit({
  locateFile: (file) => {
    console.log('file', file);
    return '/node_modules/canvaskit-wasm/bin/' + file;
  },
}).then((CanvasKit) => {
  const canvas = document.querySelector('#canvas');
  const surface = CanvasKit.MakeCanvasSurface(canvas.id);

  if (!surface) {
    throw 'Error with no surface';
  }

  const skcanvas = surface.getCanvas();
  const p = new CanvasKit.SkPaint();

  p.setAntiAlias(true);
  p.setColor(CanvasKit.Color(255, 0, 0, 1.0));
  p.setAntiAlias(true);
  p.setStyle(CanvasKit.PaintStyle.Stroke);
  p.setStrokeWidth(1);

  let path = new CanvasKit.SkPath();
  path.moveTo(80, 30);
  path.lineTo(80, 80);

  path.moveTo(100, 80);
  path.lineTo(100, 15);
  path.lineTo(130, 95);
  path.lineTo(130, 30);

  path.moveTo(150, 30);
  path.lineTo(150, 80);
  path.moveTo(170, 30);
  path.lineTo(150, 55);
  path.lineTo(170, 80);

  let paths = [path];
  let paints = [p];
  
  function drawFrame(canvas) {
    canvas.clear(CanvasKit.Color(255, 255, 255, 1.0));
    canvas.drawPath(paths[0], paints[0]);
    surface.requestAnimationFrame(drawFrame);
  }

  surface.requestAnimationFrame(drawFrame);
});