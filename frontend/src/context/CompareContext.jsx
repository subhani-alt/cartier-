import React, { createContext, useContext, useState } from 'react';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (product) => {
    setCompareList(prev => {
      const exists = prev.some(item => item.slug === product.slug);
      if (exists) {
        return prev.filter(item => item.slug !== product.slug);
      } else {
        if (prev.length >= 3) {
          alert('You can compare a maximum of 3 items at a time.');
          return prev;
        }
        return [...prev, product];
      }
    });
  };

  const isInCompare = (slug) => compareList.some(item => item.slug === slug);
  const clearCompare = () => setCompareList([]);

  return (
    <CompareContext.Provider value={{ compareList, toggleCompare, isInCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
