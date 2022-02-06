import { FC } from 'react';
import { Product, OptionsDescription } from '../store/types';
import BannerOffer from './elements/bannerOffer/BannerOffer';
import ChooseAmount from './elements/chooseAmount/ChooseAmount';
import DiscountTimer from './elements/discountTimer/DiscountTimer';
import PricesOption from './elements/prices/PricesOption';
import ProductTitle from './elements/productTitle/ProductTitle';
import ProductRatings from './elements/ratings/ProductRatings';
import ShippingAbility from './elements/shippingAbility/ShippingAbility';

type Props = {
  product: Product;
};

const Description: FC<Props> = ({ product }) => {
  const { name, options, reviews, shipping, discount, tags } = product;

  let a = [] as any[];
  Object.keys(options).forEach((key) => a.push(key));
  const ItemsArray = a.map((item, i) => {
    if (!i) return options['1080p'];
    if (i === 1) return options['4k'];
    if (i === 2) return options['battery_accessories'];
  }) as OptionsDescription[];

  return (
    <div className="spp--block spp__description">
      <ShippingAbility shippingProps={shipping.props} />
      <ProductTitle title={name} tags={tags} />
      <ProductRatings reviews={reviews} />
      <hr />
      <PricesOption options={options} />
      <hr />
      <BannerOffer />
      <DiscountTimer discount={discount} />
      {/* <ChooseAmount options={options} /> */}
      {ItemsArray.map((item) => (
        <ChooseAmount key={item.label} option={item} />
      ))}

      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    </div>
  );
};

export default Description;
