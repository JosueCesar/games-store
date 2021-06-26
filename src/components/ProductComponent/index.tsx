import React from 'react';
import transformValueInBRL from '../../utils/transformValueInBRL';

import { AiOutlineHeart  } from 'react-icons/ai';
import { IoCartOutline  } from 'react-icons/io5';
import theme from '../../styles/theme';

import { Container } from './styles';

export interface ProductComponentProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

const ProductComponent: React.FC<{data: ProductComponentProps}> = ({ data }) => {
  return (
    <Container>
      <div className="productIconsContainer">
        <IoCartOutline size={32} style={{ marginRight: 16 }} color={theme.colors.grey} />
        <AiOutlineHeart size={30} color={theme.colors.grey} />
      </div>

      <img src={`http://localhost:3000/images/${data.image}`} alt={data.image} />

      <div className="productInfoContainer">
        <span className="productTitle">{data.name} </span>
        <span className="productPrice">{transformValueInBRL(data.price)}</span>
      </div>
    </Container>
  );
}

export default ProductComponent;