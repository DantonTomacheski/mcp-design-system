import React from 'react';
import { iconPaths, IconName } from './iconPaths';
import { IconSize, IconColor, iconSizeTokens, iconColorTokens } from '../tokens/iconTokens';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /**
   * Name of the icon to display
   */
  name: IconName;
  
  /**
   * Size of the icon, following Figma specifications
   * @default 24
   */
  size?: IconSize | number;
  
  /**
   * Color of the icon - can be a token name or any CSS color value
   * @default "primary"
   */
  color?: IconColor | string;
  
  /**
   * Optional CSS class name
   */
  className?: string;
  
  /**
   * Optional custom stroke width override
   * By default, stroke width is determined by the size
   */
  strokeWidth?: string;
  
  /**
   * Optional ID attribute
   */
  id?: string;
  
  /**
   * Optional title for accessibility
   */
  title?: string;
  
  /**
   * Optional description for accessibility
   */
  description?: string;
}

/**
 * Icon component that renders SVG icons based on Figma design specifications
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'primary',
  className = '',
  strokeWidth,
  id,
  title,
  description,
  ...restProps
}) => {
  if (!iconPaths[name]) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  // Get the path data and viewBox
  const { path, viewBox } = iconPaths[name];
  
  // Determine the final size - ensure it's a number
  const sizeNumber = typeof size === 'number' ? size : parseInt(String(size), 10);
  
  // Get the appropriate stroke width based on the size if not explicitly provided
  const finalStrokeWidth = strokeWidth || 
    (iconSizeTokens[sizeNumber as IconSize]?.strokeWidth || 
    // Fallback to a proportional stroke width if the size doesn't match a token
    `${Math.max(1, sizeNumber / 12)}px`);
  
  // Determine the final color - check if it's a known token or use directly
  const finalColor = Object.prototype.hasOwnProperty.call(iconColorTokens, color) 
    ? iconColorTokens[color as IconColor] 
    : color;
  
  // Prepare the SVG style
  const svgStyle = {
    width: `${sizeNumber}px`,
    height: `${sizeNumber}px`,
    ...restProps.style
  };
  
  // Prepare the path style
  const pathStyle: React.CSSProperties = {
    stroke: finalColor,
    strokeWidth: finalStrokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none'
  };
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      style={svgStyle}
      className={`icon ${className}`}
      aria-hidden={!title && !description ? 'true' : 'false'}
      role={title || description ? 'img' : undefined}
      id={id}
      data-testid={`icon-${name}`}
      {...restProps}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      <path
        d={path}
        style={pathStyle}
      />
    </svg>
  );
};

export default Icon;
