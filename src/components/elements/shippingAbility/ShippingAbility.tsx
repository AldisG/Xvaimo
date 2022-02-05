import { FC } from 'react';
import { ShippingProps } from '../../../store/types';
import ShippingAbilityItem from './ShippingAbilityItem';
import '../../../styles/ShippingAbility.scss';

type Props = {
  shippingProps: ShippingProps;
};
const ShippingAbility: FC<Props> = ({ shippingProps }) => {
  const { fast_dispatch, in_stock, ready_to_ship } = shippingProps;
  const info = [
    { title: 'Ready to Ship', value: fast_dispatch },
    { title: 'In Stock', value: in_stock },
    { title: 'Fast Dispatch', value: ready_to_ship },
  ];
  return (
    <div className="shipping-ability-wrapper">
      {info.map(({ title, value }, i) => (
        <ShippingAbilityItem key={title} item={title} value={value} i={i} />
      ))}
    </div>
  );
};

export default ShippingAbility;
