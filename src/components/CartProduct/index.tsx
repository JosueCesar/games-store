import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import { Container } from './styles';

const CartProduct: React.FC = () => {
  return (
    <Container>
      <div className="cartProductImageContainer">
        <IoMdClose className="cartProductCloseIcon" size={20} />

        <img className="cartProductImage" src="http://localhost:3000/images/the-witcher-iii-wild-hunt.png" alt="the-witcher-iii-wild-hunt.png" />
      </div>

      <div className="cartProductInfoContainer">
        <span id="cartProductGameName" className="cartProductText">the-witcher-iii-wild-hunt</span>

        <div className="cartProductAmountManager">
          <span className="cartProductText">R$ 220.2</span>

          <div className="cartProductButtonsContainer">
            <div className="cartProductButton border-left">
              <AiOutlineMinus style={{ flex: 1 }} />
            </div>

            <div className="cartProductAmount">
              <span className="cartProductAmountText">2</span>
            </div>

            <div className="cartProductButton border-right">
              <AiOutlinePlus style={{ flex: 1 }} />
            </div>
          </div>

          <span className="cartProductText">R$ 440.4</span>
        </div>
      </div>

    </Container>
  );
}

export default CartProduct;