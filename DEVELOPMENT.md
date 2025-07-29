# Development Workflow Guide

This guide explains how to develop and test the Cursor Dark Extended Pin theme extension.

> **Note for AI assistants**: See [CLAUDE.md](CLAUDE.md) for essential project context and development commands.

## Quick Start

1. **Copy extension to development location**:
   ```bash
   npm run install-local
   ```

2. **Open extension in VS Code/Cursor**:
   ```bash
   code /mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin
   ```

3. **Launch Extension Development Host**:
   - Press `F5` in VS Code/Cursor
   - This opens a new window with your extension loaded

4. **Test theme changes**:
   - Open `test-samples/sample.md` in the development host
   - Edit theme file in main window
   - See changes instantly in development host

## Development Workflow

### Extension Development Host (Recommended)

This is the fastest way to develop and test theme changes:

1. **Setup**: Extension is already copied to Cursor extensions folder
2. **Open**: Open the extension folder in VS Code/Cursor
3. **Launch**: Press `F5` to start Extension Development Host
4. **Edit**: Make changes to theme file in main window
5. **Preview**: See changes instantly in development host window

### Manual Testing

For final validation or when Extension Development Host isn't available:

1. **Build**: Run `npm run build` to package extension
2. **Install**: Use Command Palette → `Extensions: Install from VSIX...`
3. **Activate**: Go to Command Palette → `Preferences: Color Theme` → `Cursor Dark Extended Pin`
4. **Test**: Open sample files to verify changes

## File Structure

```
cursor-dark-extended-pin/
├── src/                                           # Source files (NEW)
│   ├── colors.js                                 # Color variable definitions
│   ├── theme-template.js                         # Theme structure template
│   └── token-colors.js                           # Syntax highlighting rules
├── themes/
│   └── cursor-dark-extended-pin-color-theme.json # Generated theme file
├── test-samples/                                  # Test files
│   ├── sample.md                                 # Markdown test file
│   └── sample-code.js                            # JavaScript test file
├── build.js                                      # Build script (NEW)
├── package.json                                  # Extension manifest
├── colors.md                                     # Color reference
├── .vscodeignore                                 # Packaging exclusions
└── DEVELOPMENT.md                                # This file
```

## Available Scripts

### Variable-Based Development (Recommended)
- `npm run build:theme` - Build theme from source files
- `npm run build:watch` - Watch for changes and auto-rebuild
- `npm run install-local` - Build and install to development location

### Extension Packaging
- `npm run build` - Build theme + package extension into .vsix file
- `npm run package` - Build theme + create .vsix package

### Development Helpers
- `npm run dev` - Shows development instructions
- `npm run test` - Shows testing instructions

## Making Theme Changes

### Variable-Based Development (Recommended)

**Never edit the generated JSON file directly.** Instead, modify the source files in the `src/` directory:

**1. Color Changes** - Edit `src/colors.js`:
```javascript
export const markdown = {
  h1: syntax.functions,     // Change to different color variable
  bold: syntax.numbers,     // Use syntax colors
  codeBlock: backgrounds.tertiary,  // Use semantic names
  // ...
};
```

**2. Theme Structure** - Edit `src/theme-template.js` for UI colors:
```javascript
"editor.background": backgrounds.secondary,  // Use variable reference
"editorLineNumber.foreground": selections.medium,
```

**3. Syntax Rules** - Edit `src/token-colors.js` for new highlighting rules:
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

**4. Build** - Generate the final theme:
```bash
npm run build:theme
```

### Working with TextMate Scopes

When adding new syntax highlighting rules:

1. **Find the scope** - Use `Developer: Inspect Editor Tokens and Scopes` command
2. **Identify the element** - Click on text to see scope names like `markup.heading.1.markdown`
3. **Add or modify rule** - In `src/token-colors.js`:
   ```javascript
   {
     "name": "Descriptive Name",
     "scope": "scope.name.from.inspector",
     "settings": {
       "foreground": colorVariable.fromColors,
       "fontStyle": "bold" // optional
     }
   }
   ```
4. **Reference color variables** - Always use variables from `src/colors.js`
5. **Build and test** - Run `npm run build:theme` and test in Extension Development Host

### Extension Development Host Workflow

**Setup (once):**
1. Copy extension: `npm run install-local`
2. Open in VS Code/Cursor: `code /mnt/c/Users/pinwa/.cursor/extensions/cursor-dark-extended-pin`
3. Press F5 to launch development host

