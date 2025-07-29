# Plan: Adding @ File Reference Highlighting to Markdown

## Objective
Create custom functionality that detects and highlights @ file paths (like `@package.json`, `@src/components/Button.tsx`) in markdown without requiring backtick wrapping.

## Implementation Plan

### 1. Create Custom TextMate Grammar Injection for @ File Paths
- Create a new TextMate grammar file that defines patterns for @ file references
- Pattern should match: `@` followed by valid file paths (with extensions, directories, etc.)
- Define custom scopes like `entity.name.reference.file.markdown` and `punctuation.definition.reference.at.markdown`

### 2. Add Syntax Injection to package.json  
- Register the custom grammar injection in the VS Code extension manifest
- Configure it to inject into markdown files
- Ensure it targets the right markdown scopes without conflicting with existing syntax

### 3. Update Token Colors with New Custom Scopes
- Add highlighting rules for the new custom scopes in `src/token-colors.js`
- Style the `@` symbol distinctly (e.g., light blue, bold)
- Style the file path portion differently (e.g., light purple, italic)

### 4. Build and Test the New Functionality
- Build the theme with the new grammar injection
- Test in Extension Development Host
- Verify @ file references are properly highlighted without backticks

## Technical Details

### Grammar Pattern Structure
```json
{
  "match": "(@)([\\w\\/\\.\\-]+\\.[a-zA-Z]+)",
  "captures": {
    "1": { "name": "punctuation.definition.reference.at.markdown" },
    "2": { "name": "entity.name.reference.file.markdown" }
  }
}
```

### Expected Result
- `@package.json` → `@` in light blue, `package.json` in light purple
- `@src/components/Button.tsx` → `@` in light blue, `src/components/Button.tsx` in light purple
- Works without any backtick wrapping or special markdown syntax