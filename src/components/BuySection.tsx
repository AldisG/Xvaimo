import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Shipping } from '../store/types';
import '../styles/BuySection.scss';
import InfoIcon from './elements/assets/InfoIcon';

type Props = {
  shipping: Shipping;
};

const BuySection: FC<Props> = ({ shipping }) => {
  const { lead_time, method, props } = shipping;
  const roundPriceProperly = Number(
    method.cost.value.toFixed(2)
  ).toLocaleString();
  const getNumbersNotString = (value: string): string => {
    return value.replace(/[days]+/, '');
  };

  return (
    <div className="spp--block spp__buy-section">
      <div className="spp__buy-section-wrapper">
        <div className="shipping-and-sum">
          <div className="shipping-location">
            {`Ship to `}
            <span className="ship-to-span">
              {`${method.country} by `}
              <span className="ship-to-span__shorten">{method.title}</span>
            </span>
          </div>

          <div className="shipping-total-sum">
            {`${method.cost.currency.symbol} ${roundPriceProperly}`}
          </div>
        </div>

        <div className="shipping__time">
          Lead time
          <span className="time-span">
            <span>
              <b>{getNumbersNotString(lead_time.value)}</b>
              days
            </span>
            <Link to="/">
              <InfoIcon />
            </Link>
          </span>
        </div>

        <div className="shipping__time">
          Lead time
          <div className="time-span">
            <span>
              <b>{getNumbersNotString(method.shipping_time.value)}</b>
              days
            </span>
            <Link to="/">
              <InfoIcon />
            </Link>
          </div>
        </div>

        <div className="flex-c-c button-wrapper">
          <button className="large-btn">Login to Purchase</button>
          <button className="large-btn contact-button">
            Contact the Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySection;
