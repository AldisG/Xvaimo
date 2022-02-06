import { FC } from 'react';
import { OptionsDescription } from '../../../store/types';
import '../../../styles/ChooseAmount.scss';

type Props = {
  option: OptionsDescription;
};

const ChooseAmount: FC<Props> = ({ option }) => {
  const convertItemBackToNumber = (): number => {
    return Number(option.price.value.toFixed(2));
  };
  // Uz store padot tik [{buy: '1080p', totalPrice: amount * price}, {buy: 'battery', amount * price}]
  // store visu objektus reduce uz vienu summu un display to Summary sekcija
  return (
    <div>
      <div className="item-type">{option.label}</div>
      <div className="amount-wrapper">
        <div className="item-price">{convertItemBackToNumber() * 1}</div>
      </div>
    </div>
  );
};

export default ChooseAmount;
