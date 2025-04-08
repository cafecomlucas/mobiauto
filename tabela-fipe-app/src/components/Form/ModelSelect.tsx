'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '@/storage/GlobalStorage';
import CustomSelect from './CustomSelect';
import { SelectChangeEvent } from '@mui/material';
import { SelectItem } from '@/utils/types';
import { getModels } from '@/utils/api';

export default function ModelSelect() {
  /*****
   * [ Estados locais/globais ]
   ******************************************************************* */
  const { selectedBrand, selectedModel, setSelectedModel } =
    useContext(GlobalContext);
  const [modelsItems, setModelsItems] = React.useState<SelectItem[] | null>(
    null,
  );

  /*****
   * [ Métodos Handler Change ]
   ******************************************************************* */
  const handleModelSelected = React.useCallback(
    (event: SelectChangeEvent) => {
      const modelId = event.target.value;
      setSelectedModel(modelId);
    },
    [setSelectedModel],
  );

  /*****
   * [ Métodos de Requisições pra API ]
   ******************************************************************* */
  const updateModelsList = React.useCallback(async () => {
    const jsonModels = await getModels(selectedBrand);
    setModelsItems(jsonModels.modelos);
  }, [selectedBrand]);

  /****
   * [ Use Effects - requisições após alteração do estado]
   ******************************************************************* */
  React.useEffect(() => {
    setModelsItems(null);
    if (!selectedBrand) return;

    updateModelsList();
  }, [selectedBrand, updateModelsList]);

  return (
    <CustomSelect
      id="modelo"
      title="Modelo"
      items={modelsItems}
      value={selectedModel}
      handleChange={handleModelSelected}
      disabled={Boolean(!selectedBrand)}
    />
  );
}
