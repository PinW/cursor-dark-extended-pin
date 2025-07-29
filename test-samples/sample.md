# H1 Heading - Main Title
This is the main title of the document. It should be highly visible and distinct.

## H2 Heading - Section Title
This is a section title. It should be prominent but slightly less than H1.

### H3 Heading - Subsection
This is a subsection title. Good for organizing content hierarchically.

#### H4 Heading - Minor Section
This is a minor section heading. Should be distinct but not overwhelming.

##### H5 Heading - Small Section
This is a small section heading. Should be readable but subtle.

###### H6 Heading - Smallest Section
This is the smallest heading level. Should be the most subtle.

## Text Formatting

This paragraph demonstrates **bold text** and *italic text* formatting. You can also combine them like ***bold and italic***.

Here's some `inline code` in the middle of a sentence. It should be clearly distinguishable from regular text.

## Code Blocks

```javascript
// This is a JavaScript code block
function greetUser(name) {
    console.log(`Hello, ${name}!`);
    return `Welcome to the theme preview!`;
}

const user = "Developer";
greetUser(user);
```

```python
# This is a Python code block
def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    result = a + b
    print(f"The sum of {a} and {b} is {result}")
    return result

numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
```

## Lists

### Unordered List
- First item in the list
- Second item with **bold text**
- Third item with *italic text*
- Fourth item with `inline code`
  - Nested item one
  - Nested item two
    - Deeply nested item

### Ordered List
1. First numbered item
2. Second numbered item
3. Third numbered item
   1. Nested numbered item
   2. Another nested item
4. Fourth numbered item

## Links and References

Here are some different types of links:
- [Regular link](https://example.com)
- [Link with title](https://example.com "Example Website")
- Reference-style link: [GitHub][github-ref]
- Inline link: <https://example.com>

[github-ref]: https://github.com

## Quotes and Blockquotes

> This is a blockquote. It should be styled differently from regular text to show that it's a quote or citation.

> This is a multi-line blockquote.
> It spans multiple lines and should maintain consistent formatting.
> The styling should make it clear that this is quoted content.

## Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| **Bold** | *Italic* | `Code`   |
| Data A   | Data B   | Data C   |

## Horizontal Rules

---

## Special Characters and Escaping

Here are some special characters: `&amp;`, `&lt;`, `&gt;`, `&quot;`

Escaped characters: \*not italic\*, \`not code\`, \# not a heading

## Mixed Content

This section combines multiple elements:

1. **Bold list item** with [a link](https://example.com)
2. *Italic list item* with `inline code`
3. Regular item with > a quote character

## File References

In Claude, you can use the @ symbol to reference files:
- @package.json to reference the package file
- @src/components/Button.tsx for specific components
- @README.md to reference documentation
- @src/styles/globals.css for stylesheets
- @build/index.js for build outputs
- @docs/api/reference.md for nested documentation
- @my-component.vue for Vue components
- @my_file.ts for TypeScript files with underscores
- @config for directories without extensions
- @src/utils for utility directories

### Edge Cases Testing
- File references should work: @package.json, @src/components/Button.tsx
- Email addresses should NOT be highlighted: user@domain.com, test@example.org
- Social handles like @username will be highlighted (unavoidable, but acceptable)

```bash
# Command line example
cd /path/to/project
npm install
npm run dev
```

> **Note:** This is a blockquote with **bold text** and `inline code` mixed in.