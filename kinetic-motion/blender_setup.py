"""
Kinetic Typography 3D Cylindrical Rig for Blender

Instructions:
1. Open Blender.
2. Go to the 'Scripting' workspace tab.
3. Click 'New', paste or open this script, and click 'Run Script'.
"""
import bpy

word1 = "ENERGY"
word2 = "MOTION"
stagger_offset = 5  # Frames offset per column
flip_duration = 20  # Duration of each flip in frames
radius = 1.2        # Cylinder radius (Z offset)

for i in range(len(word1)):
    col_x = (i - (len(word1) - 1) / 2) * 1.6
    
    # Create empty drum controller
    bpy.ops.object.empty_add(type='PLAIN_AXES', location=(col_x, 0, 0))
    drum = bpy.context.active_object
    drum.name = f"Drum_Col_{i+1}"
    
    # Animate X-rotation from 0 to 180 degrees (pi radians)
    t_start = 1 + (i * stagger_offset)
    t_end = t_start + flip_duration
    
    drum.rotation_euler = (0, 0, 0)
    drum.keyframe_insert(data_path="rotation_euler", index=0, frame=t_start)
    
    drum.rotation_euler = (3.14159, 0, 0)
    drum.keyframe_insert(data_path="rotation_euler", index=0, frame=t_end)
    
    # Set Bezier interpolation
    if drum.animation_data and drum.animation_data.action:
        for fcurve in drum.animation_data.action.fcurves:
            for kf in fcurve.keyframe_points:
                kf.interpolation = 'BEZIER'
