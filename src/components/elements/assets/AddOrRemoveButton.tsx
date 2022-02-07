import { FC } from 'react';

type Props = {
  value: string;
  amount: number;
  maxAmount: number;
  handleAmountClick: (value?: string) => void;
};

const AddOrRemoveButton: FC<Props> = ({
  value,
  amount,
  maxAmount,
  handleAmountClick,
}) => {
  const determineDisable =
    value === '+' ? amount >= maxAmount : ((amount < 1) as boolean);
  const determineActiveClass = value === '+' ? amount < maxAmount : amount > 0;
  const determineTheClass = value === '+' ? 'active--add' : 'active--remove';
  return (
    <button
      className={`amount-button amount-button--add ${
        determineActiveClass ? determineTheClass : ''
      }`}
      onClick={() => handleAmountClick(value === '+' ? 'add' : '')}
      disabled={determineDisable}
    >
      {value}
    </button>
  );
};

export default AddOrRemoveButton;
