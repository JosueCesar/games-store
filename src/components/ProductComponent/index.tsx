import React from 'react';
import transformValueInBRL from '../../utils/transformValueInBRL';
import { ProductProps } from '../../hooks/products';

import { IoCartOutline  } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';

import { Container } from './styles';
import theme from '../../styles/theme';
import { useCart } from '../../hooks/cart';

const ProductComponent: React.FC<{data: ProductProps}> = ({ data }) => {
  const { addToCart } = useCart();

  return (
    <Container>
      <img src={`http://localhost:3000/images/${data.image}`} alt={data.image} />

      <div className="productInfoContainer">
        <span className="productTitle">{data.name} </span>
        <div>
          <span className="productPrice" style={{ display: 'flex', alignItems: 'center' }}>
            {`${transformValueInBRL(data.price)} - `}
            <AiFillHeart size={20} color={theme.colors.red} style={{ margin: '0 6px' }} />
            {` ${data.score}`}
          </span>
        </div>
      </div>

      <button id="addToCartButton" onClick={() => addToCart(data)}>
        <IoCartOutline size={24} />
        adicionar ao carrinho
      </button>
    </Container>
  );
}

export default ProductComponent;