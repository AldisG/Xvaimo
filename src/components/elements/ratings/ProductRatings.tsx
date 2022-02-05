import { FC } from 'react';
import { Reviews } from '../../../store/types';
import '../../../styles/ProductRatings.scss';
import Star from './Star';

type Props = {
  reviews: Reviews;
};

type StarProps = {
  i: number;
  fullStar: boolean;
};

const ProductRatings: FC<Props> = ({ reviews }) => {
  const { count, rating, total_buyers } = reviews;
  const starNum = Math.floor(Number(rating));
  let stars = [] as StarProps[];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i > starNum ? { i: i, fullStar: true } : { i: i, fullStar: false }
    );
  }

  return (
    <div className="product-ratings-wrapper">
      <div className="product-ratings__stars-wrapper">
        {stars.map(({ i, fullStar }) => (
          <Star key={i} starType={fullStar} />
        ))}
        <span className="product-ratings__span">{rating}</span>
      </div>
      <div className="product-ratings__reviews">{count} Reviews</div>
      <div className="product-ratings__buyers">{total_buyers} Buyers</div>
    </div>
  );
};

export default ProductRatings;
