import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { ProductProps } from './products';

export type Filters = 'score' | 'price' | 'name' | 'none';

export interface CartInfoProps {
  shipping: number;
  subTotal: number;
  amount: number;
};

export interface CartProductProps extends ProductProps {
  amount: number;
};

interface CartContextData {
  cartInfo: CartInfoProps;
  cartProducts: CartProductProps[];
  addToCart(product: ProductProps): void;
  removeFromCart(productId: number, amount?: number): void;
  checkout(): void;
};

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cartInfo, setCartInfo] = useState<CartInfoProps>({ shipping: 0, subTotal: 0, amount: 0 } as CartInfoProps);
  const [cartProducts, setCartProducts] = useState<CartProductProps[]>([]);

  const addToCart = useCallback((product: ProductProps) => {
    let productExists = cartProducts.find(item => item.id === product.id);

    if(productExists) {
      setCartProducts(cartProducts.map(
          item => item === productExists ? { ...item, amount: item.amount + 1 } : item
      ));
    } else {
      setCartProducts([...cartProducts, { ...product, amount: 1 }]);
    }
  }, [cartProducts]);

  const removeFromCart = useCallback((productId: number, amount?: number) => {
    let productExists = cartProducts.find(item => item.id === productId);

    if(amount && productExists && productExists.amount - amount > 0) {
      setCartProducts(cartProducts.map(item => {
        if(item.id === productId) {
          return { ...item, amount: item.amount - amount };
        }
        return item.id === productId ? { ...item, amount: item.amount - 1 } : item;
      }));
    }
    else {
      setCartProducts(oldProducts => oldProducts.filter(product => product.id !== productId));
    }
  }, [cartProducts]);

  const updateCartInfo = useCallback(() => {
    let newCartInfo: CartInfoProps = { shipping: 0, subTotal: 0, amount: 0 };
    
    // eslint-disable-next-line array-callback-return
    cartProducts.map(item => {
      newCartInfo = {
        shipping: newCartInfo.shipping + (item.amount * 10),
        subTotal: newCartInfo.subTotal + (item.price * item.amount),
        amount: newCartInfo.amount + item.amount,
      };
    });

    setCartInfo(newCartInfo);
  }, [cartProducts]);

  const checkout = useCallback(() => {
    setCartProducts([]);
  }, []);

  const saveLocalData = useCallback(() => {
    localStorage.setItem('@GAMES_STORE/CART_PRODUCTS', JSON.stringify(cartProducts));
  }, [cartProducts]);
  
  const getLocalData = useCallback(() => {
    let localProducts = localStorage.getItem('@GAMES_STORE/CART_PRODUCTS');

    if(localProducts) {
      setCartProducts(JSON.parse(localProducts));
    }
  }, []);

  useEffect(() => {
    getLocalData();
  }, [getLocalData]);

  useEffect(() => {
    updateCartInfo();
    saveLocalData();
  }, [cartProducts, saveLocalData, updateCartInfo]);

  return (
    <CartContext.Provider value={{ cartInfo, cartProducts, addToCart, removeFromCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = (): CartContextData => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a CartProvider');
  }

  return context;
};

export { CartProvider, useCart };