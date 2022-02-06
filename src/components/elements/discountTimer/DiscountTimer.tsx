import { FC } from 'react';
import '../../../styles/DiscountTimer.scss';
import { Discount } from '../../../store/types';
import ClockIcon from '../assets/ClockIcon';

type Props = {
  discount: Discount;
};

const DiscountTimer: FC<Props> = ({ discount }) => {
  const { amount, end_date } = discount;
  return (
    <div className="discount-timer-wrapper">
      <div className="flex-c-c discount-timer">
        <span className="discount-timer__procent">{amount} OFF</span>
        <span className="discount-timer__expire-title">Discount ends in</span>
      </div>
      <div className="flex-c-c discount-timer__time-left">
        <div className="discount-timer__timer-icon">
          <ClockIcon />
        </div>
        {end_date}
      </div>
    </div>
  );
};

export default DiscountTimer;
