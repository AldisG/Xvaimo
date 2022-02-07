import { FC, useState } from 'react';
import { OptionsDescription } from '../../../store/types';
import '../../../styles/ChooseAmount.scss';

type Props = {
  option: OptionsDescription;
};

const ChooseAmount: FC<Props> = ({ option }) => {
  const [amount, setAmount] = useState(0);
  const [activeAdd, setactiveAdd] = useState(false);
  const [activeRemove, setactiveRemove] = useState(false);
  const maxAmount = 10;

  const relevantPrice = (value?: boolean): string => {
    if (value) {
      return (option.price.value * amount).toFixed(2);
    }
    return option.price.value.toFixed(2);
  };

  const handleAmountClick = (buttonType?: string): void => {
    if (buttonType) {
      if (amount < maxAmount) {
        setAmount(amount + 1);
        return;
      } else {
        setAmount(maxAmount);
        return;
      }
    }
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  const handleCustomAmount = (value: number): void => {
    if (value < 0) {
      setAmount(0);
      return;
    }
    if (value > maxAmount) {
      setAmount(maxAmount);
      return;
    }
    setAmount(Math.floor(value));
  };

  // Uz store padot tik [{buy: '1080p', totalPrice: amount * price}, {buy: 'battery', amount * price}]
  // store visu objektus reduce uz vienu summu un display to Summary sekcija

  return (
    <div className="choose-amount-wrapper">
      <div className="item-type">{option.label}</div>
      <div className="amount-wrapper">
        <div className={`item-price ${amount > 0 ? 'active' : ''}`}>
          {`${option.price.currency.symbol} ${
            amount <= 0 ? relevantPrice(false) : relevantPrice(true)
          }`}
        </div>

        <div className="amount-input-wrapper">
          <button
            className={`amount-button  ${amount > 0 ? 'active--remove' : ''}`}
            onClick={() => handleAmountClick()}
            disabled={amount < 1}
          >
            -
          </button>
          <input
            className={`amount-input ${amount > 0 ? 'active' : ''}`}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              handleCustomAmount(Number(target.value));
            }}
            type="number"
            value={amount}
          />
          <button
            className={`amount-button amount-button--add ${
              amount < maxAmount ? 'active--add' : ''
            }`}
            onClick={() => handleAmountClick('add')}
            disabled={amount >= maxAmount}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseAmount;
