import React, { useState } from 'react';
import '../styles/Header.css';
import BpkAutosuggest from '@skyscanner/backpack-web/bpk-component-autosuggest';
import MenuIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/menu';
import AccountIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/account';
import AlertIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/alert--active';
import UnmuteIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/unmute';
import SearchIcon from '@skyscanner/backpack-web/bpk-component-icon/lg/search';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import { withLargeButtonAlignment } from '@skyscanner/backpack-web/bpk-component-icon';

const AlignedMenuIcon = withLargeButtonAlignment(MenuIcon);
const AlignedAccountIcon = withLargeButtonAlignment(AccountIcon);
const AlignedAlertIcon = withLargeButtonAlignment(AlertIcon);
const AlignedUnmuteIcon = withLargeButtonAlignment(UnmuteIcon);
const AlignedSearchIcon = withLargeButtonAlignment(SearchIcon);

const Header = ({ onMenuClick }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const videoSuggestions = [
    'React', 'Sakshi Bhongle', 'Music', 'Bhari Comedy', 'Gaming', 'Web Development', 'JavaScript', 'Frontend',
  ];

  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.trim().toLowerCase();
    if (inputValueLowerCase.length === 0) return [];
    return videoSuggestions.filter((video) =>
      video.toLowerCase().includes(inputValueLowerCase)
    );
  };

  const inputProps = {
    id: 'search-bar',
    placeholder: 'Search',
    value: value,
    onChange: onChange,
    className: 'header-search-input',
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="header-icon-btn" onClick={onMenuClick} aria-label="Toggle menu">
          <AlignedMenuIcon />
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="header-logo"
        />
      </div>

      <div className="header-center">
        <div className="header-search-wrapper">
          <div style={{ flex: 1 }}>
            <BpkAutosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
              onSuggestionsClearRequested={() => setSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion}
              renderSuggestion={(suggestion) => <div>{suggestion}</div>}
              inputProps={inputProps}
            />
          </div>
          <BpkButton
            secondary
            iconOnly
            className="header-search-btn"
            onClick={() => console.log('Search clicked')}
            aria-label="Search"
          >
            <AlignedSearchIcon />
          </BpkButton>
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-btn mobile-only-search" aria-label="Search">
          <AlignedSearchIcon />
        </button>

        <button className="header-icon-btn" aria-label="Create">
          <AlignedUnmuteIcon />
        </button>
        <button className="header-icon-btn" aria-label="Notifications">
          <AlignedAlertIcon />
        </button>
        <button className="header-icon-btn" aria-label="Account">
          <AlignedAccountIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;