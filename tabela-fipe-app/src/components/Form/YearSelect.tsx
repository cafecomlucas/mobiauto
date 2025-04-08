'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '@/storage/GlobalStorage';
import CustomSelect from './CustomSelect';
import { SelectChangeEvent } from '@mui/material';
import { SelectItem } from '@/utils/types';
import { getYears } from '@/utils/api';

export default function YearSelect() {
  /*****
   * [ Estados locais/globais ]
   ******************************************************************* */
  const { selectedBrand, selectedModel, selectedYear, setSelectedYear } =
    useContext(GlobalContext);
  const [yearsItems, setYearsItems] = React.useState<SelectItem[] | null>(null);

  /*****
   * [ Métodos Handler Change ]
   ******************************************************************* */
  const handleYearSelected = React.useCallback(
    (event: SelectChangeEvent) => {
      const yearId = event.target.value;
      setSelectedYear(yearId);
    },
    [setSelectedYear],
  );

  const updateYearsList = React.useCallback(async () => {
    const jsonYears = await getYears(selectedBrand, selectedModel);
    setYearsItems(jsonYears);
  }, [selectedBrand, selectedModel]);

  /****
   * [ Use Effects - requisições após alteração do estado]
   ******************************************************************* */
  React.useEffect(() => {
    setYearsItems(null);
    if (!selectedModel) return;
    updateYearsList();
  }, [selectedModel, updateYearsList]);

  if (!(selectedBrand && selectedModel)) {
    return null;
  } else {
    return (
      <>
        <CustomSelect
          id="ano"
          title="Ano"
          items={yearsItems}
          value={selectedYear}
          handleChange={handleYearSelected}
        />
      </>
    );
  }
}
