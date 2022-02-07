export const relevantPrice = (values: number, amount: number, hasValue?: boolean, ): string => {
  if (hasValue) {
    return (values * amount).toFixed(2);
  }
  return values.toFixed(2);
};

export const handleAmountClick = (
    maxAmount: number, amount: number,  setAmount:(value: number) => void, buttonType?: string
  ): void => {
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
export const handleCustomAmount = (maxAmount: number, value: number, setAmount: (value: number) => void): void => {
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

export default {}