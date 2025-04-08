import { SelectChangeEvent } from '@mui/material/Select';

export type SelectProps = {
  title: string;
  id: string;
  items: SelectItem[] | null;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  disabled?: boolean | undefined;
};

export type SelectItem = {
  codigo: string;
  nome: string;
};

export type SelectItems = {
  items: SelectItem[];
};

export type PriceSearchFields = {
  brandItems: SelectItem[];
};

export type PriceSearchParams = {
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
};

export type Veiculo = {
  AnoModelo: number;
  CodigoFipe: string;
  Combustivel: string;
  Marca: string;
  MesReferencia: string;
  Modelo: string;
  SiglaCombustivel: string;
  TipoVeiculo: number;
  Valor: string;
};
