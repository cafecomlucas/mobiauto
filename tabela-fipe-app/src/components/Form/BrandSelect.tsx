'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '@/storage/GlobalStorage';
import CustomSelect from './CustomSelect';
import { SelectChangeEvent } from '@mui/material';
import { SelectItems } from '@/utils/types';

export default function BrandSelect(props: SelectItems) {
  /*****
   * [ Estados globais ]
   ******************************************************************* */
  const { selectedBrand, setSelectedBrand } = useContext(GlobalContext);

  /*****
   * [ Métodos Handler Change ]
   ******************************************************************* */
  const handleBrandSelected = React.useCallback(
    (event: SelectChangeEvent) => {
      const brandId = event.target.value;
      setSelectedBrand(brandId);
    },
    [setSelectedBrand],
  );

  return (
    <CustomSelect
      id="marca"
      title="Marca"
      items={props.items}
      value={selectedBrand}
      handleChange={handleBrandSelected}
    />
  );
}
