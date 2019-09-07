export interface TradeStatus {
  status: TradeStatusEnum;
}

export enum TradeStatusEnum {
  PAID = <any> 'PAID',
  NOT_PAID = <any> 'NOT PAID',
}

export interface TradePayment {
  method: TradePaymentMethodEnum;
  currency: TradePaymentCurrencyEnum;
}

export enum TradePaymentMethodEnum {
  AMAZON = <any> 'Amazon Gift Card',
  ITUNES = <any> 'iTunes Gift Card',
  PAYPAL = <any> 'Pay Pal',
}

export enum TradePaymentCurrencyEnum {
  USD = <any> 'USD',
}
