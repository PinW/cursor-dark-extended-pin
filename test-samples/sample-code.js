// Sample JavaScript file for testing theme syntax highlighting
// This file tests various JavaScript constructs and syntax

/**
 * Class representing a theme tester
 */
class ThemeTester {
    constructor(name) {
        this.name = name;
        this.version = "1.0.0";
        this.features = [];
    }

    /**
     * Add a feature to test
     * @param {string} feature - The feature to add
     */
    addFeature(feature) {
        this.features.push(feature);
        console.log(`Added feature: ${feature}`);
    }

    /**
     * Test all features
     */
    async testFeatures() {
        console.log(`Testing ${this.name} theme...`);
        
        for (const feature of this.features) {
            await this.testFeature(feature);
        }
        
        return {
            success: true,
            message: "All features tested successfully"
        };
    }

    /**
     * Test a single feature
     * @param {string} feature - Feature to test
     */
    async testFeature(feature) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`✓ ${feature} - PASSED`);
                resolve();
            }, 100);
        });
    }
}

// Constants and variables
const THEME_NAME = "Cursor Dark Extended Pin";
const DEFAULT_COLORS = {
    primary: "#efb080",
    secondary: "#87c3ff",
    accent: "#aaa0fa",
    success: "#a8cc7c",
    warning: "#f8c762",
    error: "#BF616A"
};

let tester = new ThemeTester(THEME_NAME);

// Array methods and functional programming
const features = [
    "Syntax highlighting",
    "Markdown support",
    "Code blocks",
    "Heading colors",
    "Link styling"
];

features.forEach(feature => tester.addFeature(feature));

// Async/await and promises
async function runTests() {
    try {
        const result = await tester.testFeatures();
        console.log("Test Results:", result);
    } catch (error) {
        console.error("Test failed:", error);
    }
}

// Regular expressions
const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const validateColor = (color) => colorPattern.test(color);

// Object destructuring and spread operator
const { primary, secondary, ...otherColors } = DEFAULT_COLORS;
const extendedColors = { ...DEFAULT_COLORS, info: "#88C0D0" };

// Template literals and string interpolation
const generateReport = (name, version) => `
Theme: ${name}
Version: ${version}
Colors: ${Object.keys(extendedColors).join(", ")}
Status: ${validateColor(primary) ? "Valid" : "Invalid"}
`;

// Arrow functions and array methods
const colorValues = Object.values(DEFAULT_COLORS);
const validColors = colorValues.filter(color => validateColor(color));
const colorNames = Object.keys(DEFAULT_COLORS).map(key => key.toUpperCase());

// Conditional statements and ternary operators
const themeStatus = validColors.length === colorValues.length ? "Ready" : "Needs fixes";
const statusMessage = themeStatus === "Ready" 
    ? "Theme is ready for deployment" 
    : "Theme needs color corrections";

// Switch statement
function getColorCategory(color) {
    switch (color) {
        case "#efb080":
            return "Function/Method";
        case "#87c3ff":
            return "Class/Type";
        case "#aaa0fa":
            return "Attribute/Link";
        case "#a8cc7c":
            return "Decorator/Macro";
        case "#f8c762":
            return "Constant/Parameter";
        default:
            return "Unknown";
    }
}

// Module-like structure
const ThemeUtils = {
    colors: DEFAULT_COLORS,
    
    getContrastRatio(color1, color2) {
        // Simplified contrast calculation
        return Math.abs(parseInt(color1.slice(1), 16) - parseInt(color2.slice(1), 16));
    },
    
    isDarkTheme() {
        return true; // This is a dark theme
    },
    
    exportTheme() {
        return {
            name: THEME_NAME,
            type: "dark",
            colors: this.colors,
            features: features
        };
    }
};

// Error handling
try {
    const report = generateReport(THEME_NAME, "1.0.0");
    console.log(report);
    
    const themeData = ThemeUtils.exportTheme();
    console.log("Theme exported:", themeData);
} catch (error) {
    console.error("Error generating theme:", error.message);
} finally {
    console.log("Theme processing complete");
}

// Run the tests
runTests();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeTester, ThemeUtils, DEFAULT_COLORS };
}