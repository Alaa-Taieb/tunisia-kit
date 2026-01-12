# Vibe Guide

## Visual Language

### Color Palette (for README badges/docs)
- **Primary**: `#DC1F26` - Tunisian flag red, used for branding
- **Secondary**: `#FFFFFF` - Clean white for backgrounds
- **Accent**: `#E70013` - Highlight/interactive elements
- **Text**: `#1F2937` - Dark gray for readability

### Typography
- **Documentation**: System fonts, clean sans-serif
- **Code Examples**: Monospace (Fira Code, JetBrains Mono)

## Brand Voice

### Tone

> Developer-first: Direct, technical, and respectful. We assume the reader is a competent developer who just needs the facts. No fluff, no marketing speak.

### Style Guidelines

- **Do**: 
  - Provide copy-paste ready examples
  - Use TypeScript in all code samples
  - Be concise—every word should earn its place
  - Include realistic Tunisian data in examples
  
- **Don't**: 
  - Over-explain basic concepts
  - Use placeholder data like "12345678"—use realistic formats
  - Add unnecessary dependencies for "convenience"
  - Compromise on bundle size

### Specific Scenarios

- **Error Messages**: Clear, actionable, with the exact issue
  - ✅ `"Invalid CIN: must be exactly 8 digits"`
  - ❌ `"Validation failed"`
  
- **Success Messages**: Simple boolean return, no celebration needed
  - Functions return `true/false`—let the developer decide what to do

- **Documentation**: 
  - Lead with usage examples, not API reference
  - Show the problem first, then the solution
  - Include "Why" section to build trust

## README Structure

1. **One-liner**: What it does
2. **Install**: npm/yarn commands
3. **Quick Examples**: The top 3 use cases
4. **Full API Reference**: Per-module breakdown
5. **Why tunisia-kit?**: Philosophy and trust-building
6. **Contributing**: How to help

## Tunisian Context

- Always support Arabic script where applicable (governorate names)
- Phone examples should use recognizable provider prefixes
- Currency formatting must handle millimes (1 TND = 1000 millimes)
- Bank codes should map to real Tunisian banks
