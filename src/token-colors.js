/**
 * Token Colors for Cursor Dark Extended Pin Theme
 * TextMate grammar-based syntax highlighting rules
 */

import colors from './colors.js';

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

export const tokenColors = [
  {
    "scope": "string.quoted.binary.single.python",
    "settings": {
      "foreground": syntax.decorators,
      "fontStyle": ""
    }
  },
  {
    "scope": ["constant.language.false.cpp", "constant.language.true.cpp"],
    "settings": {
      "foreground": syntax.builtinTypes,
      "fontStyle": ""
    }
  },
  {
    "name": "unison punctuation",
    "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "keyword control directive",
    "scope": "keyword.control.directive",
    "settings": {
      "foreground": syntax.decorators
    }
  },
  {
    "name": "ellipsis python",
    "scope": "constant.other.ellipsis.python",
    "settings": {
      "foreground": foregrounds.clean,
      "fontStyle": ""
    }
  },
  {
    "name": "haskell variable generic-type",
    "scope": "variable.other.generic-type.haskell",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "<div> < color",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": "#898989",
      "fontStyle": ""
    }
  },
  {
    "name": "haskell storage type",
    "scope": "storage.type.haskell",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "support.variable.magic.python",
    "scope": "support.variable.magic.python",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "punctuation.separator.parameters.python",
    "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "variable.parameter.function.language.special.self.python",
    "scope": "variable.parameter.function.language.special.self.python",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "variable.language.this.cpp",
    "scope": "variable.language.this.cpp",
    "settings": {
      "foreground": syntax.builtinTypes,
      "fontStyle": ""
    }
  },
  {
    "name": "storage.modifier.lifetime.rust",
    "scope": "storage.modifier.lifetime.rust",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "support.function.std.rust",
    "scope": "support.function.std.rust",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "entity.name.lifetime.rust",
    "scope": "entity.name.lifetime.rust",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "variable.other.property",
    "scope": "variable.other.property",
    "settings": {
      "foreground": syntax.properties
    }
  },
  {
    "name": "variable.language.rust",
    "scope": "variable.language.rust",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "support.constant.edge",
    "scope": "support.constant.edge",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "regexp constant character-class",
    "scope": "constant.other.character-class.regexp",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "regexp operator.quantifier",
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "punctuation.definition",
    "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "Text",
    "scope": "variable.parameter.function",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Comment Markup Link",
    "scope": "comment markup.link",
    "settings": {
      "foreground": syntax.comments
    }
  },
  {
    "name": "markup diff",
    "scope": "markup.changed.diff",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "diff",
    "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "inserted.diff",
    "scope": "markup.inserted.diff",
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "deleted.diff",
    "scope": "markup.deleted.diff",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "c++ function",
    "scope": "meta.function.c,meta.function.cpp",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "c++ block",
    "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js/ts punctuation separator key-value",
    "scope": "punctuation.separator.key-value",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js/ts import keyword",
    "scope": "keyword.operator.expression.import",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "math js/ts",
    "scope": "support.constant.math",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "math property js/ts",
    "scope": "support.constant.property.math",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "js/ts variable.other.constant",
    "scope": "variable.other.constant",
    "settings": {
      "foreground": syntax.properties
    }
  },
  {
    "name": "java type",
    "scope": ["storage.type.annotation.java", "storage.type.object.array.java"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "java source",
    "scope": "source.java",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "java modifier.import",
    "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "java modifier.import",
    "scope": "meta.method.java",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "java modifier.import",
    "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "java instanceof",
    "scope": "keyword.operator.instanceof.java",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "java variable.name",
    "scope": "meta.definition.variable.name.java",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "operator logical",
    "scope": "keyword.operator.logical",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "operator bitwise",
    "scope": "keyword.operator.bitwise",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "operator channel",
    "scope": "keyword.operator.channel",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "CSS/SCSS/LESS Operators",
    "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "css color standard name",
    "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "css comma",
    "scope": "punctuation.separator.list.comma.css",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "css attribute-name.id",
    "scope": "support.constant.color.w3c-standard-color-name.css",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "js/ts module",
    "scope": "support.module.node,support.type.object.module,support.module.node",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "entity.name.type.module",
    "scope": "entity.name.type.module",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "js variable readwrite",
    "scope": ",meta.object-literal.key,support.variable.object.process,support.variable.object.node",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "variable.other.readwrite",
    "scope": "variable.other.readwrite",
    "settings": {
      "foreground": syntax.variableReadwrite
    }
  },
  {
    "name": "support.variable.property",
    "scope": "support.variable.property",
    "settings": {
      "foreground": syntax.properties
    }
  },
  {
    "name": "js/ts json",
    "scope": "support.constant.json",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "js/ts Keyword",
    "scope": ["keyword.operator.expression.instanceof", "keyword.operator.new", "keyword.operator.ternary", "keyword.operator.optional", "keyword.operator.expression.keyof"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "js/ts console",
    "scope": "support.type.object.console",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js/ts support.variable.property.process",
    "scope": "support.variable.property.process",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "js console function",
    "scope": "entity.name.function.js,support.function.console.js",
    "settings": {
      "foreground": syntax.numbers
    }
  },
  {
    "name": "keyword.operator.misc.rust",
    "scope": "keyword.operator.misc.rust",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "keyword.operator.sigil.rust",
    "scope": "keyword.operator.sigil.rust",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "operator",
    "scope": "keyword.operator.delete",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "js dom",
    "scope": "support.type.object.dom",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js dom variable",
    "scope": "support.variable.dom,support.variable.property.dom",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "keyword.operator",
    "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "C operator assignment",
    "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Punctuation",
    "scope": "punctuation.separator.delimiter",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Other punctuation .c",
    "scope": "punctuation.separator.c,punctuation.separator.cpp",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "C type posix-reserved",
    "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "keyword.operator.sizeof.c",
    "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "python parameter",
    "scope": "variable.parameter.function.language.python",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "python type",
    "scope": "support.type.python",
    "settings": {
      "foreground": syntax.builtinTypes
    }
  },
  {
    "name": "python logical",
    "scope": "keyword.operator.logical.python",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "pyCs",
    "scope": "variable.parameter.function.python",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "python block",
    "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "python function-call.generic",
    "scope": "meta.function-call.generic.python",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "python placeholder reset to  string",
    "scope": "constant.character.format.placeholder.other.python",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "Operators",
    "scope": "keyword.operator",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Compound Assignment Operators",
    "scope": "keyword.operator.assignment.compound",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Compound Assignment Operators js/ts",
    "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Keywords",
    "scope": "keyword",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Namespaces",
    "scope": "entity.name.namespace",
    "settings": {
      "foreground": foregrounds.clean
    }
  },
  {
    "name": "Variables",
    "scope": "variable",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Variables",
    "scope": "variable.c",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Language variables",
    "scope": "variable.language",
    "settings": {
      "foreground": syntax.languageVars
    }
  },
  {
    "name": "Java Variables",
    "scope": "token.variable.parameter.java",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Java Imports",
    "scope": "import.storage.java",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Packages",
    "scope": "token.package.keyword",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Packages",
    "scope": "token.package",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Functions",
    "scope": ["entity.name.function", "meta.require", "support.function", "variable.function"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Classes",
    "scope": "entity.name.type.namespace",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Classes",
    "scope": "support.class, entity.name.type.class",
    "settings": {
      "foreground": accents.brightBlue
    }
  },
  {
    "name": "Class name",
    "scope": "entity.name.class.identifier.namespace.type",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Class name",
    "scope": ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Class name php",
    "scope": "variable.other.class.php",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Type Name",
    "scope": "entity.name.type",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Keyword Control",
    "scope": "keyword.control.directive.include.cpp",
    "settings": {
      "foreground": syntax.decorators
    }
  },
  {
    "name": "Control Elements",
    "scope": "control.elements, keyword.operator.less",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "Methods",
    "scope": "keyword.other.special-method",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "Storage",
    "scope": "storage",
    "settings": {
      "foreground": syntax.builtinTypes
    }
  },
  {
    "scope": ["storage.modifier.reference", "storage.modifier.pointer"],
    "settings": {
      "foreground": foregrounds.clean,
      "fontStyle": ""
    }
  },
  {
    "name": "Storage JS TS",
    "scope": "token.storage",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
    "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Java Storage",
    "scope": "token.storage.type.java",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Support",
    "scope": "support.function",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "css key",
    "scope": "meta.property-name.css",
    "settings": {
      "foreground": accents.brightBlue,
      "fontStyle": ""
    }
  },
  {
    "name": "Meta tag",
    "scope": "meta.tag",
    "settings": {
      "foreground": syntax.metaTags
    }
  },
  {
    "name": "Strings",
    "scope": "string",
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "Inherited Class",
    "scope": "entity.other.inherited-class",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Constant other symbol",
    "scope": "constant.other.symbol",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Integers",
    "scope": "constant.numeric",
    "settings": {
      "foreground": syntax.numbers
    }
  },
  {
    "name": "css constant",
    "scope": "constant.other.color",
    "settings": {
      "foreground": syntax.numbers
    }
  },
  {
    "name": "Constants",
    "scope": "punctuation.definition.constant",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "Vue tag",
    "scope": ["entity.name.tag.template", "entity.name.tag.script", "entity.name.tag.style"],
    "settings": {
      "foreground": syntax.propertiesAlt
    }
  },
  {
    "name": "html tag",
    "scope": ["entity.name.tag.html"],
    "settings": {
      "foreground": accents.brightBlue
    }
  },
  {
    "name": "css property value",
    "scope": "meta.property-value.css",
    "settings": {
      "foreground": syntax.strings,
      "fontStyle": ""
    }
  },
  {
    "name": "Attributes",
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "Attribute IDs",
    "scope": "entity.other.attribute-name.id",
    "settings": {
      "fontStyle": "",
      "foreground": syntax.methods
    }
  },
  {
    "name": "Attribute class",
    "scope": "entity.other.attribute-name.class.css",
    "settings": {
      "fontStyle": "",
      "foreground": syntax.constants
    }
  },
  {
    "name": "Selector",
    "scope": "meta.selector",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Headings",
    "scope": "markup.heading",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Headings",
    "scope": "markup.heading punctuation.definition.heading, entity.name.section",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "Units",
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": syntax.numbers
    }
  },
  {
    "name": "Bold",
    "scope": "markup.bold,todo.bold",
    "settings": {
      "foreground": markdown.bold
    }
  },
  {
    "name": "Bold",
    "scope": "punctuation.definition.bold",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "markup Italic",
    "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
    "settings": {
      "foreground": markdown.italic
    }
  },
  {
    "name": "emphasis md",
    "scope": "emphasis md",
    "settings": {
      "foreground": markdown.italic
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown headings",
    "scope": "entity.name.section.markdown",
    "settings": {
      "foreground": status.red,
      "fontStyle": "bold"
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
    "scope": "punctuation.definition.heading.markdown",
    "settings": {
      "foreground": status.red,
      "fontStyle": "bold"
    }
  },
  {
    "name": "punctuation.definition.list.begin.markdown",
    "scope": "punctuation.definition.list.begin.markdown",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown heading setext",
    "scope": "markup.heading.setext",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Markdown H1 Heading",
    "scope": "markup.heading.1.markdown, heading.1.markdown entity.name.section.markdown, heading.1.markdown punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.h1,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown H2 Heading",
    "scope": "markup.heading.2.markdown, heading.2.markdown entity.name.section.markdown, heading.2.markdown punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.h2,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown H3 Heading",
    "scope": "markup.heading.3.markdown, heading.3.markdown entity.name.section.markdown, heading.3.markdown punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.h3,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown H4 Heading",
    "scope": "markup.heading.4.markdown, heading.4.markdown entity.name.section.markdown, heading.4.markdown punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.h4,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown H5 Heading",
    "scope": "markup.heading.5.markdown, heading.5.markdown entity.name.section.markdown, heading.5.markdown punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.h5,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown H6 Heading",
    "scope": "markup.heading.6.markdown, heading.6.markdown entity.name.section.markdown, heading.6.markdown punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.h6,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown Bold",
    "scope": "markup.bold, todo.bold",
    "settings": {
      "foreground": markdown.bold,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown Italic",
    "scope": "markup.italic, punctuation.definition.italic, todo.emphasis, emphasis md",
    "settings": {
      "foreground": markdown.italic
    }
  },
  {
    "name": "Markdown Bold+Italic (Bold Override)",
    "scope": "markup.bold.markdown markup.italic.markdown",
    "settings": {
      "foreground": markdown.bold,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown Bold+Italic Punctuation (Bold Override)",
    "scope": "markup.bold.markdown punctuation.definition.italic.markdown",
    "settings": {
      "foreground": markdown.bold,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown Inline Code",
    "scope": "markup.inline.raw.markdown, markup.inline.raw.string.markdown",
    "settings": {
      "foreground": markdown.inlineCode
    }
  },
  {
    "name": "Markdown Code Background",
    "scope": "markup.fenced_code.block.markdown, markup.raw.block.markdown",
    "settings": {
      "background": markdown.codeBackground
    }
  },
  {
    "name": "Markdown Code Language",
    "scope": "fenced_code.block.language.markdown",
    "settings": {
      "foreground": markdown.codeLanguageLabel
    }
  },
  {
    "name": "Markdown List Markers",
    "scope": "punctuation.definition.list.markdown, beginning.punctuation.definition.list.markdown",
    "settings": {
      "foreground": markdown.listMarkers
    }
  },
  {
    "name": "Markdown Quotes",
    "scope": "markup.quote.markdown",
    "settings": {
      "foreground": markdown.quotes
    }
  },
  {
    "name": "Markdown Muted Punctuation",
    "scope": "punctuation.definition.tag.markdown",
    "settings": {
      "foreground": markdown.mutedPunctuation
    }
  },
  {
    "name": "Markdown Link Text (Display Text)",
    "scope": "string.other.link.description.markdown, string.other.link.title.markdown, meta.link.inline.markdown string.other.link.description.markdown",
    "settings": {
      "foreground": markdown.linkText
    }
  },
  {
    "name": "Markdown Link Brackets",
    "scope": "punctuation.definition.link.description.begin.markdown, punctuation.definition.link.description.end.markdown, punctuation.definition.link.title.begin.markdown, punctuation.definition.link.title.end.markdown, punctuation.definition.link.markdown",
    "settings": {
      "foreground": markdown.linkBrackets
    }
  },
  {
    "name": "Markdown Link URL",
    "scope": "markup.underline.link.markdown, markup.underline.link.image.markdown",
    "settings": {
      "foreground": markdown.linkUrl
    }
  },
  {
    "name": "Markdown Autolink (Inline URL)",
    "scope": "meta.link.inet.markdown markup.underline.link.markdown",
    "settings": {
      "foreground": markdown.linkText
    }
  },
  {
    "name": "Markdown Link Title (Tooltip Text)", 
    "scope": "string.other.link.description.title.markdown",
    "settings": {
      "foreground": markdown.linkTitle
    }
  },
  {
    "name": "Markdown Link Text (Remove Bold Style)",
    "scope": "markup.underline.link.markdown",
    "settings": {
      "foreground": markdown.linkUrl,
      "fontStyle": ""
    }
  },
  {
    "name": "Markdown Reference Link (Remove Bold Style)",
    "scope": "constant.other.reference.link.markdown",
    "settings": {
      "foreground": markdown.linkUrl,
      "fontStyle": ""
    }
  },
  {
    "name": "Markdown Heading Punctuation",
    "scope": "punctuation.definition.heading.markdown",
    "settings": {
      "foreground": markdown.headingPunctuation
    }
  },
  {
    "name": "Markdown Bold Punctuation",
    "scope": "punctuation.definition.bold.markdown",
    "settings": {
      "foreground": markdown.bold
    }
  },
  {
    "name": "Markdown Inline Raw String",
    "scope": "markup.inline.raw.string.markdown",
    "settings": {
      "foreground": markdown.inlineRawString
    }
  },
  {
    "name": "Markdown String Punctuation",
    "scope": ["punctuation.definition.string.begin.markdown", "punctuation.definition.string.end.markdown", "punctuation.definition.metadata.markdown"],
    "settings": {
      "foreground": markdown.stringPunctuation
    }
  },
  {
    "name": "Markdown Metadata Punctuation",
    "scope": "punctuation.definition.metadata.markdown",
    "settings": {
      "foreground": markdown.metadataPunctuation
    }
  },
  {
    "name": "Markdown Setext Heading",
    "scope": "markup.heading.setext",
    "settings": {
      "foreground": markdown.setextHeading
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
    "scope": "markup.inline.raw.markdown",
    "settings": {
      "foreground": markdown.inlineCode
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
    "scope": "markup.inline.raw.string.markdown",
    "settings": {
      "foreground": markdown.inlineCode
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
    "scope": "punctuation.definition.list.markdown",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
    "scope": ["punctuation.definition.string.begin.markdown", "punctuation.definition.string.end.markdown", "punctuation.definition.metadata.markdown"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "beginning.punctuation.definition.list.markdown",
    "scope": ["beginning.punctuation.definition.list.markdown"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
    "scope": "punctuation.definition.metadata.markdown",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Markdown Code Block Punctuation (Triple Backticks)",
    "scope": "punctuation.definition.markdown, markup.fenced_code.block.markdown",
    "settings": {
      "foreground": markdown.codeBlockPunctuation
    }
  },
  {
    "name": "Markdown Horizontal Rule Separator",
    "scope": "meta.separator.markdown",
    "settings": {
      "foreground": markdown.separator
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Link Text Alt",
    "scope": "string.other.link.description.markdown",
    "settings": {
      "foreground": markdown.linkText
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Link URL Alt",
    "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
    "settings": {
      "foreground": markdown.linkUrl
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Link Title Alt",
    "scope": "string.other.link.description.title.markdown",
    "settings": {
      "foreground": markdown.linkTitle
    }
  },
  {
    "name": "Markdown Link Punctuation (Quotes and Parentheses)",
    "scope": "meta.link.inline.markdown punctuation.definition.string.begin.markdown, meta.link.inline.markdown punctuation.definition.string.end.markdown, meta.link.inline.markdown punctuation.definition.metadata.markdown",
    "settings": {
      "foreground": markdown.linkUrl
    }
  },
  {
    "name": "Markdown Reference-style Links",
    "scope": "constant.other.reference.link.markdown, meta.link.reference.markdown",
    "settings": {
      "foreground": markdown.linkUrl
    }
  },
  {
    "name": "Markdown Reference-style Link Definition Punctuation",
    "scope": "punctuation.definition.constant.begin.markdown, punctuation.definition.constant.end.markdown, punctuation.definition.constant.markdown",
    "settings": {
      "foreground": markdown.linkUrl
    }
  },
  {
    "name": "Regular Expressions",
    "scope": "string.regexp",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Escape Characters",
    "scope": "constant.character.escape",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Embedded",
    "scope": "punctuation.section.embedded, variable.interpolation",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Embedded",
    "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "illegal",
    "scope": "invalid.illegal",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "illegal",
    "scope": "invalid.illegal.bad-ampersand.html",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Broken",
    "scope": "invalid.broken",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Deprecated",
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Unimplemented",
    "scope": "invalid.unimplemented",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
    "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
    "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
    "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
    "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "[VSCODE-CUSTOM] JSON Property Name",
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": syntax.builtinTypes
    }
  },
  {
    "name": "laravel blade tag",
    "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "laravel blade @",
    "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "use statement for other classes",
    "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "error suppression",
    "scope": "keyword.operator.error-control.php",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "php instanceof",
    "scope": "keyword.operator.type.php",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "style double quoted array index  begin",
    "scope": "punctuation.section.array.begin.php",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "style double quoted array index  end",
    "scope": "punctuation.section.array.end.php",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "php illegal.non-null-typehinted",
    "scope": "invalid.illegal.non-null-typehinted.php",
    "settings": {
      "foreground": syntax.errors
    }
  },
  {
    "name": "php types",
    "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "php call-function",
    "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "php function-resets",
    "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "support php constants",
    "scope": "support.constant.core.rust",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "support php constants",
    "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "php goto",
    "scope": "entity.name.goto-label.php,support.other.php",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "php logical/bitwise operator",
    "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "php regexp operator",
    "scope": "keyword.operator.regexp.php",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "php comparison",
    "scope": "keyword.operator.comparison.php",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "php heredoc/nowdoc",
    "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "python function decorator @",
    "scope": "meta.function.decorator.python",
    "settings": {
      "foreground": syntax.decorators
    }
  },
  {
    "name": "python function decorator punctuation",
    "settings": {
      "foreground": syntax.decorators,
      "fontStyle": ""
    },
    "scope": "punctuation.definition.decorator.python,entity.name.function.decorator.python"
  },
  {
    "name": "python function support",
    "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "parameter function js/ts",
    "scope": "function.parameter",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "brace function",
    "scope": "function.brace",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "parameter function ruby cs",
    "scope": "function.parameter.ruby, function.parameter.cs",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "constant.language.symbol.ruby",
    "scope": "constant.language.symbol.ruby",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "rgb-value",
    "scope": "rgb-value",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "rgb value",
    "scope": "inline-color-decoration rgb-value",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "rgb value less",
    "scope": "less rgb-value",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "sass selector",
    "scope": "selector.sass",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "ts primitive/builtin types",
    "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    "settings": {
      "foreground": syntax.builtinTypes
    }
  },
  {
    "name": "block scope",
    "scope": "block.scope.end,block.scope.begin",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "cs storage type",
    "scope": "storage.type.cs",
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "cs local variable",
    "scope": "entity.name.variable.local.cs",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": syntax.errors
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "String interpolation",
    "scope": ["punctuation.definition.template-expression.begin", "punctuation.definition.template-expression.end", "punctuation.section.embedded"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": ["meta.template.expression"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Import module JS",
    "scope": ["keyword.operator.module"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "js Flowtype",
    "scope": ["support.type.type.flowtype"],
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "js Flow",
    "scope": ["support.type.primitive"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "js class prop",
    "scope": ["meta.property.object"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js func parameter",
    "scope": ["variable.parameter.function.js"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js template literals begin",
    "scope": ["keyword.other.template.begin"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "js template literals end",
    "scope": ["keyword.other.template.end"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "js template literals variable braces begin",
    "scope": ["keyword.other.substitution.begin"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "js template literals variable braces end",
    "scope": ["keyword.other.substitution.end"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "js operator.assignment",
    "scope": ["keyword.operator.assignment"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "go operator",
    "scope": ["keyword.operator.assignment.go"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "go operator",
    "scope": ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "Go package name",
    "scope": ["entity.name.package.go"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "elm prelude",
    "scope": ["support.type.prelude.elm"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "elm constant",
    "scope": ["support.constant.elm"],
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "template literal",
    "scope": ["punctuation.quasi.element"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "html/pug (jade) escaped characters and entities",
    "scope": ["constant.character.entity"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
    "scope": ["entity.other.attribute-name.pseudo-element", "entity.other.attribute-name.pseudo-class"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Clojure globals",
    "scope": ["entity.global.clojure"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Clojure symbols",
    "scope": ["meta.symbol.clojure"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Clojure constants",
    "scope": ["constant.keyword.clojure"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "CoffeeScript Function Argument",
    "scope": ["meta.arguments.coffee", "variable.parameter.function.coffee"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Ini Default Text",
    "scope": ["source.ini"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "Makefile prerequisities",
    "scope": ["meta.scope.prerequisites.makefile"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Makefile text colour",
    "scope": ["source.makefile"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Groovy import names",
    "scope": ["storage.modifier.import.groovy"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Groovy Methods",
    "scope": ["meta.method.groovy"],
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "Groovy Variables",
    "scope": ["meta.definition.variable.name.groovy"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Groovy Inheritance",
    "scope": ["meta.definition.class.inherited.classes.groovy"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "HLSL Semantic",
    "scope": ["support.variable.semantic.hlsl"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "HLSL Types",
    "scope": ["support.type.texture.hlsl", "support.type.sampler.hlsl", "support.type.object.hlsl", "support.type.object.rw.hlsl", "support.type.fx.hlsl", "support.type.object.hlsl"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "SQL Variables",
    "scope": ["text.variable", "text.bracketed"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "types",
    "scope": ["support.type.swift", "support.type.vb.asp"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "heading 1, keyword",
    "scope": ["entity.name.function.xi"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "heading 2, callable",
    "scope": ["entity.name.class.xi"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "heading 3, property",
    "scope": ["constant.character.character-class.regexp.xi"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "heading 4, type, class, interface",
    "scope": ["constant.regexp.xi"],
    "settings": {
      "foreground": syntax.keywords
    }
  },
  {
    "name": "heading 5, enums, preprocessor, constant, decorator",
    "scope": ["keyword.control.xi"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "heading 6, number",
    "scope": ["invalid.xi"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "string",
    "scope": ["beginning.punctuation.definition.quote.markdown.xi"],
    "settings": {
      "foreground": syntax.strings
    }
  },
  {
    "name": "comments",
    "scope": ["beginning.punctuation.definition.list.markdown.xi"],
    "settings": {
      "foreground": syntax.comments
    }
  },
  {
    "name": "link",
    "scope": ["constant.character.xi"],
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "accent",
    "scope": ["accent.xi"],
    "settings": {
      "foreground": syntax.methods
    }
  },
  {
    "name": "wikiword",
    "scope": ["wikiword.xi"],
    "settings": {
      "foreground": syntax.constants
    }
  },
  {
    "name": "language operators like '+', '-' etc",
    "scope": ["constant.other.color.rgb-value.xi"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "elements to dim",
    "scope": ["punctuation.definition.tag.xi"],
    "settings": {
      "foreground": syntax.comments
    }
  },
  {
    "name": "C++/C#",
    "scope": ["entity.name.label.cs", "entity.name.scope-resolution.function.call", "entity.name.scope-resolution.function.definition"],
    "settings": {
      "foreground": syntax.functions
    }
  },
  {
    "name": "Markdown underscore-style headers",
    "scope": ["entity.name.label.cs", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "meta.brace.square",
    "scope": [" meta.brace.square"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "Comments",
    "scope": "comment, punctuation.definition.comment",
    "settings": {
      "fontStyle": "italic",
      "foreground": syntax.comments
    }
  },
  {
    "name": "[VSCODE-CUSTOM] Markdown Quote",
    "scope": "markup.quote.markdown",
    "settings": {
      "foreground": markdown.quotes
    }
  },
  {
    "name": "punctuation.definition.block.sequence.item.yaml",
    "scope": "punctuation.definition.block.sequence.item.yaml",
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "scope": ["constant.language.symbol.elixir"],
    "settings": {
      "foreground": foregrounds.syntax
    }
  },
  {
    "name": "js/ts italic",
    "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "name": "comment",
    "scope": "comment.line.double-slash,comment.block.documentation",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "name": "Python Keyword Control",
    "scope": "keyword.control.import.python,keyword.control.flow.python",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "name": "markup.italic.markdown",
    "scope": "markup.italic.markdown",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "name": "Markdown File Reference @ Symbol",
    "scope": "punctuation.definition.reference.at.markdown",
    "settings": {
      "foreground": markdown.fileReferenceSymbol,
      "fontStyle": "bold"
    }
  },
  {
    "name": "Markdown File Reference Path",
    "scope": "entity.name.reference.file.markdown",
    "settings": {
      "foreground": markdown.fileReferencePath,
      "fontStyle": "bold"
    }
  }
];

export default tokenColors;