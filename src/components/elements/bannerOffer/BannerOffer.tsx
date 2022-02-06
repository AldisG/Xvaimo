import { Link } from 'react-router-dom';
import '../../../styles/BannerOffer.scss';
import ArrowRight from '../assets/ArrowRight';

const BannerOffer = () => {
  return (
    <div className="banner-offer-wrapper">
      <div className="banner-offer__header flex-c-c">
        MARTCH
        <span className="banner-offer-expo_header">EXPO</span>
      </div>
      <div className="banner-offer__free-shipping">
        <div className="banner-offer__text-wrapper flex-c-c">
          <span className="circle"></span>
          Free shipping (up to $40)
        </div>
        <Link to="/">
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BannerOffer;
