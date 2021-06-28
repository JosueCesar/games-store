import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import api from '../services/api';

export type Filters = 'score' | 'price' | 'name' | 'none';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
};

interface ProductsContextData {
  loading: boolean;
  products: ProductProps[];
  filteredBy: Filters;
  getProducts(): Promise<void>;
  filterProducts(type: Filters): void;
}

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredBy, setFilteredBy] = useState<Filters>('none');
  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(async () => {
    try {
      if (loading) return;

      setLoading(true);
  
      const res = await api.get<ProductProps[]>('/products.json');
      
      if(res.status === 200) {
        setProducts(res.data);
        setFilteredBy('none');
      }
  
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [loading]);

  const filterProducts = useCallback((filter: Exclude<Filters, 'none'>) => {
    if(filter === filteredBy && filter !== 'score') {
      setProducts([...products.reverse()]);
    } else {
      let processedProducts = products.sort((a, b) => {
        if (a[filter] < b[filter]) return -1;
        if (a[filter] > b[filter]) return 1;
        return 0;
      });
      
      setProducts(filter === 'score' ? processedProducts.reverse() : processedProducts);
      setFilteredBy(filter);
    }
  }, [filteredBy, products]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filteredBy, loading, getProducts, filterProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = (): ProductsContextData => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used with a ProductsProvider');
  }

  return context;
};

export { ProductsProvider, useProducts };