import React, { useState } from 'react';
import { Icon, IconName, iconPaths, iconSizeTokens, iconColorTokens } from './icons';

// Atomic Design - This is an "Organism" component made up of multiple "Atoms" (icons)
const IconLibrary: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<number>(24);
  const [selectedColor, setSelectedColor] = useState<string>('primary');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter icons based on search query
  const filteredIcons = Object.keys(iconPaths).filter(
    name => name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="icon-library">
      <div className="icon-library-controls">
        <div className="search-container">
          <Icon name="search" size={16} color="muted" />
          <input
            type="text"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="size-selector">
          <label>Size:</label>
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(Number(e.target.value))}
          >
            {Object.keys(iconSizeTokens).map(size => (
              <option key={size} value={size}>{size}px</option>
            ))}
          </select>
        </div>
        
        <div className="color-selector">
          <label>Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {Object.keys(iconColorTokens).map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="icon-grid">
        {filteredIcons.length === 0 ? (
          <div className="no-results">
            <Icon name="alert-circle" size={48} color="muted" />
            <p>No icons found matching "{searchQuery}"</p>
          </div>
        ) : (
          filteredIcons.map(name => (
            <div key={name} className="icon-card">
              <div className="icon-preview">
                <Icon 
                  name={name as IconName} 
                  size={selectedSize} 
                  color={selectedColor}
                />
              </div>
              <div className="icon-name">{name}</div>
            </div>
          ))
        )}
      </div>
      
      <style jsx>{`
        .icon-library {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          padding: 24px;
        }
        
        .icon-library-controls {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        
        .search-container {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #f5f5f5;
          padding: 8px 12px;
          border-radius: 4px;
          flex-grow: 1;
        }
        
        .search-input {
          border: none;
          background: transparent;
          font-size: 14px;
          outline: none;
          width: 100%;
        }
        
        .size-selector,
        .color-selector {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        select {
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ddd;
          background-color: #fff;
        }
        
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 16px;
        }
        
        .icon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          border: 1px solid #eee;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .icon-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-color: #ddd;
        }
        
        .icon-preview {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 64px;
          margin-bottom: 8px;
        }
        
        .icon-name {
          font-size: 12px;
          color: #666;
          text-align: center;
        }
        
        .no-results {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default IconLibrary;
