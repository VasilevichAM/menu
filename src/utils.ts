export const formatThousands = (n: number) =>
  new Intl.NumberFormat("ru-RU", { minimumFractionDigits: 2 }).format(n);
// export const formatThousandsUs = (n: number) =>
//   new Intl.NumberFormat("en_US", { minimumFractionDigits: 3 }).format(n);
