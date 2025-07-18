# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code/Cursor theme extension called "Cursor Dark Extended Pin" that extends the original Cursor Dark theme with enhanced markdown syntax highlighting and improved visual hierarchy for documentation.

## Architecture

### Core Components

**Variable-Based Color System** (NEW): The theme now uses a modern variable-based architecture:
- `src/colors.js`: Central color variable definitions organized by semantic meaning
- `src/theme-template.js`: Theme structure with variable references instead of hardcoded colors
- `src/token-colors.js`: TextMate syntax highlighting rules using color variables
- `build.js`: Build script that combines variables + template → final JSON

**Theme Output**: The final theme is generated as `themes/cursor-dark-extended-pin-color-theme.json` which contains:
- `colors`: UI theme colors for VS Code interface elements
- `semanticHighlighting`: Language-specific semantic token colors
- `tokenColors`: TextMate grammar-based syntax highlighting rules with scopes and settings

**Extension Manifest**: `package.json` defines the extension metadata and contributes the theme to VS Code's theme system.

**Color System**: The theme uses a variable-based color system defined in `src/colors.js` with organized color families:
- Primary syntax colors: #efb080 (warm orange), #87c3ff (bright blue), #aaa0fa (light purple) 
- Status colors: #A3BE8C (green), #BF616A (red), #EBCB8B (yellow)
- Background progression: #141414 → #1a1a1a → #2A2A2A → #404040 → #505050
- All colors are centrally defined as variables for consistent maintenance

## Development Commands

### Variable-Based Development Workflow (Recommended)
```bash
# Build theme from source files
npm run build:theme

# Build and install to development location
npm run install-local

# Watch for changes and auto-rebuild
npm run build:watch

# Launch Extension Development Host (recommended)
# 1. Open extension folder in VS Code/Cursor
# 2. Press F5 to launch development host
# 3. Edit source files in src/ folder
# 4. Changes rebuild automatically (if using build:watch)

# Build extension package
npm run build

# Manual testing commands
npm run dev    # Shows development instructions
npm run test   # Shows testing instructions
```

### File Locations
- **Development location**: `/mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin/`
- **Source files**: `src/colors.js`, `src/theme-template.js`, `src/token-colors.js`
- **Generated theme file**: `themes/cursor-dark-extended-pin-color-theme.json`
- **Test files**: `test-samples/sample.md` and `test-samples/sample-code.js`

## Theme Development Process

### Variable-Based Development (NEW)
Instead of editing the JSON directly, modify the source files:

**Color Changes**: Edit `src/colors.js` to modify color variables:
```javascript
export const markdown = {
  h1: syntax.functions,     // Change to different color variable
  h2: accents.brightBlue,   // Use accent colors
  // ...
};
```

**Theme Structure**: Edit `src/theme-template.js` for UI colors:
```javascript
"editor.background": backgrounds.secondary,  // Use variable reference
```

**Syntax Rules**: Edit `src/token-colors.js` for new highlighting rules:
```javascript
{
  "name": "Markdown H1 Heading",
  "scope": "markup.heading.1.markdown", 
  "settings": {
    "foreground": markdown.h1,  // Use variable instead of hardcoded color
    "fontStyle": "bold"
  }
}
```

### Color Consistency
Always reference color variables from `src/colors.js`. The system provides:
- Organized color families: `backgrounds`, `foregrounds`, `accents`, `status`, `syntax`, `markdown`
- Semantic naming: `syntax.functions`, `markdown.h1`, `status.green`
- Centralized maintenance: Change a color once, updates everywhere

### Testing Methodology
Use the Extension Development Host for real-time testing:
1. Test with `test-samples/sample.md` for markdown elements
2. Test with `test-samples/sample-code.js` for syntax highlighting
3. Verify accessibility and contrast ratios
4. Ensure consistency with existing Cursor Dark aesthetic

## Extension Packaging

The extension uses vsce for packaging with `.vscodeignore` excluding development files. The build process creates a `.vsix` file for distribution.

## Key Design Principles

1. **Preserve Cursor Dark UI**: Only modify syntax highlighting, not interface colors
2. **Enhance Markdown Readability**: Provide distinct heading hierarchy and better text formatting
3. **Maintain Color Harmony**: Use established color families and avoid introducing conflicting colors
4. **Ensure Accessibility**: Maintain sufficient contrast and readability across all elements