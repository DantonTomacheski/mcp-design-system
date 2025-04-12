# MCP Design System

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DantonTomacheski/mcp-design-system/blob/master/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/DantonTomacheski/mcp-design-system.svg)](https://github.com/DantonTomacheski/mcp-design-system/stargazers)

A modern, React-based icon design system integrated with Storybook for component documentation and Figma for design consistency. This system provides a comprehensive library of icons following atomic design principles.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Design Principles](#design-principles)
6. [Storybook Integration](#storybook-integration)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The MCP Design System is a collection of reusable icon components designed for consistent UI development. Built with React 19 and TypeScript, it offers a scalable solution for implementing icons across your applications.

## Features

- **Comprehensive Icon Library**: A wide range of SVG icons for various use cases
- **TypeScript Support**: Full typing for better developer experience
- **Storybook Documentation**: Interactive component explorer with usage examples
- **Figma Integration**: Icons designed and synced with Figma specifications
- **Customizable**: Support for different sizes, colors, and stroke weights
- **Atomic Design**: Organized structure from atoms to complete UI components

## Installation

To install the MCP Design System in your project:

```bash
npm install mcp-design-system
# or
yarn add mcp-design-system
```

For development with Storybook:

```bash
# Clone the repository
git clone https://github.com/DantonTomacheski/mcp-design-system.git
cd mcp-design-system
# Install dependencies
yarn install
# Start Storybook
yarn storybook
```

## Usage

Import and use icons in your React application:

```jsx
import { Icon } from 'mcp-design-system';

function App() {
  return (
    <div>
      <Icon name="activity" size={24} color="#007bff" />
      <Icon name="alert-circle" size={32} />
    </div>
  );
}
```

Check the [Storybook documentation](#storybook-integration) for a full list of available icons and properties.

## Design Principles

Our design system follows core principles that ensure consistency and scalability:

### Atomic Design

Components are organized hierarchically:
- **Atoms**: Individual icons and basic elements
- **Molecules**: Simple combinations like icon with label
- **Organisms**: Complex UI components with multiple icons
- **Templates**: Layout structures
- **Pages**: Specific implementations

### Design Tokens

Single source of truth for visual properties like colors and sizes, documented in Storybook.

### Figma Integration

Icons follow precise specifications from Figma designs:
- Size variants from 16px to 48px
- Stroke weights matching size for visual balance
- Consistent design language across all icons

## Storybook Integration

Storybook serves as our component development environment and documentation tool. It provides:

- **Visual Catalog**: Browse all available icons
- **Interactive Documentation**: See usage examples and properties
- **Testing Environment**: Test icon variants and customizations
- **Development Sandbox**: Experiment with new icon features

To run Storybook locally:

```bash
yarn storybook
```

Organized with a logical hierarchy under 'Design System' and 'Icons', our Storybook uses MDX for rich documentation combining Markdown and JSX. Check the [STORYBOOK_GUIDE.md](STORYBOOK_GUIDE.md) for detailed information on writing stories and documentation.

## Contributing

We welcome contributions to the MCP Design System. To contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive messages
4. Push your changes to your fork
5. Create a pull request with a detailed description of your changes

Please ensure your code follows our design principles and includes appropriate Storybook documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
