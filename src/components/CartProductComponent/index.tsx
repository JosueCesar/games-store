import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { CartProductProps, useCart } from '../../hooks/cart';
import transformValueInBRL from '../../utils/transformValueInBRL';

import { Container } from './styles';

const CartProductComponent: React.FC<{ data: CartProductProps }> = ({ data }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <Container>
      <div className="cartProductImageContainer">
        <IoMdClose onClick={() => removeFromCart(data.id)} className="cartProductCloseIcon" size={20} />

        <img className="cartProductImage" src={`http://localhost:3000/images/${data.image}`} alt={data.image} />
      </div>

      <div className="cartProductInfoContainer">
        <span id="cartProductGameName" className="cartProductText">{data.name}</span>

        <div className="cartProductAmountManager">
          <span className="cartProductText">{transformValueInBRL(data.price)}</span>

          <div className="cartProductButtonsContainer">
            <div className="cartProductButton border-left" onClick={() => removeFromCart(data.id, 1)}>
              <AiOutlineMinus style={{ flex: 1 }} />
            </div>

            <div className="cartProductAmount">
              <span className="cartProductAmountText">{data.amount}</span>
            </div>

            <div className="cartProductButton border-right" onClick={() => addToCart(data)}>
              <AiOutlinePlus style={{ flex: 1 }} />
            </div>
          </div>

          <span className="cartProductText">{transformValueInBRL(data.price * data.amount)}</span>
        </div>
      </div>

    </Container>
  );
}

export default CartProductComponent;