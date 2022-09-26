const formatCurrency = value => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const currencyMask = (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
  return e;
}

export { formatCurrency, currencyMask }