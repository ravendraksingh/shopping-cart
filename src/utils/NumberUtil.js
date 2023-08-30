export const toIndianCurrency = (num) => {
  let _num = num;
  if (_num === null || _num === undefined || _num < 0) {
    _num = 0;
  }
  let curr = _num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
};

export const formatAmount = (amount) => {
  return amount.toFixed(2);
};

export const toIndianFormat = (value) => {
  const formatter = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return formatter.format(value);
};
