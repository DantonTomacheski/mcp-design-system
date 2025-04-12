import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/icons/Icon';
import { iconPaths, IconName } from '../components/icons/iconPaths';
import { IconColor, iconSizeTokens, iconColorTokens } from '../components/tokens/iconTokens';

// Following Atomic Design principles - icons are atoms in our design system
const meta = {
  title: 'Design System/Atoms/Icons/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Icon component that follows the Figma design system specifications. Each icon is a single SVG path with specified stroke widths according to the design system.'
      }
    },
  },
  // Define argTypes for the controls panel
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconPaths),
      description: 'Name of the icon from our design system'
    },
    size: {
      control: { type: 'radio' }, 
      options: [16, 20, 24, 32, 40, 48], // Sizes from Figma design system
      description: 'Size in pixels, following Figma specifications'
    },
    color: {
      control: { type: 'select' },
      options: Object.keys(iconColorTokens),
      description: 'Color of the icon - tokens from our design system'
    },
    strokeWidth: {
      control: 'text',
      description: 'SVG stroke width, automatically calculated based on size'
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name'
    }
  },
  // We're using a custom MDX file for documentation instead of autodocs
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

// Default story with standard size (24px)
export const Default: Story = {
  args: {
    name: 'activity',
    size: 24,
    color: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard size (24px) with 2.5px stroke weight as specified in Figma'
      }
    }
  }
};

// Showcase all size variants from Figma
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {Object.entries(iconSizeTokens).map(([size, { strokeWidth }]) => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Icon
            name="activity"
            size={Number(size)}
            strokeWidth={strokeWidth}
          />
          <div style={{ fontSize: '12px', marginTop: '4px' }}>
            {size}px (stroke: {strokeWidth})
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All icon sizes from our Figma design system with their corresponding stroke weights.'
      }
    }
  }
};

// Showcase all available icons at the standard size
export const AllIcons: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
      gap: '20px' 
    }}>
      {Object.keys(iconPaths).map((iconName) => (
        <div key={iconName} style={{ textAlign: 'center' }}>
          <Icon
            name={iconName as IconName}
            size={24}
          />
          <div style={{ fontSize: '12px', marginTop: '4px' }}>
            {iconName}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available icons in our design system at the standard 24px size.'
      }
    }
  }
};

// Showcase color variants
export const ColorVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
      gap: '20px' 
    }}>
      {Object.entries(iconColorTokens).map(([colorName, colorValue]) => (
        <div key={colorName} style={{ textAlign: 'center' }}>
          <Icon
            name="star"
            size={24}
            color={colorName as IconColor}
          />
          <div style={{ fontSize: '12px', marginTop: '4px', color: colorValue }}>
            {colorName}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons with different color tokens from our design system.'
      }
    }
  }
};

// Examples showing composability
export const Composability: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon name="search" size={20} />
        <input type="text" placeholder="Search..." style={{ padding: '8px' }} />
      </div>
      
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#0074D9',
        color: 'white',
        cursor: 'pointer'
      }}>
        <Icon name="settings" size={16} color="white" />
        <span>Settings</span>
      </button>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '8px 16px',
        border: '1px solid #DDD',
        borderRadius: '4px',
      }}>
        <Icon name="alert-circle" size={24} color="warning" />
        <div>
          <strong>Warning</strong>
          <p style={{ margin: 0 }}>This is an alert message with an icon</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of icons composed with other elements like inputs, buttons, and alerts.'
      }
    }
  }
};

// Specific size variants from Figma
export const Small: Story = {
  args: {
    name: 'activity',
    size: 16,
    color: 'primary'
  }
};

export const Medium: Story = {
  args: {
    name: 'activity',
    size: 24,
    color: 'primary'
  }
};

export const Large: Story = {
  args: {
    name: 'activity',
    size: 48,
    color: 'primary'
  }
};
