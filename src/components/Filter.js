import React from 'react';
import '../styles/Filter.css';
import BpkChip, { CHIP_TYPES } from '@skyscanner/backpack-web/bpk-component-chip';

const FilterBar = ({ selectedCategory, onSelect }) => {
  const filters = [
    'All',
    'Gaming',
    'Music',
    'Netflix',
    'BGMI',
    'Cricket',
    'React',
    'Computers',
    'Comedy',
    'Memes',
    'News',
  ];

  return (
    <div className="filter-bar">
      <div className="filter-chips-wrapper">
        {filters.map((category) => (
          <BpkChip
            key={category}
            accessibilityLabel={`Filter by ${category}`}
            selected={selectedCategory === category}
            onClick={() => onSelect(category)}
            type={CHIP_TYPES.primary}
            className="filter-chip"
          >
            {category}
          </BpkChip>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;