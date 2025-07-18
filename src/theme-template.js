/**
 * Cursor Dark Extended Pin - Theme Template
 * Uses color variables to generate the final theme JSON
 */

import colors from './colors.js';
import tokenColors from './token-colors.js';

const {
  backgrounds,
  foregrounds,
  accents,
  status,
  selections,
  borders,
  syntax,
  markdown,
} = colors;

export const themeTemplate = {
  name: "Cursor Dark Extended Pin v1.0.0",
  
  colors: {
    // Activity Bar
    "activityBar.background": backgrounds.primary,
    "activityBar.foreground": foregrounds.transparent,
    "activityBarBadge.background": accents.lightBlue,
    "activityBarBadge.foreground": "#000000",
    
    // Badges
    "badge.background": accents.lightBlue,
    "badge.foreground": backgrounds.primary,
    
    // Breadcrumbs
    "breadcrumb.activeSelectionForeground": foregrounds.primary,
    "breadcrumb.background": backgrounds.secondary,
    "breadcrumb.foreground": foregrounds.transparent,
    "breadcrumbPicker.background": backgrounds.primary,
    
    // Buttons
    "button.background": accents.blue,
    "button.foreground": "#191c22",
    "button.hoverBackground": accents.hoverBlue,
    "button.secondaryBackground": "#565656",
    "button.secondaryForeground": "#ececec",
    "button.secondaryHoverBackground": "#767676",
    
    // Debug
    "debugExceptionWidget.background": selections.medium,
    "debugExceptionWidget.border": backgrounds.primary,
    "debugToolBar.background": backgrounds.secondary,
    
    // Diff Editor
    "diffEditor.insertedTextBackground": status.green + "22",
    "diffEditor.removedTextBackground": status.red + "22",
    
    // Dropdown
    "dropdown.background": backgrounds.secondary,
    "dropdown.border": backgrounds.tertiary,
    "dropdown.foreground": foregrounds.primary,
    
    // Editor
    "editor.background": backgrounds.secondary,
    "editor.foreground": foregrounds.editor,
    "editor.findMatchBackground": accents.lightBlue + "66",
    "editor.findMatchHighlightBackground": accents.lightBlue + "44",
    "editor.findRangeHighlightBackground": foregrounds.primary + "33",
    "editor.hoverHighlightBackground": selections.veryDark,
    "editor.inactiveSelectionBackground": selections.dark + "77",
    "editor.lineHighlightBackground": selections.veryDark,
    "editor.lineHighlightBorder": selections.veryDark,
    "editor.rangeHighlightBackground": selections.dark + "52",
    "editor.selectionBackground": selections.darkTransparent,
    "editor.selectionHighlightBackground": selections.dark + "CC",
    "editor.snippetFinalTabstopHighlightBorder": foregrounds.medium,
    "editor.snippetTabstopHighlightBackground": foregrounds.medium + "55",
    "editor.wordHighlightBackground": "#ffffff21",
    "editor.wordHighlightStrongBackground": "#ffffff2d",
    
    // Editor Bracket Match
    "editorBracketMatch.background": backgrounds.primary + "00",
    "editorBracketMatch.border": borders.semiTransparent,
    
    // Editor Code Lens
    "editorCodeLens.foreground": selections.medium,
    
    // Editor Cursor
    "editorCursor.foreground": foregrounds.primary,
    
    // Editor Error
    "editorError.border": status.red + "00",
    "editorError.foreground": status.red,
    
    // Editor Group
    "editorGroup.border": borders.subtle,
    "editorGroup.dropBackground": backgrounds.tertiary + "99",
    "editorGroup.emptyBackground": backgrounds.primary,
    "editorGroupHeader.noTabsBackground": backgrounds.primary,
    "editorGroupHeader.tabsBackground": backgrounds.primary,
    "editorGroupHeader.tabsBorder": borders.subtle,
    
    // Editor Gutter
    "editorGutter.addedBackground": status.green,
    "editorGutter.background": backgrounds.secondary,
    "editorGutter.deletedBackground": status.red,
    "editorGutter.modifiedBackground": status.yellow,
    
    // Editor Hover Widget
    "editorHoverWidget.background": backgrounds.secondary,
    "editorHoverWidget.border": backgrounds.tertiary,
    
    // Editor Indent Guide
    "editorIndentGuide.activeBackground": selections.medium,
    "editorIndentGuide.background": selections.dark + "B3",
    
    // Editor Inlay Hint
    "editorInlayHint.background": "#00000000",
    "editorInlayHint.foreground": selections.medium,
    "editorInlayHint.parameterBackground": "#00000000",
    "editorInlayHint.parameterForeground": selections.medium,
    "editorInlayHint.typeBackground": "#00000000",
    "editorInlayHint.typeForeground": selections.medium,
    
    // Editor Line Number
    "editorLineNumber.activeForeground": foregrounds.primary,
    "editorLineNumber.foreground": selections.medium,
    
    // Editor Link
    "editorLink.activeForeground": foregrounds.primary,
    
    // Editor Marker Navigation
    "editorMarkerNavigation.background": "#ffffff70",
    "editorMarkerNavigationError.background": status.red + "C0",
    "editorMarkerNavigationWarning.background": foregrounds.medium,
    
    // Editor Overview Ruler
    "editorOverviewRuler.addedForeground": status.green + "99",
    "editorOverviewRuler.deletedForeground": status.red + "99",
    "editorOverviewRuler.modifiedForeground": status.yellow + "99",
    "editorOverviewRuler.border": "#00000000",
    
    // Editor Ruler
    "editorRuler.foreground": "#494949",
    
    // Editor Suggest Widget
    "editorSuggestWidget.background": backgrounds.primary,
    "editorSuggestWidget.border": backgrounds.tertiary,
    "editorSuggestWidget.foreground": foregrounds.primary,
    "editorSuggestWidget.highlightForeground": foregrounds.primary,
    "editorSuggestWidget.selectedBackground": selections.dark,
    
    // Editor Warning
    "editorWarning.border": foregrounds.medium + "00",
    "editorWarning.foreground": status.yellow,
    
    // Editor Whitespace
    "editorWhitespace.foreground": selections.medium + "B3",
    
    // Editor Widget
    "editorWidget.background": backgrounds.primary,
    "editorWidget.resizeBorder": foregrounds.primary,
    
    // Error Foreground
    "errorForeground": status.red,
    
    // Extension Button
    "extensionButton.prominentBackground": "#565656",
    "extensionButton.prominentForeground": foregrounds.primary,
    "extensionButton.prominentHoverBackground": "#767676",
    
    // Focus Border
    "focusBorder": borders.focus,
    
    // Foreground
    "foreground": foregrounds.medium + "dd",
    
    // Git Decoration
    "gitDecoration.addedResourceForeground": status.green,
    "gitDecoration.deletedResourceForeground": status.red,
    "gitDecoration.ignoredResourceForeground": selections.medium,
    "gitDecoration.modifiedResourceForeground": status.yellow,
    "gitDecoration.untrackedResourceForeground": accents.lightBlue,
    
    // GitLens
    "gitlens.trailingLineForegroundColor": foregrounds.transparent,
    
    // Input
    "input.background": backgrounds.tertiary + "55",
    "input.border": backgrounds.tertiary,
    "input.foreground": foregrounds.primary,
    "input.placeholderForeground": foregrounds.primary + "99",
    
    // Input Option
    "inputOption.activeBorder": foregrounds.primary,
    
    // Input Validation
    "inputValidation.errorBackground": status.red,
    "inputValidation.errorBorder": status.red,
    "inputValidation.infoBackground": accents.lightBlue,
    "inputValidation.infoBorder": accents.lightBlue,
    "inputValidation.infoForeground": backgrounds.primary,
    "inputValidation.warningBackground": status.yellow,
    "inputValidation.warningBorder": status.yellow,
    
    // List
    "list.activeSelectionBackground": "#ffffff1d",
    "list.activeSelectionForeground": foregrounds.primary,
    "list.inactiveSelectionBackground": "#ffffff10",
    "list.inactiveSelectionForeground": "#ffffffd7",
    "list.deemphasizedForeground": foregrounds.medium,
    "list.dropBackground": foregrounds.primary + "99",
    "list.errorForeground": status.red,
    "list.focusBackground": "#434C5E",
    "list.focusForeground": "#ECEFF4",
    "list.highlightForeground": accents.lightBlue,
    "list.hoverBackground": backgrounds.tertiary + "99",
    "list.hoverForeground": foregrounds.primary,
    "list.invalidItemForeground": foregrounds.medium,
    "list.warningForeground": status.yellow,
    
    // Menu
    "menu.background": backgrounds.primary,
    "menu.foreground": foregrounds.medium,
    "menu.separatorBackground": foregrounds.medium,
    "menubar.selectionBackground": foregrounds.medium + "33",
    
    // Merge
    "merge.border": backgrounds.tertiary + "00",
    "merge.currentContentBackground": accents.lightBlue + "4D",
    "merge.currentHeaderBackground": accents.lightBlue + "66",
    "merge.incomingContentBackground": status.green + "4D",
    "merge.incomingHeaderBackground": status.green + "66",
    
    // Notifications
    "notificationLink.foreground": accents.lightBlue,
    "notifications.background": backgrounds.primary,
    "notifications.foreground": foregrounds.primary,
    
    // Panel
    "panel.background": backgrounds.primary,
    "panel.border": borders.subtle,
    "panelTitle.activeBorder": foregrounds.primary + "00",
    "panelTitle.activeForeground": foregrounds.primary,
    "panelTitle.inactiveForeground": foregrounds.transparent,
    
    // Peek View
    "peekView.border": selections.medium,
    "peekViewEditor.background": backgrounds.primary,
    "peekViewEditor.matchHighlightBackground": foregrounds.primary + "66",
    "peekViewEditorGutter.background": backgrounds.primary,
    "peekViewResult.background": backgrounds.primary,
    "peekViewResult.fileForeground": foregrounds.primary,
    "peekViewResult.lineForeground": foregrounds.primary + "66",
    "peekViewResult.matchHighlightBackground": foregrounds.primary + "66",
    "peekViewResult.selectionBackground": selections.dark,
    "peekViewResult.selectionForeground": foregrounds.primary,
    "peekViewTitle.background": backgrounds.tertiary,
    "peekViewTitleDescription.foreground": foregrounds.primary,
    "peekViewTitleLabel.foreground": foregrounds.primary,
    
    // Picker Group
    "pickerGroup.border": backgrounds.tertiary + "00",
    "pickerGroup.foreground": foregrounds.primary,
    
    // Progress Bar
    "progressBar.background": status.green,
    
    // Scrollbar
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.activeBackground": "#60606055",
    "scrollbarSlider.background": "#40404055",
    "scrollbarSlider.hoverBackground": "#40404055",
    
    // Selection
    "selection.background": foregrounds.primary + "33",
    
    // Side Bar
    "sideBar.background": backgrounds.primary,
    "sideBar.border": borders.subtle,
    "sideBar.foreground": foregrounds.transparent,
    "sideBarSectionHeader.background": backgrounds.primary,
    "sideBarSectionHeader.foreground": selections.medium,
    "sideBarTitle.foreground": foregrounds.medium,
    
    // Status Bar
    "statusBar.foreground": foregrounds.statusBar,
    "statusBar.background": backgrounds.primary,
    "statusBar.border": borders.subtle,
    "statusBar.debuggingBackground": "#434C5E",
    "statusBar.debuggingForeground": foregrounds.editor,
    "statusBar.noFolderBackground": backgrounds.primary,
    "statusBar.noFolderForeground": foregrounds.primary,
    "statusBarItem.activeBackground": selections.medium,
    "statusBarItem.hoverBackground": selections.dark,
    "statusBarItem.prominentBackground": backgrounds.tertiary,
    "statusBarItem.prominentHoverBackground": selections.dark,
    
    // Tabs
    "tab.activeBackground": backgrounds.secondary,
    "tab.activeBorder": backgrounds.secondary,
    "tab.activeBorderTop": foregrounds.primary + "00",
    "tab.activeForeground": foregrounds.primary,
    "tab.border": borders.subtle,
    "tab.hoverBackground": foregrounds.primary + "00",
    "tab.inactiveBackground": backgrounds.primary,
    "tab.inactiveForeground": selections.medium,
    "tab.unfocusedActiveBorder": accents.lightBlue + "00",
    "tab.unfocusedActiveForeground": foregrounds.primary + "99",
    "tab.unfocusedHoverBackground": backgrounds.tertiary + "B3",
    "tab.unfocusedHoverBorder": accents.lightBlue + "00",
    "tab.unfocusedInactiveForeground": foregrounds.primary + "66",
    
    // Terminal
    "terminal.ansiBlack": backgrounds.tertiary,
    "terminal.ansiBlue": accents.blue,
    "terminal.ansiBrightBlack": selections.medium,
    "terminal.ansiBrightBlue": accents.blue,
    "terminal.ansiBrightCyan": accents.lightBlue,
    "terminal.ansiBrightGreen": status.green,
    "terminal.ansiBrightMagenta": syntax.terminalMagenta,
    "terminal.ansiBrightRed": status.red,
    "terminal.ansiBrightWhite": foregrounds.primary,
    "terminal.ansiBrightYellow": status.yellow,
    "terminal.ansiCyan": accents.lightBlue,
    "terminal.ansiGreen": status.green,
    "terminal.ansiMagenta": syntax.terminalMagenta,
    "terminal.ansiRed": status.red,
    "terminal.ansiWhite": foregrounds.primary,
    "terminal.ansiYellow": status.yellow,
    "terminal.background": backgrounds.primary,
    "terminal.foreground": foregrounds.primary + "cc",
    "terminal.selectionBackground": "#636262dd",
    "terminalCursor.background": foregrounds.primary + "22",
    "terminalCursor.foreground": foregrounds.primary,
    
    // Text
    "textLink.activeForeground": accents.blue,
    "textLink.foreground": accents.blue,
    "textPreformat.foreground": accents.lightBlue,
    "textSeparator.foreground": accents.lightBlue,
    
    // Title Bar
    "titleBar.activeBackground": backgrounds.primary,
    "titleBar.activeForeground": foregrounds.statusBar,
    "titleBar.border": borders.subtle,
    "titleBar.inactiveBackground": backgrounds.primary,
    "titleBar.inactiveForeground": foregrounds.inactive,
    
    // Tree
    "tree.indentGuidesStroke": foregrounds.medium + "55",
    
    // Walk Through
    "walkThrough.embeddedEditorBackground": backgrounds.primary,
    
    // Widget
    "widget.shadow": "#00000066",
    
    // Minimap
    "minimapGutter.addedBackground": syntax.addedHighlight,
    "minimapGutter.modifiedBackground": "#e5b95c",
    "minimapGutter.deletedBackground": syntax.errorHighlight,
    "minimap.findMatchHighlight": syntax.addedHighlight + "70",
    "minimap.selectionHighlight": "#363636",
    "minimap.errorHighlight": syntax.errorHighlight,
    "minimap.warningHighlight": syntax.warningHighlight,
    "minimap.background": backgrounds.minimap,
  },
  
  semanticHighlighting: true,
  
  semanticTokenColors: {
    "enumMember": { "foreground": foregrounds.syntax },
    "variable.constant": { "foreground": syntax.keywords },
    "variable.defaultLibrary": { "foreground": foregrounds.syntax },
    "variable.defaultLibrary.globalScope": { "foreground": foregrounds.clean },
    "class.typeHint": syntax.builtinTypes,
    "variable.declaration.readonly:cpp": foregrounds.clean,
    "variable.declaration.readonly:c": foregrounds.clean,
    "variable.readonly:cpp": foregrounds.clean,
    "variable.readonly:c": foregrounds.clean,
    "variable.other.property.ts": syntax.properties,
    "variable.other.property": syntax.properties,
    "variable.other": syntax.properties,
    "method.declaration": { "foreground": syntax.functions, "fontStyle": "bold" },
    "meta.definition.property.ts": { "foreground": syntax.properties, "fontStyle": "bold" },
    "entity.name.function": { "foreground": syntax.numbers },
    "function.builtin": syntax.builtinTypes,
    "class.builtin": syntax.builtinTypes,
    "class.declaration:python": accents.brightBlue,
    "support.variable.property": syntax.properties,
    "class.decorator.builtin:python": syntax.decorators,
    "function.declaration": { "foreground": syntax.functions, "fontStyle": "bold" },
    "operatorOverload": foregrounds.clean,
    "memberOperatorOverload": foregrounds.clean,
    "namespace:cpp": accents.brightBlue,
    "variable.global:cpp": syntax.decorators,
    "variable.global:c": syntax.decorators,
    "type:cpp": accents.brightBlue,
    "function": syntax.numbers,
    "function:cpp": { "foreground": "#efefef", "bold": true },
    "class:python": { "foreground": syntax.numbers, "fontStyle": "" },
    "*.decorator:python": { "foreground": syntax.decorators, "fontStyle": "" },
    "method:python": { "foreground": syntax.numbers, "fontStyle": "" },
    "method:cpp": { "foreground": accents.brightBlue, "fontStyle": "" },
    "selfParameter": syntax.selfParam,
    "macro": syntax.decorators,
    "property:cpp": syntax.propertiesAlt,
    "variable:javascript": foregrounds.clean,
    "property.declaration:cpp": syntax.propertiesAlt,
    "property.declaration:c": syntax.propertiesAlt,
    "type:c": accents.brightBlue,
    "function:c": { "foreground": "#efefef", "fontStyle": "bold" },
    "property:c": syntax.propertiesAlt,
    "function:cmake": accents.brightBlue,
    "builtinConstant.readonly.builtin:python": syntax.builtinTypes,
  },
  
  tokenColors
};

// Export the theme template
export default themeTemplate;