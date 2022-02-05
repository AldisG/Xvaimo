import { FC } from 'react';
import Checkmark from '../Checkmark';

type Props = {
  item: string;
  value: boolean;
  i: number;
};

const ShippingAbilityItem: FC<Props> = ({ item, value, i }) => {
  return (
    <div
      className={`shiping-ability__info ${value && i ? 'accent-light' : ''} ${
        !i ? 'accent' : ''
      }`}
    >
      {i > 0 && <Checkmark />} {item}
    </div>
  );
};

export default ShippingAbilityItem;