**Development cycle:**
1. Edit source files in main window (`src/colors.js`, `src/token-colors.js`, etc.)
2. Run `npm run build:theme` to regenerate theme
3. Reload development host window using `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to see changes
4. Test with sample files in development host

**Pro tip:** Use `npm run build:watch` for automatic rebuilding on file changes.

## Extension Packaging and Distribution

### Creating a Release

1. **Build theme**: `npm run build:theme`
2. **Package extension**: `npm run build` (creates `.vsix` file)
3. **Test package**: Install the `.vsix` file to verify it works
4. **Distribute**: Share the `.vsix` file or publish to marketplace

### Package Configuration

The extension uses `vsce` for packaging with `.vscodeignore` excluding development files:
- `src/` directory (source files)
- `build.js` (build script)
- Development documentation
- Test samples

### Installing a Local Package

```bash
# Package the extension
npm run build

# Install via Command Palette
# 1. Open Command Palette (Ctrl+Shift+P / Cmd+Shift+P)
# 2. Run "Extensions: Install from VSIX..."
# 3. Select the generated .vsix file
# 4. Activate via "Preferences: Color Theme"
```

### Color System

The new variable-based system provides organized color families:

**Color Variables** (from `src/colors.js`):
- `backgrounds`: Primary, secondary, tertiary background colors
- `foregrounds`: Text and UI foreground colors  
- `accents`: Blue accent colors for interactive elements
- `status`: Green, red, yellow for status indicators
- `syntax`: All syntax highlighting colors
- `markdown`: Markdown-specific color mappings

**Color Consistency:**
Always reference variables from `src/colors.js` for centralized maintenance.

## Testing Checklist

### Markdown Elements
- [ ] H1-H6 headings have distinct colors and hierarchy
- [ ] Bold text is clearly visible
- [ ] Italic text is distinguishable
- [ ] Inline code stands out from regular text
- [ ] Code blocks have good contrast
- [ ] Links are easily identifiable
- [ ] Blockquotes are appropriately styled
- [ ] List markers are visible

### Code Syntax
- [ ] Keywords are properly highlighted
- [ ] Strings have appropriate colors
- [ ] Comments are subtle but readable
- [ ] Functions and classes stand out
- [ ] Variables are distinguishable
- [ ] Operators are clearly visible

### General
- [ ] Good contrast against dark background
- [ ] Colors work well together
- [ ] No elements are hard to read
- [ ] Theme maintains Cursor Dark aesthetic

## Debugging Tools

### Developer: Inspect Editor Tokens and Scopes
**For developers/users:** Use this VS Code/Cursor command palette function to debug syntax highlighting issues:

1. **Open Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. **Run**: `Developer: Inspect Editor Tokens and Scopes`
3. **Click** on any text element to see:
   - **TextMate scopes** - The scope names that apply to that token
   - **Theme rules** - Which theme rules are being applied
   - **Foreground/background colors** - The actual colors being used
   - **Font style** - Bold, italic, etc.

This is invaluable for developers when:
- **Finding scope names** when adding new syntax highlighting rules
- **Debugging** why certain elements aren't styled correctly
- **Understanding** how multiple rules interact
- **Verifying** that color variables are being applied correctly
- **Providing information to Claude** about what scopes need styling

**Example developer workflow:**
1. Open a markdown file in Extension Development Host
2. Run the inspect command
3. Click on a heading that looks wrong
4. See the scope (e.g., `markup.heading.1.markdown`)
5. Either adjust the rule in `src/token-colors.js` yourself, or provide the scope information to Claude for assistance

## Troubleshooting

### Extension Development Host Not Working
1. Ensure VS Code/Cursor is up to date
2. Check that extension is in correct location
3. Try reloading the window (`Ctrl+R` or `Cmd+R`)
4. Check for errors in Developer Tools

### Changes Not Appearing
1. **Variable-based**: Run `npm run build:theme` after editing source files
2. Check that Extension Development Host is running
3. Try reloading the development host window
4. Verify you're editing `src/` files, not the generated JSON

### Build Errors
1. Check JavaScript syntax in `src/` files
2. Ensure all color variables are properly defined
3. Verify `build.js` script runs without errors
4. Check that all imports/exports are correct

### Theme Not Loading
1. Validate generated JSON syntax in theme file
2. Check file paths in `package.json`
3. Verify extension is properly packaged
4. Check VS Code/Cursor extension log for errors

## Best Practices

1. **Use Extension Development Host** for the best development experience
2. **Test with real content** - Open your own files to verify theme
3. **Keep changes incremental** - Test small changes frequently
4. **Maintain consistency** - Use colors from the established palette
5. **Document changes** - Update this guide when adding new features
6. **Test accessibility** - Ensure good contrast and readability

## Publishing

When ready to share the theme:

1. **Final build**: `npm run build`
2. **Test installation**: Install from .vsix file
3. **Verify all features**: Use test samples to validate
4. **Update version**: Increment version in `package.json`
5. **Document changes**: Update README and changelog

## Resources

- [VS Code Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- [TextMate Grammar](https://macromates.com/manual/en/language_grammars)
- [Scope Inspector](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide#scope-inspector)
- [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)