import React, { useState } from 'react';
import FilterButton from '../../../../components/FilterButton';
import SearchBox from '../../../../components/SearchBox';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <Container>
      <div id="leftSideMenuContentContainer">

        <SearchBox
          value={searchInputValue}
          onChange={setSearchInputValue}
          onSubmit={() => console.log(searchInputValue)}
        />

        <div id="leftSideMenuFilters" className="leftSideMenuBlock">
          <span className="leftSideMenuCategoryTitle">filtrar por:</span>
      
          <FilterButton isSelected>Popularidade</FilterButton>
          <FilterButton >Preço</FilterButton>
          <FilterButton >Ordem Alfabética</FilterButton>
        </div>
        
        {/* TODO: validate if has trending products listing here, if no, wont show element */}

        <div id="trending" className="leftSideMenuBlock">
          <span className="leftSideMenuCategoryTitle">Em Alta:</span>

          {/* TODO: show trending products listing here */}

        </div>
      </div>
    </Container>
  );
}

export default SideMenu;