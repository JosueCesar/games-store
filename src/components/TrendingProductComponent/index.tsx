import React from 'react';
import transformValueInBRL from '../../utils/transformValueInBRL';
import { ProductComponentProps } from '../ProductComponent';

import { Container } from './styles';

const TrendingProductComponent: React.FC<{ data: ProductComponentProps }> = ({ data }) => {
  return (
    <Container>
      <img src={`http://localhost:3000/images/${data.image}`} alt={data.image} />
      
      <div className="trendingProductInfoContainer">
        <span id="trendingProductTitle">{`${data.name.length > 50 ? data.name.trim().substring(0, 50) + '...' : data.name}`}</span>
        <span>{transformValueInBRL(data.price)}</span>
      </div>
    </Container>
  );
}

export default TrendingProductComponent;