import React, { useState } from 'react';
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

  const inputProps = {
    id: 'search-bar',
    placeholder: 'Search',
    value: value, //what text to show
    onChange: onChange, //what to do when typing
    style: {
        width: '100%',// Fills the space available
        maxWidth: '600px',
        borderTopLeftRadius: '24px', 
      borderBottomLeftRadius: '24px',
      borderTopRightRadius: '0', 
      borderBottomRightRadius: '0'
    }
  };

  const videos = ['React','sakshi bhongle', 'Music', 'bhari comedy', 'Gaming'];

  const getSuggestions = (inputValue) => {
  const inputValueLowerCase = inputValue.trim().toLowerCase();

  if (inputValueLowerCase.length === 0) {
    return [];
  }

  return videos.filter((video) =>
    video.toLowerCase().includes(inputValueLowerCase)
  );
};

  return (
    <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div 
            onClick={onMenuClick} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
            <AlignedMenuIcon />
        </div>
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="YouTube Logo"
            style={{ height: '24px', cursor: 'pointer' }} 
        />
      </div>
      
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
            <BpkAutosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={({ value }) => {
                setSuggestions(getSuggestions(value));
              }}
              onSuggestionsClearRequested={() => setSuggestions([])}
              getSuggestionValue={(suggestion) => suggestion}
              renderSuggestion={(suggestion) => <div>{suggestion}</div>}
              inputProps={inputProps}
            />
      </div>
        <BpkButton
          secondary 
          iconOnly
          onClick={() => console.log('Search clicked')}
          style={{
            borderTopLeftRadius: '0', 
            borderBottomLeftRadius: '0',
            borderTopRightRadius: '24px', 
            borderBottomRightRadius: '24px'
            //borderLeft: 'none', 
            //height: 'auto', 
            //minHeight: '100%', 
            //borderColor: '#ccc',         
          }}
        >
          <AlignedSearchIcon />
        </BpkButton>
        <div style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center' }}>
             <AlignedUnmuteIcon />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <AlignedAccountIcon/>
        <AlignedAlertIcon/>
      </div>


    </div>

  );
};

export default Header;
