import { FC, useState } from 'react';
import { useAppDispatch } from '../../../store/redux/hooks';
import { OptionsDescription } from '../../../store/types';
import '../../../styles/ChooseAmount.scss';
import {
  handleAmountClick,
  handleCustomAmount,
  relevantPrice,
} from '../../../util/functions';
import AddOrRemoveButton from '../assets/AddOrRemoveButton';

type Props = {
  option: OptionsDescription;
};

const ChooseAmount: FC<Props> = ({ option }) => {
  const [amount, setAmount] = useState(0);
  const maxAmount = 10;
  const dispatch = useAppDispatch();

  const checkRelevantPrice = (hasValue?: boolean): string => {
    return relevantPrice(option.price.value, amount, hasValue);
  };
  const handleAmountClicks = (buttonType?: string): void => {
    handleAmountClick(maxAmount, amount, setAmount, buttonType);
  };
  const handleCustomAmounts = (value: number): void => {
    handleCustomAmount(maxAmount, value, setAmount);
  };

  // Uz store padot tik [{buy: '1080p', totalPrice: amount * price}, {buy: 'battery', amount * price}]
  // store visu objektus reduce uz vienu summu un display to Summary sekcija

  return (
    <div className="choose-amount-wrapper">
      <div className="item-type">{option.label}</div>
      <div className="amount-wrapper">
        <div className={`item-price ${amount > 0 ? 'active' : ''}`}>
          {`${option.price.currency.symbol} ${
            amount <= 0 ? checkRelevantPrice(false) : checkRelevantPrice(true)
          }`}
        </div>

        <div className="amount-input-wrapper">
          <AddOrRemoveButton
            value="-"
            amount={amount}
            maxAmount={maxAmount}
            handleAmountClick={handleAmountClicks}
          />

          <input
            className={`amount-input ${amount > 0 ? 'active' : ''}`}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              handleCustomAmounts(Number(target.value));
            }}
            type="number"
            value={amount}
          />

          <AddOrRemoveButton
            value="+"
            amount={amount}
            maxAmount={maxAmount}
            handleAmountClick={handleAmountClicks}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseAmount;
