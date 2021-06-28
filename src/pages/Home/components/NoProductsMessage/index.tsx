import React from 'react';

import Spinner from '../../../../assets/spinner.svg';
import { useProducts } from '../../../../hooks/products';

import { Content } from './styles';

const NoProductsMessage: React.FC = () => {
  const { loading } = useProducts();

  return (
    <>
      <div></div>
      <Content>
        {
          loading ?
            <img alt="loading spinner" src={Spinner} />
          :
            <span>Ops, infelizmente nenhum produto foi encontrado...</span>
        }
      </Content>
      <div></div>
    </>
  );
}

export default NoProductsMessage;