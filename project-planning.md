# Cursor Dark Extended Pin Theme Extension

## Current Status
✅ **READY FOR DEVELOPMENT** - Theme extension renamed and development workflow ready to setup!

## Setup Complete
1. ✅ **Found Cursor Dark theme source** - Located at `/mnt/c/Users/pinwa/AppData/Local/Programs/cursor/resources/app/extensions/theme-cursor/themes/Cursor Dark Anysphere-color-theme.json`
2. ✅ **Created extension structure** - Built complete extension with package.json and theme file
3. ✅ **Reset to base theme** - Extension now contains clean copy of original Cursor Dark theme
4. ✅ **Installed vsce tooling** - Can package and install theme extensions
5. ✅ **Created color reference** - Complete color palette documented in `colors.md`
6. ✅ **Renamed extension** - Updated to "cursor-dark-extended-pin" with proper file structure

## Development Workflow

### Best Practice Setup (Extension Development Host)
Use the **Extension Development Host** for instant theme previews:

1. **Copy extension to Cursor extensions folder**:
   ```bash
   cp -r /home/pin/cursor-dark-extended-pin /mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin
   ```

2. **Open extension folder** in VS Code/Cursor: 
   ```
   /mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin/
   ```

3. **Press F5** to launch Extension Development Host window

4. **Edit theme files** in main window:
   - `themes/cursor-dark-extended-pin-color-theme.json`
   - Changes appear instantly in the development host window

5. **No need to reinstall** - changes appear immediately!

### Manual Installation Method
If you prefer the manual approach:
1. Edit theme file: `themes/cursor-dark-extended-pin-color-theme.json`
2. Package: `npm run build` or `vsce package`
3. Install: Command Palette → `Extensions: Install from VSIX...`
4. Select: `cursor-dark-extended-pin-1.0.0.vsix`
5. Activate: Command Palette → `Preferences: Color Theme` → `Cursor Dark Extended Pin`

## Project Structure
```
cursor-dark-extended-pin/
├── package.json                              # Extension manifest
├── themes/
│   └── cursor-dark-extended-pin-color-theme.json  # Theme definition
├── colors.md                                 # Color palette reference
├── theme-extension-progress.md               # This file
├── test-samples/                             # Sample files for testing
│   ├── sample.md                            # Markdown test file
│   └── sample-code.js                       # Code test file
├── .vscodeignore                            # Files to exclude from packaging
├── LICENSE                                  # MIT License
└── cursor-dark-extended-pin-1.0.0.vsix    # Packaged extension
```

## Development Scripts
Available in package.json:
- `npm run build` - Package the extension
- `npm run dev` - Start development mode
- `npm run install-local` - Install to local extensions folder

## Next Steps

Ready to enhance markdown highlighting with incremental changes:
- **H1-H6 headings** - Use distinct colors from the palette:
  - H1: `#efb080` (warm orange)
  - H2: `#87c3ff` (bright blue)  
  - H3: `#aaa0fa` (light purple)
  - H4: `#f8c762` (golden yellow)
  - H5: `#a8cc7c` (light green)
  - H6: `#e394dc` (pink/magenta)
- **Bold/italic text** - Enhance emphasis with `#FFFFFF` for bold, `#83d6c5` for italic
- **Code blocks** - Improve styling with `#e394dc` for inline code, `#2A2A2A` backgrounds
- **Links** - Better visibility with `#88C0D0` (light blue)
- **List markers** - Use `#f8c762` (golden yellow)
- **Quote formatting** - Use `#FFFFFF5C` (semi-transparent white)

All changes will be made collaboratively with careful testing using the Extension Development Host.

## Key Files and Locations
- **Current project**: `/home/pin/cursor-dark-extended-pin/`
- **Development location**: `/mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin/`
- **Base theme source**: `/mnt/c/Users/pinwa/AppData/Local/Programs/cursor/resources/app/extensions/theme-cursor/themes/Cursor Dark Anysphere-color-theme.json`
- **Extensions folder**: `/mnt/c/Users/pinwa/.cursor/extensions/`

## Goal
Create "Cursor Dark Extended Pin" theme that keeps the beloved Cursor Dark UI while making markdown documents much more readable with enhanced syntax highlighting for headings, emphasis, code blocks, and other markdown elements.

## Context
This evolved from the roadmap todo: "Update colorTokenCustomization in cursor to highlight markdown titles" - we chose a proper custom theme extension approach instead of using tokenColorCustomizations overrides for better maintainability and distribution.