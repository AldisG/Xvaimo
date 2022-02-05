import { FC } from 'react';
import '../../../styles/ProductTitle.scss';

type Props = {
  title: string;
};

const ProductTitle: FC<Props> = ({ title }) => {
  const titlelength = title.split(' ').length;
  const firstHalfTitle = title
    .split(' ')
    .slice(0, titlelength / 2)
    .join(' ');
  const RestOfHalfTitle = title
    .split(' ')
    .slice(titlelength / 2, -1)
    .join(' ');

  return (
    <div className="header-wrapper">
      <h1 className="product-title">{firstHalfTitle}</h1>
      <h1 className="product-title2">{RestOfHalfTitle}</h1>
      <div className="hot-sale-products">Hot sale products</div>
    </div>
  );
};

export default ProductTitle;
