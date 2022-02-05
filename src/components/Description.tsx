import { FC } from 'react';
import { Product } from '../store/types';
import ProductTitle from './elements/productTitle/ProductTitle';
import ProductRatings from './elements/ratings/ProductRatings';
import ShippingAbility from './elements/shippingAbility/ShippingAbility';

type Props = {
  product: Product;
};

const Description: FC<Props> = ({ product }) => {
  const { name, options, reviews, shipping, discount } = product;
  return (
    <div className="spp--block spp__description">
      <ShippingAbility shippingProps={shipping.props} />
      <ProductTitle title={name} />
      <ProductRatings reviews={reviews} />
      <hr />
      <p>{discount.amount}</p>
      <p>{`Calc remaining date -> ${discount.end_date} !!!`}</p>
      <div className="options">
        <p>{options['4k'].label}</p>
        <p>
          {`New: ${options['4k'].price.currency.symbol} ${options['4k'].price.value}`}
        </p>
        <p>{options['1080p'].label}</p>
        <p>
          {`New: ${options['1080p'].price.currency.symbol} ${options['1080p'].price.value}`}
        </p>
        <p>{options.battery_accessories.label}</p>
        <p>
          {`New: ${options.battery_accessories.price.currency.symbol} ${options.battery_accessories.price.value}`}
        </p>
      </div>
    </div>
  );
};

export default Description;
