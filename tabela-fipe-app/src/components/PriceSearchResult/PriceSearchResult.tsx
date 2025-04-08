import { Chip, Typography } from '@mui/material';
import { getPrice } from '@/utils/api';
import { PriceSearchParams, Veiculo } from '@/utils/types';
import styles from './styles';

export async function PriceSearchResult({
  params,
}: {
  params: PriceSearchParams;
}) {
  /*****
   * [ Parâmetros ]
   ******************************************************************* */
  const { selectedBrand, selectedModel, selectedYear } = params;

  /*****
   * [ Métodos de Requisições pra API ]
   ******************************************************************* */
  const veiculo: Veiculo = await getPrice(
    selectedBrand,
    selectedModel,
    selectedYear,
  );

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
