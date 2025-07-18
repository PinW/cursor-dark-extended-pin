#!/usr/bin/env node

/**
 * Build Script for Cursor Dark Extended Pin Theme
 * Combines color variables with theme template to generate final JSON
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import theme template
import themeTemplate from './src/theme-template.js';

/**
 * Build the theme JSON file
 */
async function buildTheme() {
  try {
    console.log('🎨 Building Cursor Dark Extended Pin theme...');
    
    // Convert theme template to JSON string with proper formatting
    const themeJson = JSON.stringify(themeTemplate, null, 2);
    
    // Define output path
    const outputPath = path.join(__dirname, 'themes', 'cursor-dark-extended-pin-color-theme.json');
    
    // Ensure themes directory exists
    const themesDir = path.dirname(outputPath);
    if (!fs.existsSync(themesDir)) {
      fs.mkdirSync(themesDir, { recursive: true });
    }
    
    // Write the theme file
    fs.writeFileSync(outputPath, themeJson, 'utf8');
    
    console.log('✅ Theme built successfully!');
    console.log(`📁 Output: ${outputPath}`);
    
    // Show some stats
    const stats = fs.statSync(outputPath);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);
    
    return true;
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

/**
 * Watch mode for development
 */
async function watchTheme() {
  console.log('👀 Watching for changes...');
  
  const srcDir = path.join(__dirname, 'src');
  
  // Build initially
  await buildTheme();
  
  // Watch for changes
  fs.watch(srcDir, { recursive: true }, async (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
      console.log(`🔄 Change detected in ${filename}`);
      
      // Clear module cache to reload changes
      const modulePath = path.join(srcDir, filename);
      if (require.cache[modulePath]) {
        delete require.cache[modulePath];
      }
      
      // Rebuild with a small delay to avoid rapid rebuilds
      setTimeout(async () => {
        try {
          // Re-import the theme template (this is tricky with ES modules)
          console.log('🔄 Rebuilding theme...');
          await buildTheme();
          console.log('✅ Rebuild complete!');
        } catch (error) {
          console.error('❌ Rebuild failed:', error.message);
        }
      }, 100);
    }
  });
  
  console.log('Press Ctrl+C to stop watching');
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--watch') || args.includes('-w')) {
    await watchTheme();
  } else {
    await buildTheme();
  }
}

// Run the script
main().catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});