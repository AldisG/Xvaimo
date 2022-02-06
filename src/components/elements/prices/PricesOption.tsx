import { FC } from 'react';
import { Options } from '../../../store/types';
import '../../../styles/PricesOption.scss';

type Props = {
  options: Options;
};

const PricesOption: FC<Props> = ({ options }) => {
  const { battery_accessories } = options;

  const currency = battery_accessories.old_price.currency.symbol;
  const amountOfItemTypes = new Array(Object.keys(options))[0].length;

  const newBatPrice = battery_accessories.price.value;
  const oldBatPrice = battery_accessories.old_price.value;
  const new4kPrice = options['4k'].price.value;
  const old4kPrice = options['4k'].old_price.value;

  return (
    <div className="prices-option-wrapper">
      <div className="prices-option__relavent-info">
        <div className="current-price">
          {`${currency} ${newBatPrice} - ${currency} ${new4kPrice}`}
        </div>
        <span>/</span>
        <div className="span--options">
          <span className="span--options__light">Option</span>
          <span className="span--options__bold">
            {`${amountOfItemTypes} Option${amountOfItemTypes > 0 ? 's' : ''}`}
            <span className="span--options__min-order">(Min Order)</span>
          </span>
        </div>
      </div>

      <div className="old-price">
        {`${currency} ${oldBatPrice} - ${currency} ${old4kPrice}`}
      </div>
    </div>
  );
};

export default PricesOption;
