# Quantum Photoboom — User Guide

This getting started guide explains how to use **Quantum Photoboom**: the menu bar, the editing sidebar, the filmstrip, and what each adjustment does.

---

## Window layout

| Area | What it is |
|------|------------|
| **Left sidebar** | Histogram at the top, then collapsible **Editing Controls** sections. Click a section title to expand or collapse it. |
| **Top of sidebar** | **Hide Edits** / **Show Edits** — toggles whether your adjustments appear on the main preview (before/after). |
| **Main area** | Large **live preview** of the active photo. Scroll when the image is larger than the view. **Double-click** the preview to **Fit To Window**. |
| **Bottom** | **Filmstrip** — thumbnails for every photo in the open photobook. |
| **Footer** | Name of the open photobook, photo count, app version, and update notice when available. |

---

## Application menus

### File

| Item | What it does |
|------|----------------|
| **New Photobook** | Create a new, empty photobook (you name it in a dialog). |
| **Open Photobook** | Pick an existing photobook from a list and open it. |
| **Export Photobook** | Export **all** photos in the current photobook. |
| **Manage Photobooks** | Rename or delete photobooks, or remove individual photos from a photobook. |
| **Import Photos** | Add image files to the photobook that is currently open (available after a photobook is open). |
| **Export Selected Photos** | Export only the photos selected in the filmstrip (see [Filmstrip](#filmstrip)). |

### Edit

| Item | What it does |
|------|----------------|
| **Undo** | Reverts the last edit change (shortcut shown in the menu, typically **⌘Z** / **Ctrl+Z**). |
| **Redo** | Reapplies an undone change (**⌘⇧Z** on macOS, **Ctrl+Y** on Windows/Linux, as shown in the menu). |
| **Crop** | Enters crop mode on the active photo (see [Crop](#crop)). |
| **Remove Crop** | Clears the crop on the active photo (available when a crop exists). |
| **Convert to Black and White** / **Convert to Color** | Toggles black-and-white treatment for the active photo. The menu label switches to match the action you will get. |
| **Reset Current Photo’s Edits** | Returns **all** sliders and related settings for the active photo to their defaults. |

### View

| Item | What it does |
|------|----------------|
| **Zoom In** / **Zoom Out** | Steps the preview zoom level. |
| **Fit To Window** | Scales the preview so the whole image fits and resets pan to the center. |
| **Switch To Dark Mode** / **Switch To Light Mode** | Toggles light or dark appearance (the label shows the mode you will switch *to*). |

### Help

| Item | What it does |
|------|----------------|
| **About** | App information and contact details. |
| **View License** | Shows your current license status. |
| **Activate License** | Opens the license key dialog. |

---

## Histogram

At the top of the sidebar, the **Histogram** shows how bright and dark tones are distributed in the current preview.

Below the chart, five labels mark broad regions: **Blacks**, **Shadows**, **Exposure**, **Highlights**, and **Whites**. Moving the pointer across the histogram highlights the region you are over, which helps you decide which tone sliders to use.

---

## Filmstrip

The filmstrip is the horizontal row of thumbnails along the bottom of the window.

### Selecting and navigating

- **Click** a thumbnail to make that photo **active** — it appears in the center preview and receives any edits you make.
- The **active** photo has a **blue** border.
- **⌘+click** (macOS) or **Ctrl+click** (Windows/Linux) **toggles** whether a photo is included in a **multi-selection** for export. Selected photos also show a **green** outline.
- Scroll horizontally when there are more photos than fit on screen.

### Edited badge

A small **Edited** label on a thumbnail means that photo has adjustments that differ from the defaults.

### Right-click menu

**Right-click** (or **Control+click** on macOS) a thumbnail to open a short menu:

| Action | What it does |
|--------|----------------|
| **Reset Photo's Edits** | Clears all edits on that photo. |
| **Export Photo** | Opens the export dialog for that photo only. |
| **Remove Photo** | Removes the photo from the photobook (you will be asked to confirm). |

---

## Export dialog

When you choose **Export Selected Photos** or **Export Photobook**, you can set:

- **Format** — JPEG, PNG, or WEBP.
- **Max Dimension (px)** — Caps the longest side; use **0** for no cap (full resolution, within other settings).
- **Naming Pattern** — How files are named; `{name}` and `{index}` are common placeholders.
- **Destination Folder** — Where files are saved. Use **Browse…** to pick a folder.

Click **Export** to start, or **Cancel** to close without exporting.

---

## Crop

Choose **Edit → Crop** to place a crop frame on the preview. The frame has corner and edge handles and a rule-of-thirds grid.

| Control | What it does |
|---------|----------------|
| **Drag** the frame or handles | Move or resize the crop. |
| **Aspect** | **Free**, **1:1**, **4:5**, **3:2**, or **16:9**. |
| **Lock** | Keeps the chosen aspect ratio while resizing. |
| **W** / **H** | Set export width and height in pixels; **⇄** swaps W and H. |
| **Cancel** | Exit crop mode without applying. |
| **Done** | Apply the crop and return to normal editing. |

**Keyboard** (when crop mode is active and focus is not in a text field):

- **Arrow keys** — Nudge the crop box.
- **Shift + arrows** — Resize instead of move.
- **Alt** (Windows/Linux) or **Option** (macOS) — Smaller nudge steps.

Use **Edit → Remove Crop** to clear an applied crop.

---

## Editing controls

Each slider has a matching **number** field. You can drag the slider, type a value, or **drag horizontally** on the number field to scrub. **Double-click** the slider or number to reset that control to its default.

Sections are grouped in collapsible panels (**Basic**, **Tone Curve**, and so on).

### Basic

| Control | Effect on the photo |
|---------|---------------------|
| **Temperature** | Shifts overall color toward warmer (yellow/orange) or cooler (blue). |
| **Tint** | Balances green versus magenta in the image. |
| **Exposure** | Brightens or darkens the entire image. |
| **Contrast** | Increases or decreases separation between lights and darks overall. |
| **Highlights** | Targets bright areas — recover detail in blown highlights or brighten them further. |
| **Shadows** | Targets dark areas — lift shadow detail or deepen shadows. |
| **Whites** | Sets how bright the brightest tones can become (white point). |
| **Blacks** | Sets how dark the deepest tones can become (black point). |
| **Texture** | Enhances or softens medium-scale detail (skin texture, fabric weave) without strongly changing overall contrast. |
| **Clarity** | Adds midtone contrast and local punch; strong values can look gritty or harsh on faces. |
| **Dehaze** | Cuts through haze and flatness, or adds a foggy look when reduced. |
| **Vibrance** | Boosts muted colors more than colors that are already strong — useful for natural-looking saturation. |
| **Saturation** | Raises or lowers color intensity across the whole image. |

### Tone Curve

**Parametric** sliders bend tone in four zones before the point curve:

| Control | Effect |
|---------|--------|
| **Parametric highlights** | Brightest tonal region above the main highlight range. |
| **Parametric lights** | Upper midtones and lighter areas. |
| **Parametric darks** | Lower midtones and darker areas. |
| **Parametric shadows** | Deepest shadow region. |

**Point curve**

- Choose **Channel**: **RGB** for overall tone, or **Red**, **Green**, or **Blue** for per-channel curves.
- **Click** the graph to add a point; **drag** points to reshape contrast. The corner points stay fixed.
- **Reset Curve** restores a straight diagonal for the current channel.

### Sharpening

| Control | Effect |
|---------|--------|
| **Amount** | Overall sharpening strength. |
| **Radius** | How wide the area around each edge is sharpened. |
| **Detail** | Emphasis on fine versus coarse structure. |
| **Masking** | Restricts sharpening to stronger edges; higher values leave smooth areas (sky, skin) softer. While dragging **Masking**, hold **Alt** (Windows/Linux) or **Option** (macOS) to preview which areas receive sharpening. |

### Noise Reduction

| Control | Effect |
|---------|--------|
| **Luminance** | Reduces brightness “grain” and speckle. |
| **Luminance detail** | How much fine texture is preserved versus smoothed away. |
| **Luminance contrast** | Keeps or softens contrast in noisy areas after luminance smoothing. |
| **Color** | Reduces colored speckles and blotches. |
| **Color detail** | Preserves or smooths fine color variation. |
| **Color smoothness** | How evenly color noise is blended away. |

### Color Grading

Three **wheels** — **Shadows**, **Midtones**, and **Highlights** — let you add a color cast to each tonal range. Drag on a wheel: distance from the center sets **saturation**, and angle sets **hue**. A readout under each wheel shows the current values.

| Control | Effect |
|---------|--------|
| **Blending** | How smoothly the three zones blend into one another. |
| **Balance** | Shifts grading influence toward shadows or highlights. |

### Lens Corrections

| Control | Effect |
|---------|--------|
| **Profile Corrections** | Strength of automatic lens-profile fixes when applicable. |
| **Remove Chromatic Aberration** | Reduces purple/green fringing along high-contrast edges. |
| **Manual Defringe** | Extra cleanup for remaining color fringe. |

### Effects

Applied as creative finishing on the **cropped** image:

| Control | Effect |
|---------|--------|
| **Vignette amount** | Darkens or lightens the edges of the frame. |
| **Vignette midpoint** | Where the vignette transition sits between center and edge. |
| **Vignette roundness** | More circular versus more rectangular falloff. |
| **Vignette feather** | Softness of the vignette edge. |
| **Highlights priority** | How much bright areas resist being darkened by the vignette. |
| **Grain amount** | Strength of added film-like grain. |
| **Grain size** | Coarseness of the grain pattern. |
| **Grain roughness** | Irregularity and character of the grain. |

### Optics (Manual)

Manual lens-style adjustments without relying on a profile:

| Control | Effect |
|---------|--------|
| **Distortion** | Corrects or adds barrel/pincushion bending at the edges. |
| **Lens vignette amount** | Darkens or lightens corners optically. |
| **Lens vignette midpoint** | How far from the center the lens vignette begins. |
| **CA Red / Cyan** | Shifts red–cyan fringing correction. |
| **CA Blue / Yellow** | Shifts blue–yellow fringing correction. |

### Transform

Changes geometry — perspective, rotation, scale, and position within the frame:

| Control | Effect |
|---------|--------|
| **Vertical** | Tilts the image to correct converging vertical lines (keystoning). |
| **Horizontal** | Tilts to correct converging horizontal lines. |
| **Rotate (°)** | Rotates the image within the frame. |
| **Aspect** | Stretches or compresses width relative to height. |
| **Scale** | Zooms the image in or out inside the frame. |
| **Offset X** / **Offset Y** | Moves the image left/right or up/down. |

### Masking

**Masking** applies adjustments only where you define a mask. Global sliders still affect the whole image; mask sliders add **on top** of those values inside the masked area (0 means no extra change there).

**Create Mask** opens a dialog to pick a mask type:

| Group | Types |
|-------|--------|
| **Geometry** | **Radial**, **Linear gradient**, **Brush** |
| **Range** | **Color range**, **Luminance range** |
| **Auto** | **Subject**, **Sky**, **People**, **Objects** (AI-assisted; use **Generate AI mask** in the drawer when needed) |

After creating a mask:

1. Select it in the list under **Masking**.
2. Use the **drawer** to name the mask, adjust components, and set local edit sliders.
3. **Add to mask** adds another component (layer) to the selected mask; choose **Add to mask** or **Subtract from mask** when combining.
4. **Edit Mask** (for brush, radial, or linear types) lets you adjust the shape on the preview.
5. **Delete mask** removes the entire mask and its components.

**Mask-specific controls** (depend on type):

| Control | Effect |
|---------|--------|
| **Invert component** | Applies the opposite of the masked region for that layer. |
| **Density (component)** | Strength of that mask component (0–100%). |
| **Feather** (radial/linear) | Softness of the mask edge. |
| **Brush size / hardness / flow / strength** | Size, edge softness, build-up rate, and opacity of brush strokes. **Erase** subtracts from the mask; **Clear strokes** removes brush strokes. |
| **Hue center / width / falloff** (color range) | Which colors are selected and how softly the selection fades. |
| **Low / high / falloff** (luminance range) | Which brightness range is selected. |

**Relative adjustment** sliders in the drawer (exposure, contrast, highlights, shadows, whites, blacks, texture, clarity, dehaze, saturation, vibrance, sharpen amount, noise luminance, temperature, tint) change the photo **only inside the mask**, added to your global settings.

**Mask overlay** options help you see the selection: show overlay, color, intensity, and overlay view mode (color on image, color on grayscale, highlight outside selection, or selection only).

On the preview, drag on-image handles for radial gradients, linear gradients, and brush strokes when **Edit Mask** is active.

### Calibration

Fine-tuning of how the app interprets color:

| Control | Effect |
|---------|--------|
| **Shadow Tint** | Green–magenta balance in shadow regions. |
| **Red / Green / Blue Primary Hue** | Shifts where each primary sits on the color wheel. |
| **Red / Green / Blue Primary Saturation** | How vivid each primary is rendered. |

---

## Tips

- With the preview focused, **⌘+** / **Ctrl+** zooms in and **⌘-** / **Ctrl-** zooms out, similar to many other apps.
- **Hide Edits** is handy for a quick before/after on the active photo without changing any settings.
- Use the histogram zones and tone sliders together: if highlights clip, try **Highlights** or **Whites** before pushing **Exposure** further.

---