import { FC } from 'react';
import { Shipping } from '../store/types';
import '../styles/BuySection.scss';

type Props = {
  shipping: Shipping;
};

const BuySection: FC<Props> = ({ shipping }) => {
  return (
    <div className="spp--block spp__buy-section">
      <div className="spp__buy-section-wrapper">
        <div className="shipping-and-sum">
          <div className="shipping-location">{shipping.method.country}</div>
          <div className="shipping-total-sum">XXXX $</div>
        </div>

        <div className="shipping__lead-time">10 days</div>
        <div className="shipping__shopping-time">10 days</div>

        <div className="button-wrapper">
          <button className="large-btn ">Login to Purchase</button>
          <button className="large-btn contact-button">
            Contact the Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySection;
