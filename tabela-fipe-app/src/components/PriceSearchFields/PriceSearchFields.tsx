import type { PriceSearchFields } from '@/utils/types';
import BrandSelect from '../Form/BrandSelect';
import ModelSelect from '../Form/ModelSelect';
import YearSelect from '../Form/YearSelect';
import GetPriceButton from '../Form/GetPriceButton';

export default function PriceSearchFields(props: PriceSearchFields) {
  return (
    <>
      <BrandSelect items={props.brandItems} />
      <ModelSelect />
      <YearSelect />
      <GetPriceButton />
    </>
  );
}
