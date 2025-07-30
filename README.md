# Cursor Dark Extended Pin Theme

A VS Code/Cursor theme extension that extends the original Cursor Dark theme with enhanced markdown syntax highlighting and improved visual hierarchy for documentation.

## Features

- **Preserves Cursor Dark UI** - Maintains the Cursor Dark interface colors
- **Enhanced Markdown Support** - Heading colors, highlighting for @path/ tags
- **Variable-Based Architecture** - Modern build system for easy customization

## Installation

### From Source
1. Clone this repository
2. Run `npm run build` to package the extension
3. Install the generated `.vsix` file via Command Palette → `Extensions: Install from VSIX...`

### For Development
See [DEVELOPMENT.md](DEVELOPMENT.md) for complete development setup and workflow.

## Color Palette

By default, markdown colors are:

- **All Headings**: `#BF616A` (title red)
- **Bold Text**: `#e0bb7f` (warm yellow)
- **Italic Text**: `#83d6c5` (teal/cyan)
- **Links**: `#88C0D0` (light blue)
- **Inline Code**: `#e394dc` (pink/magenta)
- **@ File References**: `#af9cff` (purple)

For the complete color system, see [src/colors.js](src/colors.js).

## Quick Start

```bash
# Package extension
npm run build

# Install to local development
npm run install-local

# Launch development environment
# Press F5 in VS Code/Cursor for Extension Development Host
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
