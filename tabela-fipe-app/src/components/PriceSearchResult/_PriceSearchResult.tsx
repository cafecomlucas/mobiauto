'use client';

import { Chip, Typography } from '@mui/material';
import { GlobalContext } from '@/storage/GlobalStorage';
import React, { useContext } from 'react';
import { getPrice } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { Veiculo } from '@/utils/types';
import styles from './styles';

export function PriceSearchResult() {
  /*****
   * [ Navegação no cliente ]
   ******************************************************************* */
  const router = useRouter();

  /*****
   * [ Estados locais/globais ]
   ******************************************************************* */
  const { selectedBrand, selectedModel, selectedYear } =
    useContext(GlobalContext);
  const [veiculo, setVeiculo] = React.useState<Veiculo | null>(null);

  /*****
   * [ Métodos de Requisições pra API ]
   ******************************************************************* */
  const updatePrice = React.useCallback(async () => {
    const jsonPrice = await getPrice(
      selectedBrand,
      selectedModel,
      selectedYear,
    );
    setVeiculo(jsonPrice);
  }, [selectedBrand, selectedModel, selectedYear, setVeiculo]);

  /****
   * [ Use Effect - inicialização]
   ******************************************************************* */
  React.useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear) {
      updatePrice();
    } else {
      router.push('/');
    }
  }, [selectedBrand, selectedModel, selectedYear, updatePrice, router]);

  return (
    veiculo && (
      <>
        <Typography variant="h5" component="p" sx={styles.title}>
          Tabela Fipe: Preço {veiculo.Marca}, {veiculo.Modelo},{' '}
          {veiculo.AnoModelo}
        </Typography>

        <Typography component="div" sx={styles.containerResult}>
          <Chip label={veiculo.Valor} sx={styles.chipResult}></Chip>
        </Typography>

        <Typography variant="caption" component="p" sx={styles.caption}>
          Este é o preço de compra do veículo
        </Typography>
      </>
    )
  );
}
