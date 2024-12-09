export const formatThousands = (n: number) =>
  new Intl.NumberFormat(window.navigator.language, {
    // style: "currency",
    // currency: currency,
    minimumFractionDigits: 2,
  }).format(n);
