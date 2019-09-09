import { Currency, PaymentMethod, TradeStatus } from '../models/trade/buyer'

export const Buyer = {
  name: 'Chanaaar',
  image: './assets/images/avatar_m.png',
  amount: 1230.00,
  reputationPositive: 23,
  reputationNegative: -2,
  trades: [
    {
      hash: '45FD3Rr',
      amount: 25.00,
      tradeStatus: TradeStatus.PAID,
      currency: Currency.USD,
      paymentMethod: PaymentMethod.AMAZON_GIFT_CARD
    },
    {
      hash: '33KJ5Es',
      amount: 55.00,
      currency: Currency.USD,
      tradeStatus: TradeStatus.NOT_PAID,
      paymentMethod: PaymentMethod.PAYPAL
    },
    {
      hash: '29NX7dA',
      amount: 12.00,
      currency: Currency.USD,
      tradeStatus: TradeStatus.NOT_PAID,
      paymentMethod: PaymentMethod.AMAZON_GIFT_CARD
    },
    {
      hash: '14DS5Sw',
      amount: 83.00,
      currency: Currency.USD,
      tradeStatus: TradeStatus.NOT_PAID,
      paymentMethod: PaymentMethod.ITUNES_GIFT_CARD
    },
  ],
}

export const Seller = {
  name: 'Alice',
  image: './assets/avatar_w.png',
  amount: 888.00,
  reputationPositive: 56,
  reputationNegative: -5,
}
