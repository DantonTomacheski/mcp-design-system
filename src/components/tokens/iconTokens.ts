/**
 * Icon size and stroke weight tokens derived from Figma design system
 * These follow the exact specifications from the Figma design
 */
export const iconSizeTokens = {
  16: { size: '16px', strokeWidth: '1.6px' },
  20: { size: '20px', strokeWidth: '2px' },
  24: { size: '24px', strokeWidth: '2.5px' },
  32: { size: '32px', strokeWidth: '3px' },
  40: { size: '40px', strokeWidth: '3.5px' },
  48: { size: '48px', strokeWidth: '4px' }
};

export type IconSize = keyof typeof iconSizeTokens;

/**
 * Color tokens for icons - can be expanded based on your design system
 */
export const iconColorTokens = {
  primary: '#1E1E1E',
  secondary: '#2C2C2C',
  muted: '#757575',
  accent: '#0074D9',
  success: '#2ECC40',
  warning: '#FF851B',
  error: '#FF4136'
};

export type IconColor = keyof typeof iconColorTokens;
