# Plan: Adding @ File Reference Highlighting to Markdown

## Objective
Create custom functionality that detects and highlights @ file paths (like `@package.json`, `@src/components/Button.tsx`) in markdown without requiring backtick wrapping.

## Implementation Plan

### 1. Add Grammar Injection Directly to package.json
- Define the TextMate grammar injection rule directly in package.json under `contributes.grammars`
- Configure injection into `text.html.markdown` scope
- Pattern should match: `@` followed by valid file paths (including directories without extensions)
- Define custom scopes like `entity.name.reference.file.markdown` and `punctuation.definition.reference.at.markdown`

### 2. Update Token Colors with New Custom Scopes
- Add highlighting rules for the new custom scopes in `src/token-colors.js`
- Style the `@` symbol distinctly (e.g., light blue, bold)
- Style the file path portion differently (e.g., light purple, italic)

### 3. Comprehensive Testing Strategy
- Build the theme with the new grammar injection
- Test in Extension Development Host with comprehensive test cases:
  - Files with extensions: `@package.json`, `@README.md`
  - Directories without extensions: `@src/components`, `@build`
  - Paths with hyphens/underscores: `@my-component.js`, `@my_file.ts`
  - Edge cases: paths at line start/end
  - Negative cases to avoid: email addresses `user@domain.com`, Twitter handles `@username`
- Verify no conflicts with existing markdown syntax (code blocks, blockquotes)

## Technical Details

### Improved Grammar Pattern Structure
```json
{
  "match": "(@)([\\w\\d./_-]+)",
  "captures": {
    "1": { "name": "punctuation.definition.reference.at.markdown" },
    "2": { "name": "entity.name.reference.file.markdown" }
  }
}
```

**Pattern Breakdown:**
- `(@)`: Captures the "@" symbol
- `([\\w\\d./_-]+)`: Captures file paths allowing:
  - Word characters (a-z, A-Z, 0-9, _)
  - Dots for extensions
  - Forward slashes for directories
  - Hyphens for kebab-case files
  - More flexible than requiring file extensions

### Expected Result
- `@package.json` → `@` in light blue, `package.json` in light purple
- `@src/components/Button.tsx` → `@` in light blue, `src/components/Button.tsx` in light purple
- `@src/components` → `@` in light blue, `src/components` in light purple (directories)
- Works without any backtick wrapping or special markdown syntax
- Avoids false matches on emails and social handles

### Integration Notes
- Grammar injection targets `text.html.markdown` scope
- New token colors integrate with existing variable-based color system
- Build process automatically includes changes from `src/token-colors.js`