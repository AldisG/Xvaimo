import '../../../styles/PayPalSection.scss';
import ApplePayIcon from '../assets/ApplePayIcon';
import MasterCardIcon from '../assets/MastercardIcon';
import ShieldIcon from '../assets/ShieldIcon';
import VisaIcon from '../assets/VisaIcon';

const PayPalSection = () => {
  return (
    <div className="paypal-section-wrapper">
      <div className="paypal__header">
        <ShieldIcon />
        <b>Trade Assurance</b>
        protects your Alibaba.com orders
      </div>
      <div className="paypal__payments">
        <b>Payments:</b>
        <VisaIcon /> <MasterCardIcon /> <ApplePayIcon />
      </div>
      <div className="paypal__info-wrapper">
        <span>
          <b>Alibaba</b>.com Logistics
        </span>
        <span>Inspection Solutions</span>
      </div>
    </div>
  );
};

export default PayPalSection;
