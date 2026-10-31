/**
 * Kinetic Typography 3D Rolling Drum Setup for Adobe After Effects
 * 
 * Instructions:
 * 1. Open Adobe After Effects.
 * 2. Create a new Composition (e.g., 1080x1080 px, 30 fps, 9 seconds).
 * 3. Go to File > Scripts > Run Script File... and choose this file.
 */
(function() {
  var comp = app.project.activeItem;
  if (!comp || !(comp instanceof CompItem)) {
    alert("Please open or select a composition before running this script.");
    return;
  }

  app.beginUndoGroup("Create 3D Kinetic Text Drums");

  var word1 = "ENERGY";
  var word2 = "MOTION";
  var colSpacing = 95;
  var startX = (comp.width / 2) - ((word1.length - 1) * colSpacing / 2);
  var centerY = comp.height / 2;
  var staggerFrames = 4;
  var flipDuration = 0.7; // seconds

  for (var i = 0; i < word1.length; i++) {
    // 1. Create a 3D Null controller for each column
    var nullCol = comp.layers.addNull();
    nullCol.threeDLayer = true;
    nullCol.name = "Drum_Col_" + (i + 1);
    nullCol.property("Position").setValue([startX + (i * colSpacing), centerY, 0]);

    // 2. Animate 180-degree X-Rotation with cascade delay
    var rotX = nullCol.property("X Rotation");
    var startTime = (i * staggerFrames) / comp.frameRate;
    
    rotX.setValueAtTime(startTime, 0);
    rotX.setValueAtTime(startTime + flipDuration, 180);

    // 3. Apply steep bezier ease curves
    var easeIn = new KeyframeEase(0, 75);
    var easeOut = new KeyframeEase(0, 75);
    rotX.setTemporalEaseAtKey(1, [easeIn], [easeOut]);
    rotX.setTemporalEaseAtKey(2, [easeIn], [easeOut]);

    // 4. Create Top Letter (Word 1)
    var textLayer1 = comp.layers.addText(word1[i]);
    textLayer1.threeDLayer = true;
    textLayer1.parent = nullCol;
    textLayer1.property("Position").setValue([0, -110, 50]);

    // 5. Create Bottom Letter (Word 2)
    var textLayer2 = comp.layers.addText(word2[i]);
    textLayer2.threeDLayer = true;
    textLayer2.parent = nullCol;
    textLayer2.property("Position").setValue([0, 110, -50]);
    textLayer2.property("X Rotation").setValue(180);
  }

  app.endUndoGroup();
})();
