# Kinetic Typography 3D Roller Poster

A faithful recreation of the 3D rotating typography poster (`ENERGY IN MOTION` ↔ `MOTION IN ENERGY`).

## Files Included

1. **`index.html`**
   * Standalone, self-contained HTML5 / CSS 3D web application with pure black background.
   * Runs directly in any modern browser without any dependencies or server setup.
   * Features interactive playback controls, real-time 9-second looping timeline, seek scrubber, and audio toggle.

2. **`after_effects_setup.jsx`**
   * ExtendScript automation script for Adobe After Effects.
   * Sets up the 6-column 3D Null controllers, keyframes the 180° flips, applies 75% bezier ease curves, and rigs the letters.

3. **`blender_setup.py`**
   * Python automation script for Blender.
   * Generates the 3D axes empties and creates staggered Bezier rotation keyframes.

## Quick Start (Web)

Double-click `index.html` to open it in your web browser. You can click anywhere on the poster or use the controls at the bottom to play, pause, and scrub through the animation.
