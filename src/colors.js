/**
 * Cursor Dark Extended Pin - Color Variables
 * Organized color system for maintainable theme development
 */

// Primary Background Colors
export const backgrounds = {
  primary: "#141414",        // Primary dark background - activity bar, editor groups, panels, status bar, sidebar
  secondary: "#1a1a1a",      // Secondary background - editor background, breadcrumb, dropdown, tabs  
  tertiary: "#2A2A2A",       // Tertiary background - dropdown border, hover states, input background
  minimap: "#181818",        // Minimap background
};

// Foreground/Text Colors
export const foregrounds = {
  primary: "#FFFFFF",        // Pure white - primary text, active elements, cursor
  editor: "#D8DEE9",         // Light gray - editor foreground text
  supplemental: "#FFFFFF70",   // Pin's custom supplemental color
  title: "#BF616A",
  medium: "#CCCCCC",         // Medium light gray - activity bar foreground, menu text
  statusBar: "#cccccc82",    // Semi-transparent light gray - status bar foreground
  inactive: "#cccccc60",     // More transparent light gray - inactive title bar
  syntax: "#d6d6dd",         // Slightly warmer light gray - syntax highlighting base
  clean: "#d1d1d1",          // Clean light gray - variables, namespaces
  transparent: "#CCCCCC99",  // Semi-transparent medium gray
  bold: "#e0bb7f",           // Dimmed warm yellow - for bold text formatting
};

// Accent Colors
export const accents = {
  lightBlue: "#88C0D0",      // Light blue - badges, find matches, links, terminal cyan
  blue: "#81A1C1",           // Blue - buttons, links, terminal blue
  hoverBlue: "#87A6C4",      // Lighter blue - button hover states
  brightBlue: "#87c3ff",     // Bright blue - classes, types, HTML tags
};

// Status Colors
export const status = {
  green: "#A3BE8C",          // Green - Git added, diff inserted, progress bar, terminal green
  red: "#BF616A",            // Red - errors, Git deleted, diff removed, terminal red
  yellow: "#EBCB8B",         // Yellow/amber - warnings, Git modified, terminal yellow
};

// Selection and Highlight Colors
export const selections = {
  dark: "#404040",           // Dark gray - selections, hover backgrounds
  darkTransparent: "#40404099", // Semi-transparent dark gray - editor selection
  veryDark: "#292929",       // Very dark gray - line highlight, hover highlight
  medium: "#505050",         // Medium gray - line numbers, indent guides, ignored files
};

// Border Colors
export const borders = {
  subtle: "#FFFFFF0D",       // Very transparent white - subtle borders
  semiTransparent: "#FFFFFF55", // Semi-transparent white - bracket match borders
  focus: "#30373a",          // Dark teal - focus border
};

// Syntax Highlighting Colors
export const syntax = {
  // String and Literal Colors
  strings: "#e394dc",        // Pink/magenta - strings, markup inserted
  numbers: "#ebc88d",        // Warm yellow - numbers, functions in some contexts
  constants: "#f8c762",      // Golden yellow - constants, parameters, control elements
  
  // Function and Method Colors
  functions: "#efb080",      // Warm orange - functions, classes, types, imports
  methods: "#aaa0fa",        // Light purple - methods, attributes, links, flowtype
  
  // Variable and Property Colors
  properties: "#AA9BF5",     // Purple - properties, variables
  propertiesAlt: "#af9cff",  // Slightly different purple - Vue tags, C++ properties
  variableReadwrite: "#94C1FA", // Light blue - variable.other.readwrite
  
  // Keyword and Operator Colors
  keywords: "#83d6c5",       // Teal/cyan - keywords, operators, storage
  builtinTypes: "#82d2ce",   // Similar teal - built-in types, storage, magic variables
  decorators: "#a8cc7c",     // Light green - decorators, macros, control directives
  
  // Special Context Colors
  languageVars: "#C1808A",   // Muted red-pink - language variables like 'this', 'self'
  selfParam: "#cc7c8a",      // Similar muted red-pink - self parameter
  metaTags: "#fad075",       // Light yellow - meta tags
  
  // Comment Colors
  comments: "#FFFFFF5C",     // Semi-transparent white - comments, quotes, dimmed elements
  
  // Error and Warning Colors
  errors: "#f44747",         // Bright red - illegal PHP, error tokens
  warningHighlight: "#ea7620", // Orange - minimap warning highlight
  errorHighlight: "#f14c4c", // Red - minimap error/deleted highlight
  addedHighlight: "#15ac91", // Green - minimap added highlight
  
  // Terminal ANSI Colors
  terminalMagenta: "#B48EAD", // Purple - terminal magenta
};

// Markdown syntax coloring
export const markdown = {
  // For Headings (H1-H6)
  h1: foregrounds.title,            // Title color for headings
  h2: foregrounds.title,            // Title color for headings
  h3: foregrounds.title,            // Title color for headings
  h4: foregrounds.title,            // Title color for headings
  h5: foregrounds.title,            // Title color for headings
  h6: foregrounds.title,            // Title color for headings
  headingPunctuation: foregrounds.title, // Title color for heading punctuation

  // For Text Formatting
  bold: foregrounds.bold,          // Warm yellow - for bold text formatting
  italic: syntax.keywords,         // Teal/cyan - for italic text (syntax.keywords)
  
  // For Links
  linkText: accents.lightBlue,       // Light blue - for link text [linkA] (accents.lightBlue)
  linkBrackets: syntax.keywords,   // Teal/cyan - for link brackets [] () (syntax.keywords)
  linkUrl: foregrounds.supplemental,    // Default text color - for link URL (linkB) (foregrounds.primary)
  linkTitle: foregrounds.supplemental,  // Default text color - for link title "Example Website" (foregrounds.primary)

  // For Code Elements
  inlineCode: syntax.strings,      // Light purple - for inline code, matches methods (syntax.methods)
  inlineRawString: syntax.strings, // markup.inline.raw.string.markdown (syntax.methods)
  codeBackground: backgrounds.tertiary, // Dark background - for code block backgrounds (backgrounds.tertiary)
  codeLanguage: syntax.decorators, // Light green - for code language indicators (syntax.decorators)
  codeLanguageLabel: syntax.decorators, // Light green - for code block language label (fenced_code.block.language.markdown)
  stringPunctuation: syntax.syntax,  // punctuation.definition.string.begin.markdown, .end, .metadata (foregrounds.syntax)
  codeBlockPunctuation: foregrounds.editor, // Default editor color - Triple backticks - punctuation.definition.markdown, markup.fenced_code.block.markdown

  // For Structure Elements
  listMarkers: syntax.syntax,   // Light gray - for list markers (foregrounds.syntax)
  listPunctuation: syntax.syntax,    // punctuation.definition.list.markdown (foregrounds.syntax)
  quotes: foregrounds.medium,      // Semi-transparent white - for quotes, matches comments (syntax.comments)
  mutedPunctuation: selections.medium, // Medium gray - for muted punctuation (selections.medium)
  separator: foregrounds.editor,   // Default editor color - Horizontal rule separators - meta.separator.markdown

  // Other
  metadataPunctuation: syntax.syntax, // punctuation.definition.metadata.markdown (foregrounds.syntax)
  setextHeading: syntax.syntax,      // markup.heading.setext (foregrounds.syntax)
};

// Export all color groups
export default {
  backgrounds,
  foregrounds,
  accents,
  status,
  selections,
  borders,
  syntax,
  markdown,
};