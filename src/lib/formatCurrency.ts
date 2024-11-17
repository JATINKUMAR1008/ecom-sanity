export const formatCurrency = (amount: number, currency: string = "usd") => {
  try {
    return new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount);
  } catch (err) {
    console.error(err);
    return `${currency.toUpperCase()} ${amount.toFixed(2)}`;
  }
};
