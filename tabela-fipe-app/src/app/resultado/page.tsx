import { redirect } from 'next/navigation';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

import { PriceSearchParams } from '@/utils/types';
import { PriceSearchResult } from '@/components/PriceSearchResult/PriceSearchResult';
import homeStyles from '@/app/styes';
import styles from './styles';

export default async function Resultado({
  searchParams,
}: {
  searchParams: Promise<PriceSearchParams>;
}) {
  /*****
   * [ Parâmetros ]
   ******************************************************************* */
  const priceSearchParams = await searchParams;
  const { selectedBrand, selectedModel, selectedYear } = priceSearchParams;
  if (!(selectedBrand && selectedModel && selectedYear)) {
    redirect('/');
    return;
  }

  return (
    <Container sx={styles.pageWrapper}>
      <Container maxWidth="lg">
        <Box sx={homeStyles.box}>
          <PriceSearchResult params={priceSearchParams} />
        </Box>
      </Container>
    </Container>
  );
}
