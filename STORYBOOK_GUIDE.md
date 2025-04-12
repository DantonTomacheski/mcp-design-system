# Storybook Guide for Icons Design System

This guide explains how to effectively use Storybook 8.6 with the Icons Design System project.

## Table of Contents
1. [Introduction](#introduction)
2. [Design Principles](#design-principles)
   - [Atomic Design](#atomic-design)
   - [Design Tokens](#design-tokens)
   - [Implementing Figma Icon Designs](#implementing-figma-icon-designs)
   - [Composability](#composability)
3. [Writing Stories](#writing-stories)
   - [Basic Structure](#basic-structure)
   - [Component Story Format (CSF)](#component-story-format-csf)
   - [TypeScript Integration](#typescript-integration)
4. [Configuring Stories](#configuring-stories)
   - [Args](#args)
   - [Parameters](#parameters)
   - [Decorators](#decorators)
   - [Play Functions](#play-functions)
   - [Loaders](#loaders)
5. [Organizing Stories](#organizing-stories)
   - [Naming and Hierarchy](#naming-and-hierarchy)
   - [Tags](#tags)
6. [Writing Documentation](#writing-documentation)
   - [MDX Integration](#mdx-integration)
   - [Controls and Doc Blocks](#controls-and-doc-blocks)
7. [Advanced Techniques](#advanced-techniques)

## Introduction

Storybook serves as our component development environment and documentation tool. For the Icons Design System, it provides:

- A visual catalog of all icons
- Interactive documentation for icon usage
- Testing of icon variants and customizations
- A development sandbox for new icon features

## Design Principles

Our Icons Design System follows these core design principles, which should be reflected in our Storybook implementation:

### Atomic Design

The Atomic Design methodology organizes components in a hierarchical structure that aligns perfectly with Storybook's organization:

1. **Atoms** - Basic building blocks (individual icons, colors, typography)
   ```typescript
   // Example: Basic icon atom
   const meta = {
     title: 'Design System/Atoms/Icons/ArrowIcon',
     component: ArrowIcon,
   } satisfies Meta<typeof ArrowIcon>;
   ```

2. **Molecules** - Simple combinations of atoms (icon + label, button with icon)
   ```typescript
   // Example: Icon with label molecule
   const meta = {
     title: 'Design System/Molecules/IconLabel',
     component: IconLabel,
   } satisfies Meta<typeof IconLabel>;
   ```

3. **Organisms** - Complex UI components (icon group, action bar with icons)
   ```typescript
   // Example: Icon group organism
   const meta = {
     title: 'Design System/Organisms/IconGroup',
     component: IconGroup,
   } satisfies Meta<typeof IconGroup>;
   ```

4. **Templates** - Page layouts with placeholders
   ```typescript
   // Example: Dashboard template with icon areas
   const meta = {
     title: 'Design System/Templates/Dashboard',
     component: DashboardTemplate,
   } satisfies Meta<typeof DashboardTemplate>;
   ```

5. **Pages** - Specific instances of templates
   ```typescript
   // Example: Admin dashboard with specific icons
   const meta = {
     title: 'Design System/Pages/AdminDashboard',
     component: AdminDashboard,
   } satisfies Meta<typeof AdminDashboard>;
   ```

**Implementation in Storybook:**
- Organize stories in folders matching the Atomic Design hierarchy
- Use the `title` property to reflect the hierarchy in the sidebar
- Create story examples showing how components connect between levels

```typescript
// .storybook/preview.js - Sort by Atomic Design principles
export const parameters = {
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design System', [
          'Atoms', ['Icons', 'Typography', 'Colors'],
          'Molecules',
          'Organisms',
          'Templates',
          'Pages'
        ]
      ],
    },
  },
};
```

### Design Tokens

Design tokens are the single source of truth for your design system's visual properties. In Storybook, we showcase and document these tokens:

```typescript
// Example: Color tokens story
const meta = {
  title: 'Design System/Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color tokens used throughout the design system',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Display all color tokens
export const ColorPalette: Story = {
  render: () => (
    <TokenGrid>
      {Object.entries(colorTokens).map(([name, value]) => (
        <TokenSwatch 
          key={name} 
          name={name} 
          value={value} 
          cssVariable={`--color-${name}`} 
        />
      ))}
    </TokenGrid>
  ),
};
```

**Using tokens in your stories:**

```typescript
// In your icon stories
export const WithTokenColors: Story = {
  render: () => (
    <TokenDemos>
      {Object.entries(colorTokens).map(([name, value]) => (
        <Icon 
          key={name}
          name="star" 
          color={`var(--color-${name})`} 
          label={`Token: ${name}`} 
        />
      ))}
    </TokenDemos>
  ),
};
```

**Documentation with MDX:**

```jsx
// DesignTokens.mdx
import { Meta, ColorPalette, ColorItem } from '@storybook/blocks';
import { colorTokens, spacingTokens, typographyTokens } from '../tokens';

<Meta title="Design System/Tokens/Documentation" />

# Design Tokens

Design tokens are the visual design atoms of our design system.

## Color Tokens

<ColorPalette>
  {Object.entries(colorTokens).map(([name, value]) => (
    <ColorItem 
      key={name}
      title={name} 
      subtitle={`var(--color-${name})`}
      colors={{ [name]: value }} 
    />
  ))}
</ColorPalette>
```

### Implementing Figma Icon Designs

Our icon design system is based on the Figma design specifications. Following these specifications in Storybook ensures consistency between design and implementation:

**Icon Size Variants and Stroke Weights:**

```typescript
// Define size tokens that match Figma specifications
const sizeTokens = {
  16: { size: '16px', strokeWidth: '1.6px' },
  20: { size: '20px', strokeWidth: '2px' },
  24: { size: '24px', strokeWidth: '2.5px' },
  32: { size: '32px', strokeWidth: '3px' },
  40: { size: '40px', strokeWidth: '3.5px' },
  48: { size: '48px', strokeWidth: '4px' }
};

// Demonstrate all sizes from Figma in a story
export const AllSizes: Story = {
  render: () => (
    <IconGrid>
      {Object.entries(sizeTokens).map(([size, { size: sizeValue, strokeWidth }]) => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Icon
            name="activity"
            size={Number(size)}
            style={{ strokeWidth }}
          />
          <div style={{ fontSize: '12px', marginTop: '4px' }}>
            {sizeValue} (stroke: {strokeWidth})
          </div>
        </div>
      ))}
    </IconGrid>
  ),
};
```

**Documentation with Figma References:**

```jsx
// IconSpecs.mdx
import { Meta, Story, Canvas } from '@storybook/blocks';
import * as IconStories from './Icon.stories';

<Meta title="Design System/Guidelines/Icon Specifications" />

# Icon Specifications from Figma

Our icons follow precise sizing and stroke weight guidelines from our Figma design system:

| Size (px) | Stroke Weight | Use Case |
|-----------|---------------|----------|
| 16        | 1.6px         | Dense UIs, table actions |
| 20        | 2.0px         | Small UI elements |
| 24        | 2.5px         | Standard UI size |
| 32        | 3.0px         | Featured UI elements |
| 40        | 3.5px         | Highlighted features |
| 48        | 4.0px         | Hero sections, intros |

## Visual Reference

<Canvas of={IconStories.AllSizes} />

## Implementation Notes

When implementing icons, ensure:

1. SVG icons maintain consistent padding within their viewBox
2. Proper scaling is applied when changing sizes
3. Stroke weights are adjusted proportionally
4. Color tokens are applied consistently
```

### Composability

Composability allows small, focused components to be combined into more complex interfaces. Storybook can demonstrate this principle effectively:

```typescript
// Base icon component
export const BaseIcon: Story = {
  args: {
    name: 'star',
    size: 24,
  },
};

// Composing with other components
export const IconButton: Story = {
  render: (args) => (
    <Button>
      <Icon {...args} />
      <span>Icon Button</span>
    </Button>
  ),
};

// Showcasing composition patterns
export const CompositionExamples: Story = {
  render: () => (
    <div>
      <h3>Icon in different contexts</h3>
      <IconGrid>
        <Icon name="star" /> {/* Standalone */}
        <Tooltip content="Favorite"><Icon name="star" /></Tooltip> {/* With tooltip */}
        <Badge count={5}><Icon name="star" /></Badge> {/* With badge */}
        <Button><Icon name="star" /> Star</Button> {/* Within button */}
      </IconGrid>
    </div>
  ),
};
```

**Document composition patterns with MDX:**

```jsx
// Composition.mdx
import { Meta, Canvas, Story } from '@storybook/blocks';
import * as IconStories from './Icon.stories';
import * as CompositionStories from './Composition.stories';

<Meta title="Design System/Guides/Composition Patterns" />

# Composition Patterns

Our design system uses composition to create complex interfaces from simple components.

## Basic Composition

<Canvas of={CompositionStories.SimpleComposition} />

## Icon Composition Patterns

These patterns show how the Icon component can be composed with other components:

<Canvas of={CompositionStories.IconCompositions} />
```

## Writing Stories

### Basic Structure

Each icon component should have its own stories file with:

```typescript
// IconName.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { IconName } from './IconName';

const meta = {
  title: 'Design System/Atoms/Icons/IconName',
  component: IconName,
  parameters: {
    // Optional parameters
    docs: {
      description: {
        component: 'Icon component that follows the Figma design system specifications.'
      }
    }
  },
  tags: ['autodocs'], // Generate automatic documentation
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [16, 20, 24, 32, 40, 48], // Sizes from Figma design system
      description: 'Icon size in pixels'
    }
  }
} satisfies Meta<typeof IconName>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {};

// With specific Figma sizes
export const Small: Story = {
  args: {
    size: 16,
  },
};

export const Medium: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    size: 48,
  },
};
```

### Component Story Format (CSF)

We use the Component Story Format (CSF) for all stories:

1. Import your component
2. Define a default export with component metadata
3. Define named exports for each story (component state)

### TypeScript Integration

Strongly-typed stories provide better development experience:

```typescript
// Use the Meta and StoryObj types for proper typing
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

// For components with custom args not in props
type IconPropsAndCustomArgs = React.ComponentProps<typeof Icon> & { 
  customVariant?: 'outlined' | 'filled' 
};

const meta: Meta<IconPropsAndCustomArgs> = {
  component: Icon,
  // Render function to handle custom args
  render: ({ customVariant, ...args }) => (
    <Icon {...args} className={customVariant === 'outlined' ? 'outlined' : ''} />
  ),
};

export default meta;
type Story = StoryObj<IconPropsAndCustomArgs>;
```

## Configuring Stories

### Args

Args define the inputs to your component:

```typescript
export const Primary: Story = {
  args: {
    name: 'arrow-right',
    size: 24, // Default size from Figma design system
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard size (24px) with 2.5px stroke weight as specified in Figma'
      }
    }
  }
};

// Composing args from other stories
export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: 16,
  },
};
```

Args can be defined at:
- Story level (`story.args`) - for specific states
- Component level (`meta.args`) - for common defaults
- Global level (`preview.args`) - for project-wide defaults

### Parameters

Parameters are static metadata for configuring Storybook features:

```typescript
// Story level
export const DarkModeIcon: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: { description: { story: 'Icon optimized for dark backgrounds' } },
  },
};

// Component level
const meta = {
  parameters: {
    controls: { expanded: true },
  },
};
```

### Decorators

Decorators wrap your stories with additional context or styles:

```typescript
// Add spacing around all icons
const meta = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', display: 'inline-block' }}>
        <Story />
      </div>
    ),
  ],
};

// Theme provider for a specific story
export const ThemedIcon: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme="brand">
        <Story />
      </ThemeProvider>
    ),
  ],
};
```

### Play Functions

Play functions automate interactions for testing:

```typescript
export const InteractiveIcon: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Find the icon by test id
    const icon = canvas.getByTestId('interactive-icon');
    
    // Simulate user clicking the icon
    await userEvent.click(icon);
    
    // Verify the icon changed state
    await expect(icon).toHaveClass('clicked');
  },
};
```

### Loaders

Loaders async fetch data before a story renders:

```typescript
export const DynamicIcon: Story = {
  loaders: [
    async () => ({
      iconData: await fetch('/api/icons/metadata').then(r => r.json())
    }),
  ],
  render: (args, { loaded }) => (
    <Icon {...args} metadata={loaded.iconData} />
  ),
};
```

## Organizing Stories

### Naming and Hierarchy

Organize icons in a logical hierarchy:

```typescript
// Group by category
const meta = {
  title: 'Icons/Navigation/ArrowIcon',
  component: ArrowIcon,
};

// Or by function
const meta = {
  title: 'Design System/Icons/Action/ArrowIcon',
  component: ArrowIcon,
};
```

For consistent sorting, configure in `.storybook/preview.js`:

```typescript
export const parameters = {
  options: {
    storySort: {
      order: ['Introduction', 'Design System', ['Icons', 'Typography', 'Colors']],
    },
  },
};
```

### Tags

Use tags to categorize and filter icons:

```typescript
// For stable icons
const meta = {
  tags: ['autodocs', 'stable'],
};

// For experimental icons
export const NewVariant: Story = {
  tags: ['experimental'],
};

// For documentation-only examples
export const DeprecatedUsage: Story = {
  tags: ['autodocs', '!dev'], // Only shows in docs, not sidebar
};
```

## Writing Documentation

### MDX Integration

For rich documentation, create `.mdx` files alongside your stories:

```jsx
// Icons.mdx
import { Meta, Canvas, Controls } from '@storybook/blocks';
import * as IconStories from './Icon.stories';

<Meta of={IconStories} />

# Icon Component

Our Icon component renders SVG icons from our design system.

## Usage

<Canvas of={IconStories.Default} />

## Properties

<Controls />

## Examples

### Sizes

<Canvas of={IconStories.Small} />
<Canvas of={IconStories.Medium} />
<Canvas of={IconStories.Large} />
```

Configure `.storybook/main.js` to include MDX files:

```javascript
module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials'],
};
```

### Controls and Doc Blocks

Use Doc Blocks to enhance documentation:

- `<Meta>` - Connect to stories
- `<Canvas>` - Display a story with its code
- `<Controls>` - Show component props with interactive controls
- `<Source>` - Display source code

## Advanced Techniques

- Use `argTypes` to customize control types:
  ```typescript
  const meta = {
    argTypes: {
      color: { 
        control: 'color',
        description: 'Custom color for the icon' 
      },
      size: {
        control: { type: 'select', options: [16, 20, 24, 32, 40, 48] },
        description: 'Size in pixels, following Figma specifications'
      },
      strokeWidth: {
        control: 'text',
        description: 'SVG stroke width, automatically calculated based on size'
      },
    },
  };
  ```

- Create multiple documentation pages for complex components:
  ```typescript
  // For the main component docs
  const meta = {
    title: 'Icons/Overview',
    tags: ['autodocs'],
  };

  // For usage guidelines 
  // (in a separate IconUsage.mdx file)
  <Meta title="Icons/Usage Guidelines" />
  ```

- Use the `useArgs` hook for interactive stories:
  ```typescript
  export const ToggleableIcon: Story = {
    render: function Render(args) {
      const [{ active }, updateArgs] = useArgs();
      
      const toggle = () => updateArgs({ active: !active });
      
      return <Icon {...args} onClick={toggle} className={active ? 'active' : ''} />;
    },
  };
  ```
