export function ConvertToBtc(amount: number, rate: number) {
  return (amount / rate).toFixed(8);
}
