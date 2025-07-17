# Cursor Dark Theme Color Palette

This document catalogs all color codes used in the Cursor Dark theme for easy reference when creating markdown enhancements.

## UI Colors (Interface Elements)

### Primary Background Colors
- #141414 - Primary dark background - activity bar, editor groups, panels, status bar, sidebar
- #1a1a1a - Secondary background - editor background, breadcrumb, dropdown, tabs
- #181818 - Minimap background
- #2A2A2A - Tertiary background - dropdown border, hover states, input background

### Foreground/Text Colors
- #FFFFFF - Pure white - primary text, active elements, cursor
- #D8DEE9 - Light gray - editor foreground text
- #CCCCCC - Medium light gray - activity bar foreground, menu text
- #cccccc82 - Semi-transparent light gray - status bar foreground
- #cccccc60 - More transparent light gray - inactive title bar
- #d6d6dd - Slightly warmer light gray - syntax highlighting base
- #d1d1d1 - Clean light gray - variables, namespaces

### Accent Colors
- #88C0D0 - Light blue - badges, find matches, links, terminal cyan
- #81A1C1 - Blue - buttons, links, terminal blue
- #87A6C4 - Lighter blue - button hover states
- #87c3ff - Bright blue - classes, types, HTML tags

### Status Colors
- #A3BE8C - Green - Git added, diff inserted, progress bar, terminal green
- #BF616A - Red - errors, Git deleted, diff removed, terminal red
- #EBCB8B - Yellow/amber - warnings, Git modified, terminal yellow

### Selection and Highlight Colors
- #404040 - Dark gray - selections, hover backgrounds
- #40404099 - Semi-transparent dark gray - editor selection
- #292929 - Very dark gray - line highlight, hover highlight
- #505050 - Medium gray - line numbers, indent guides, ignored files

### Border Colors
- #FFFFFF0D - Very transparent white - subtle borders
- #FFFFFF55 - Semi-transparent white - bracket match borders
- #30373a - Dark teal - focus border

## Syntax Highlighting Colors

### String and Literal Colors
- #e394dc - Pink/magenta - strings, markup inserted
- #ebc88d - Warm yellow - numbers, functions in some contexts
- #f8c762 - Golden yellow - constants, parameters, control elements

### Function and Method Colors
- #efb080 - Warm orange - functions, classes, types, imports
- #aaa0fa - Light purple - methods, attributes, links, flowtype

### Variable and Property Colors
- #AA9BF5 - Purple - properties, variables
- #af9cff - Slightly different purple - Vue tags, C++ properties
- #94C1FA - Light blue - variable.other.readwrite

### Keyword and Operator Colors
- #83d6c5 - Teal/cyan - keywords, operators, storage
- #82d2ce - Similar teal - built-in types, storage, magic variables
- #a8cc7c - Light green - decorators, macros, control directives

### Special Context Colors
- #C1808A - Muted red-pink - language variables like 'this', 'self'
- #cc7c8a - Similar muted red-pink - self parameter
- #fad075 - Light yellow - meta tags

### Comment Colors
- #FFFFFF5C - Semi-transparent white - comments, quotes, dimmed elements

### Error and Warning Colors
- #f44747 - Bright red - illegal PHP, error tokens
- #ea7620 - Orange - minimap warning highlight
- #f14c4c - Red - minimap error/deleted highlight
- #15ac91 - Green - minimap added highlight

### Terminal ANSI Colors
- #B48EAD - Purple - terminal magenta
- Various duplicates of the main accent colors for terminal compatibility

## Recommended Colors for Markdown Enhancements

### For Headings (H1-H6)
- #efb080 - Warm orange - matches function colors
- #87c3ff - Bright blue - matches class colors
- #aaa0fa - Light purple - matches method colors
- #f8c762 - Golden yellow - matches constant colors
- #a8cc7c - Light green - matches decorator colors
- #e394dc - Pink/magenta - matches string colors

### For Text Formatting
- #FFFFFF - Pure white - for bold text
- #88C0D0 - Light blue - for links
- #83d6c5 - Teal - for italic text

### For Code Elements
- #e394dc - Pink/magenta - for inline code, matches strings
- #2A2A2A - Dark background - for code block backgrounds
- #a8cc7c - Light green - for code language indicators

### For Structure Elements
- #f8c762 - Golden yellow - for list markers
- #FFFFFF5C - Semi-transparent white - for quotes, matches comments
- #505050 - Medium gray - for muted punctuation

## Color Usage Patterns

### Most Frequently Used Colors
1. #141414 - Primary dark background - appears 20+ times
2. #FFFFFF - White text/highlights - appears 15+ times
3. #d6d6dd - Main syntax text - appears 10+ times
4. #88C0D0 - Blue accent - appears 8+ times
5. #efb080 - Orange for functions/classes - appears 8+ times

### Color Families
- Blues: #88C0D0, #81A1C1, #87A6C4, #87c3ff - cohesive blue family
- Grays: #141414, #1a1a1a, #2A2A2A, #404040, #505050 - progressive gray scale
- Purples: #AA9BF5, #af9cff, #aaa0fa, #B48EAD - purple family for properties/methods
- Status trio: #A3BE8C, #BF616A, #EBCB8B - green, red, yellow

### Transparency Variations
Many colors include alpha channel variations:
- 22 suffix = ~13% opacity
- 33 suffix = ~20% opacity  
- 44 suffix = ~27% opacity
- 55 suffix = ~33% opacity
- 66 suffix = ~40% opacity
- 77 suffix = ~47% opacity
- 99 suffix = ~60% opacity
- CC suffix = ~80% opacity
- dd suffix = ~87% opacity

## Design Principles

This color palette follows these design principles:
1. High contrast for readability
2. Semantic color coding - red for errors, green for success, etc.
3. Consistent color families for related elements
4. Progressive opacity for layering and emphasis
5. Warm accents against cool backgrounds for visual interest