import { FC } from 'react';
import './ProductImage.scss';

type Props = {
  imageSrc: string;
};

const ProductImage: FC<Props> = ({ imageSrc }) => {
  return (
    <div className="spp--block spp__image-wrapper flex-c-c ">
      <img className="spp--spp__image" src={imageSrc} alt={imageSrc} />
    </div>
  );
};

export default ProductImage;
