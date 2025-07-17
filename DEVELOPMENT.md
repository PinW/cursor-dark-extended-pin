# Development Workflow Guide

This guide explains how to develop and test the Cursor Dark Extended Pin theme extension.

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
├── themes/
│   └── cursor-dark-extended-pin-color-theme.json  # Main theme file
├── test-samples/                                   # Test files
│   ├── sample.md                                  # Markdown test file
│   ├── sample-code.js                             # JavaScript test file
│   └── README.md                                  # Testing guide
├── package.json                                   # Extension manifest
├── colors.md                                      # Color reference
├── .vscodeignore                                  # Packaging exclusions
└── DEVELOPMENT.md                                 # This file
```

## Available Scripts

- `npm run dev` - Shows development instructions
- `npm run build` - Packages extension into .vsix file
- `npm run install-local` - Copies extension to Cursor extensions folder
- `npm run test` - Shows testing instructions

## Making Theme Changes

### 1. Understanding the Theme File

The theme is defined in `themes/cursor-dark-extended-pin-color-theme.json`:

```json
{
  "name": "Cursor Dark Extended Pin v1.0.0",
  "colors": { /* UI colors */ },
  "tokenColors": [ /* Syntax highlighting rules */ ]
}
```

### 2. Adding New Token Colors

To add or modify syntax highlighting:

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

### 3. Color Palette

Use colors from `colors.md` for consistency:

**Heading Colors:**
- H1: `#efb080` (warm orange)
- H2: `#87c3ff` (bright blue)
- H3: `#aaa0fa` (light purple)
- H4: `#f8c762` (golden yellow)
- H5: `#a8cc7c` (light green)
- H6: `#e394dc` (pink/magenta)

**Text Formatting:**
- Bold: `#FFFFFF` (pure white)
- Italic: `#83d6c5` (teal)
- Code: `#e394dc` (pink/magenta)
- Links: `#88C0D0` (light blue)

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

## Troubleshooting

### Extension Development Host Not Working
1. Ensure VS Code/Cursor is up to date
2. Check that extension is in correct location
3. Try reloading the window (`Ctrl+R` or `Cmd+R`)
4. Check for errors in Developer Tools

### Changes Not Appearing
1. Verify you're editing the correct theme file
2. Check that Extension Development Host is running
3. Try reloading the development host window
4. Ensure JSON syntax is valid

### Theme Not Loading
1. Validate JSON syntax in theme file
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