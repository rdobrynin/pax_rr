export interface IBuyer {
  name: string
  image: string
  amount: number
  reputationPositive: number
  reputationNegative: number
  trades: ITrades[],
}

export interface ITrades {
  hash: string
  amount: number
  currency: Currency
  tradeStatus: TradeStatus
  paymentMethod: PaymentMethod
}

export enum TradeStatus {
  PAID = 'PAID',
  NOT_PAID = 'NOT PAID',
}

export enum PaymentMethod {
  AMAZON_GIFT_CARD = 'Amazon Gift Card',
  PAYPAL = 'PayPaL',
  ITUNES_GIFT_CARD = 'iTunes Gift Card',
}

export enum Currency {
  USD = 'USD',
}
