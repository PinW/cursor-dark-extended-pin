# Test Samples for Theme Development

This directory contains sample files for testing the Cursor Dark Extended Pin theme during development.

## Files

### `sample.md`
Comprehensive markdown file that tests all major markdown elements:
- **Headings** (H1-H6) - Tests the distinct heading colors
- **Text formatting** - Bold, italic, inline code
- **Code blocks** - Multi-language syntax highlighting
- **Lists** - Ordered and unordered with nesting
- **Links** - Various link formats and styles
- **Blockquotes** - Single and multi-line quotes
- **Tables** - Basic table formatting
- **Mixed content** - Complex combinations of elements

### `sample-code.js`
JavaScript file that tests syntax highlighting for:
- **Classes and methods** - ES6 class syntax
- **Functions** - Arrow functions, async/await
- **Variables and constants** - Let, const, destructuring
- **Strings** - Template literals, regular strings
- **Objects and arrays** - Various data structures
- **Control flow** - If/else, switch, loops
- **Modern JavaScript** - Promises, async/await, modules

## Usage

1. **Open Extension Development Host**: Press F5 in VS Code/Cursor
2. **Open test files**: Open these files in the development host window
3. **Make theme changes**: Edit the theme file in the main window
4. **See changes instantly**: The development host will reflect changes immediately

## What to Test

When making theme changes, verify these elements look good:

### Markdown Elements
- [ ] H1 headings are highly visible
- [ ] H2-H6 headings have distinct hierarchy
- [ ] Bold text stands out clearly
- [ ] Italic text is distinguishable
- [ ] Inline code is clearly marked
- [ ] Code blocks have good contrast
- [ ] Links are easily identifiable
- [ ] Blockquotes are styled appropriately
- [ ] List markers are visible

### Code Syntax
- [ ] Keywords are properly highlighted
- [ ] Strings have appropriate colors
- [ ] Comments are subtle but readable
- [ ] Functions and classes stand out
- [ ] Variables are distinguishable
- [ ] Operators are clearly visible
- [ ] Brackets and punctuation are readable

## Color Palette Reference

The theme uses these primary colors (see `../colors.md` for complete reference):

- **H1**: `#efb080` (warm orange)
- **H2**: `#87c3ff` (bright blue)
- **H3**: `#aaa0fa` (light purple)
- **H4**: `#f8c762` (golden yellow)
- **H5**: `#a8cc7c` (light green)
- **H6**: `#e394dc` (pink/magenta)
- **Bold**: `#FFFFFF` (pure white)
- **Italic**: `#83d6c5` (teal)
- **Code**: `#e394dc` (pink/magenta)
- **Links**: `#88C0D0` (light blue)
- **Quotes**: `#FFFFFF5C` (semi-transparent white)

## Development Tips

1. **Use the Extension Development Host** for the best development experience
2. **Keep both windows open** - edit in main window, preview in development host
3. **Test with real content** - Open your own markdown files to test
4. **Check different file types** - Test with various code languages
5. **Verify accessibility** - Ensure good contrast and readability