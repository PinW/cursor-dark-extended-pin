# Cursor Dark Extended Pin Theme

A VS Code/Cursor theme extension that extends the original Cursor Dark theme with enhanced markdown syntax highlighting and improved visual hierarchy for documentation.

## Features

- **Preserves Cursor Dark UI** - Maintains the beloved Cursor Dark interface colors
- **Enhanced Markdown Support** - Distinct heading hierarchy with carefully chosen colors
- **Improved Readability** - Better contrast and visual distinction for documentation
- **Consistent Color Palette** - Harmonious color families based on the original theme

## Installation

### From Source
1. Clone this repository
2. Run `npm run build` to package the extension
3. Install the generated `.vsix` file in VS Code/Cursor

### Development
See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed development instructions.

## Color Palette

The theme uses a variable-based color system with consistent heading colors:

- **All Headings**: `#BF616A` (title red) - Unified heading hierarchy
- **Bold Text**: `#efb080` (warm orange)
- **Italic Text**: `#83d6c5` (teal/cyan)
- **Links**: `#88C0D0` (light blue)
- **Inline Code**: `#e394dc` (pink/magenta)

For the complete color reference, see [src/colors.js](src/colors.js).

## Screenshots

The theme provides enhanced markdown rendering while maintaining the Cursor Dark aesthetic for all UI elements.

## Development

This extension uses a modern variable-based architecture for easy development:

```bash
# Build theme from source files
npm run build:theme

# Build and install to development location  
npm run install-local

# Build extension package (.vsix)
npm run build

# Watch for changes and auto-rebuild
npm run build:watch

# Launch Extension Development Host (recommended)
# Press F5 in VS Code/Cursor
npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test using the provided sample files
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

Based on the original Cursor Dark theme. Enhanced for better markdown documentation readability.