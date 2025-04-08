'use client';

import React from 'react';

export type GlobalValues = {
  selectedBrand: string;
  setSelectedBrand: (brandId: string) => void;
  selectedModel: string;
  setSelectedModel: (modelId: string) => void;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = React.createContext({} as GlobalValues);
export const GlobalStorage = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [selectedBrand, setSelectedBrand] = React.useState('');
  const [selectedModel, setSelectedModel] = React.useState('');
  const [selectedYear, setSelectedYear] = React.useState('');

  const resetFieldsAndSetBrand = (brandId: string) => {
    setSelectedYear('');
    setSelectedModel('');
    setSelectedBrand(brandId);
  };

  const resetFieldsAndSetModel = (modelId: string) => {
    setSelectedYear('');
    setSelectedModel(modelId);
  };

  return (
    <GlobalContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand: resetFieldsAndSetBrand,
        selectedModel,
        setSelectedModel: resetFieldsAndSetModel,
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
