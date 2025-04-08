'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '@/storage/GlobalStorage';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function GetPriceButton() {
  const router = useRouter();

  /*****
   * [ Estados locais/globais ]
   ******************************************************************* */
  const { selectedBrand, selectedModel, selectedYear } =
    useContext(GlobalContext);
  const [isLoading, setIsLoading] = React.useState(false);

  /*****
   * [ Handlers ]
   ******************************************************************* */
  const handleClick = React.useCallback(() => {
    setIsLoading(true);
    const params = new URLSearchParams({
      selectedBrand,
      selectedModel,
      selectedYear,
    });
    router.push(`/resultado?${params.toString()}`);
  }, [selectedBrand, selectedModel, selectedYear, router, setIsLoading]);

  return (
    <Grid
      container
      direction="row"
      sx={{
        pt: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        color="primary"
        variant="contained"
        onClick={handleClick}
        disabled={Boolean(
          !(selectedBrand && selectedModel && selectedYear) || isLoading,
        )}
      >
        Consultar preço
      </Button>
    </Grid>
  );
}
