export type Product = {
  discount: Discount;
  gallery: Gallery[];
  name: string;
  options: Options;
  reviews: Reviews;
  shipping: Shipping;
  tags: string[];
};

export type Discount = {
  amount: string;
  end_date: string;
};

export type Gallery = {
  main: string;
};

// Options ---
export type Options = {
  '4k': OptionsDescription;
  '1080p': OptionsDescription;
  battery_accessories: OptionsDescription;
};

type OptionsDescription = {
  label: string;
  price: PriceCur;
  old_price: PriceCur;
};
type PriceCur = {
  currency: Currency,
  value: number,
}
type Currency = {
  code: string;
  format: string;
  symbol: string;
};

// Reviews ---
export type Reviews = {
  count: number;
  rating: string;
  total_buyers: number;
};

// Shipping ---
export type Shipping = {
  lead_time: LeadTime;
  method: ShippingMethod;
  props: ShippingProps;
};

type LeadTime = {
  value: string;
  info: string;
};

type ShippingMethod = {
  country: string;
  title: string;
  shipping_time: {
    info: string;
    value: string;
  };
  cost: Cost;
};

type Cost = {
  currency: {
    code: string;
    format: string;
    symbol: string;
  };
  value: number;
};

export type ShippingProps = {
  fast_dispatch: boolean;
  in_stock: boolean;
  ready_to_ship: boolean;
};
export default {};
