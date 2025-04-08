import Container from '@mui/material/Container';
import { Box, Card, CardContent, Typography } from '@mui/material';
import PriceSearchFields from '@/components/PriceSearchFields/PriceSearchFields';
import { getBrands } from '@/utils/api';

import styles from '@/app/styes';

export default async function Home() {
  const brandsItems = await getBrands();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" sx={styles.title}>
        Tabela Fipe
      </Typography>
      <Typography variant="h5" component="p" sx={styles.description}>
        Consulte o valor de um veículo de forma gratuíta
      </Typography>

      <Box sx={styles.box}>
        <Card sx={styles.card}>
          <CardContent>
            <PriceSearchFields brandItems={brandsItems} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
