'use client';

import React from 'react';
import Container from '@mui/material/Container';
import CustomSelect from '@/components/Form/CustomSelect';
import { getBrands, getModels, getYears } from '@/utils/api';
import type { SelectItem } from '@/utils/types';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
// import { Box } from '@/app/styes';

export default function Home() {
  /*****
   * [ Métodos Handler Change ]
   ******************************************************************* */
  const [selectedBrand, setSelectedBrand] = React.useState('');
  const [selectedModel, setSelectedModel] = React.useState('');
  const [selectedYear, setSelectedYear] = React.useState('');

  const handleBrandSelected = React.useCallback((event: SelectChangeEvent) => {
    const brandId = event.target.value;
    setSelectedYear('');
    setSelectedModel('');
    setSelectedBrand(brandId);
    console.log('alterou marca');
  }, []);

  const handleModelSelected = React.useCallback((event: SelectChangeEvent) => {
    const modelId = event.target.value;
    setSelectedYear('');
    setSelectedModel(modelId);
    console.log('alterou modelo');
  }, []);

  const handleYearSelected = React.useCallback((event: SelectChangeEvent) => {
    const yearId = event.target.value;
    setSelectedYear(yearId);
    console.log('alterou ano');
  }, []);

  /*****
   * [ Métodos de Requisições pra API ]
   ******************************************************************* */
  const [brandsItems, setBrandsItems] = React.useState<SelectItem[] | null>(
    null,
  );
  const [modelsItems, setModelsItems] = React.useState<SelectItem[] | null>(
    null,
  );
  const [yearsItems, setYearsItems] = React.useState<SelectItem[] | null>(null);

  const updateBrandsList = React.useCallback(async () => {
    const jsonBrands = await getBrands();
    setBrandsItems(jsonBrands);
  }, []);

  const updateModelsList = React.useCallback(async () => {
    const jsonModels = await getModels(selectedBrand);
    setModelsItems(jsonModels.modelos);
  }, [selectedBrand]);

  const updateYearsList = React.useCallback(async () => {
    const jsonYears = await getYears(selectedBrand, selectedModel);
    // console.log(jsonYears);
    setYearsItems(jsonYears);
  }, [selectedBrand, selectedModel]);

  /****
   * [ Use Effect de inicialização ]
   ******************************************************************* */
  React.useEffect(() => {
    updateBrandsList();
  }, [updateBrandsList]);

  /****
   * [ Use Effects - requisições após alteração do estado]
   ******************************************************************* */
  React.useEffect(() => {
    if (!selectedBrand) return;
    console.log('buscou Marca na API...');
    console.log('selectedBrand: ', selectedBrand);
    updateModelsList();
  }, [selectedBrand, updateModelsList]);

  React.useEffect(() => {
    if (!selectedModel) return;
    console.log('buscou Modelo na API...');
    console.log('selectedModel: ', selectedModel);
    updateYearsList();
  }, [selectedModel, updateYearsList]);

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h1"
        sx={{ p: '1rem 0.5rem 0', textAlign: 'center' }}
      >
        Tabela Fipe
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{ pt: '0.5rem', textAlign: 'center' }}
      >
        Consulte o valor de um veículo de forma gratuíta
      </Typography>

      <Box>
        <Card sx={{ minWidth: 275, padding: '0 2rem' }}>
          <CardContent>
            <CustomSelect
              id="marca"
              title="Marca"
              items={brandsItems}
              value={selectedBrand}
              handleChange={handleBrandSelected}
            />
            <CustomSelect
              id="modelo"
              title="Modelo"
              items={modelsItems}
              value={selectedModel}
              handleChange={handleModelSelected}
              disabled={Boolean(!selectedBrand)}
            />
            {Boolean(selectedBrand && selectedModel) && (
              <>
                <CustomSelect
                  id="ano"
                  title="Ano"
                  items={yearsItems}
                  value={selectedYear}
                  handleChange={handleYearSelected}
                />
              </>
            )}

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
                disabled={
                  !Boolean(selectedBrand && selectedModel && selectedYear)
                }
              >
                Consultar preço
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
