const currency_symbols = {
  USD: "$",
  EUR: "€",
  MKD: "MKD",
};

export const currencySymbol = (currencyName) => {
  if (currency_symbols[currencyName] !== undefined) {
    return currency_symbols[currencyName];
  }
  return currencyName;
};

export const priceByCurrency = (price, currency) => {
  switch (currency) {
    case "EUR":
      return parseFloat(price * 0.93).toFixed(2);
    case "MKD":
      return parseFloat(price * 57.62).toFixed(2);
    default:
      return price;
  }
};
