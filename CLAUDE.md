# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code/Cursor theme extension called "Cursor Dark Extended Pin" that extends the original Cursor Dark theme with enhanced markdown syntax highlighting and improved visual hierarchy for documentation.

## Architecture

### Core Components

**Theme Definition**: The main theme is defined in `themes/cursor-dark-extended-pin-color-theme.json` which contains:
- `colors`: UI theme colors for VS Code interface elements
- `semanticHighlighting`: Language-specific semantic token colors
- `tokenColors`: TextMate grammar-based syntax highlighting rules with scopes and settings

**Extension Manifest**: `package.json` defines the extension metadata and contributes the theme to VS Code's theme system.

**Color System**: The theme uses a carefully designed color palette documented in `colors.md` with consistent color families:
- Primary colors: #efb080 (warm orange), #87c3ff (bright blue), #aaa0fa (light purple) 
- Status colors: #A3BE8C (green), #BF616A (red), #EBCB8B (yellow)
- Background progression: #141414 → #1a1a1a → #2A2A2A → #404040 → #505050

## Development Commands

### Core Development Workflow
```bash
# Install extension to development location
npm run install-local

# Launch Extension Development Host (recommended)
# 1. Open extension folder in VS Code/Cursor
# 2. Press F5 to launch development host
# 3. Edit theme file in main window
# 4. See changes instantly in development host

# Build extension package
npm run build

# Manual testing commands
npm run dev    # Shows development instructions
npm run test   # Shows testing instructions
```

### File Locations
- **Development location**: `/mnt/c/Users/pinwa/AppData/Roaming/Cursor/User/extensions/cursor-dark-extended-pin/`
- **Theme file**: `themes/cursor-dark-extended-pin-color-theme.json`
- **Test files**: `test-samples/sample.md` and `test-samples/sample-code.js`

## Theme Development Process

### Adding New Syntax Highlighting
Theme modifications are made in the `tokenColors` array using TextMate grammar scopes:

```json
{
  "name": "Markdown H1 Heading",
  "scope": "markup.heading.1.markdown",
  "settings": {
    "foreground": "#efb080",
    "fontStyle": "bold"
  }
}
```

### Color Consistency
Always reference `colors.md` for the established color palette. The theme follows these hierarchy patterns:
- H1-H6 headings use distinct colors: #efb080, #87c3ff, #aaa0fa, #f8c762, #a8cc7c, #e394dc
- Text formatting: Bold (#FFFFFF), Italic (#83d6c5), Code (#e394dc), Links (#88C0D0)
- Maintain high contrast against dark backgrounds (#141414, #1a1a1a)

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