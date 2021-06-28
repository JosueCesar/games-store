import React from 'react';
import FilterButton from '../../../../components/FilterButton';
import { useProducts } from '../../../../hooks/products';

import { Container } from './styles';

const SideMenu: React.FC = () => {
  const { getProducts, filterProducts, filteredBy } = useProducts();

  return (
    <Container>
      <div id="leftSideMenuContentContainer">

        <div id="leftSideMenuFilters" className="leftSideMenuBlock">
          <div id="leftSideMenuFilterTitleContainer">
            <span id="filterTitle">filtrar por:</span>

            {
              filteredBy !== 'none' &&
              <span id="leftSideMenuClearFilters" onClick={() => getProducts()}>limpar filtros</span>
            }
          </div>
      
          <FilterButton
            isSelected={filteredBy === 'score'}
            onClick={() => filterProducts('score')}
          >Popularidade</FilterButton>

          <FilterButton
            isSelected={filteredBy === 'price'}
            onClick={() => filterProducts('price')}
          >Preço</FilterButton>

          <FilterButton
            isSelected={filteredBy === 'name'}
            onClick={() => filterProducts('name')}
          >Ordem Alfabética</FilterButton>
        </div>
      </div>
    </Container>
  );
}

export default SideMenu;