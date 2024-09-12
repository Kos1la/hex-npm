export const capitalize = (str) => {
  if (str === '') {
    return '';
  }
  const firstSymbol = str[0].toUpperCase();
  const restSymbols = str.slice(1);
  return firstSymbol + restSymbols;
};

// console.log(capitalize('hello'));
