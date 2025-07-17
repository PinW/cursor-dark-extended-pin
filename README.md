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

The theme uses a carefully designed color palette with distinct heading colors:

- **H1**: `#efb080` (warm orange)
- **H2**: `#87c3ff` (bright blue)
- **H3**: `#aaa0fa` (light purple)
- **H4**: `#f8c762` (golden yellow)
- **H5**: `#a8cc7c` (light green)
- **H6**: `#e394dc` (pink/magenta)

For the complete color reference, see [colors.md](colors.md).

## Screenshots

The theme provides enhanced markdown rendering while maintaining the Cursor Dark aesthetic for all UI elements.

## Development

This extension is designed for easy development and testing:

```bash
# Install to development location
npm run install-local

# Build extension
npm run build

# Test changes (use Extension Development Host - press F5)
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