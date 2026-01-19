import React from 'react';
import BpkChip, { CHIP_TYPES } from '@skyscanner/backpack-web/bpk-component-chip';

const FilterBar = ({ selectedCategory, onSelect }) => {
  const filters = [
    'All', 'Gaming', 'Music', 'Netflix', 'BGMI', 'Cricket','React', 'Computers', 'Comedy', 'Memes', 'News'
  ];

  ///const [activeChip, setActiveChip] = useState('All');

  return (
    <div style={{ 
        display: 'flex', 
        gap: '12px', 
        padding: '12px 24px', 
        overflowX: 'auto',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none'
    }}>
      {filters.map((category) => (
        <BpkChip
          key={category}
          accessibilityLabel={`Filter by ${category}`}
          selected={selectedCategory === category}
          onClick={() => onSelect(category)}
          type={CHIP_TYPES.primary}
          style={{ whiteSpace: 'nowrap' }}
        >
          {category}
        </BpkChip>
      ))}
    </div>
  );
};

export default FilterBar;