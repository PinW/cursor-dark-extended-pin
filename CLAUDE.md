# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VS Code/Cursor theme extension called "Cursor Dark Extended Pin" that extends the original Cursor Dark theme with enhanced markdown syntax highlighting and improved visual hierarchy for documentation.

## Architecture

**Variable-Based Color System**: The theme uses a modern variable-based architecture:
- `src/colors.js`: Central color variable definitions organized by semantic meaning
- `src/theme-template.js`: Theme structure with variable references instead of hardcoded colors
- `src/token-colors.js`: TextMate syntax highlighting rules using color variables
- `build.js`: Build script that combines variables + template → final JSON

**Key File Locations**:
- **Development location**: `/mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin/`
- **Generated theme**: `themes/cursor-dark-extended-pin-color-theme.json`
- **Test files**: `test-samples/sample.md` and `test-samples/sample-code.js`

**Color System**: Variable-based system in `src/colors.js` with organized families:
- `backgrounds`, `foregrounds`, `accents`, `status`, `syntax`, `markdown`
- All colors centrally defined for consistent maintenance

## Essential Commands

```bash
# Build theme from source files
npm run build:theme

# Build and install to development location
npm run install-local

# Watch for changes and auto-rebuild
npm run build:watch
```

## Development Workflow

**Edit source files** (never edit the generated JSON directly):
- `src/colors.js` - Color variable definitions
- `src/theme-template.js` - UI theme structure  
- `src/token-colors.js` - Syntax highlighting rules

**Build process**: `build.js` combines variables + template → `themes/cursor-dark-extended-pin-color-theme.json`

**Testing**: Use Extension Development Host (F5) with `test-samples/` files

## Color Variable System

Always reference variables from `src/colors.js`:
```javascript
// Example: Adding new markdown colors
export const markdown = {
  h1: syntax.functions,        // Reference existing color
  codeBlock: backgrounds.tertiary,  // Use semantic names
  // ...
};
```

**Organized families**: `backgrounds`, `foregrounds`, `accents`, `status`, `syntax`, `markdown`

## Getting Scope Information

When users report styling issues, ask them to use `Developer: Inspect Editor Tokens and Scopes` command to provide specific TextMate scope names (e.g., `markup.heading.1.markdown`).

## Key Principles

1. **Preserve Cursor Dark UI** - Only modify syntax highlighting
2. **Use variable system** - Never hardcode colors 
3. **Test with sample files** - Verify changes in Extension Development Host

📋 **For detailed workflows, see [DEVELOPMENT.md](DEVELOPMENT.md)**