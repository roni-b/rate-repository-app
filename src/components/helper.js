const formatNumber = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k';
  }
  return number.toString();
};

export default formatNumber
