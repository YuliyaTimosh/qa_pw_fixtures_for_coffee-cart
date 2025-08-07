export function unitPriceFormatStr(unitPrice, unitQuantity) {
  let formattedPrice = '';
  let sum = unitPrice * unitQuantity;
  formattedPrice = `${sum}.00 x ${unitQuantity}`;

  return formattedPrice;
}

export function priceFormatStr(unitPrice, unitQuantity = 0) {
  if (unitQuantity === 0) {
    return '$' + unitPrice + '.00';
  } else {
    let sum = unitPrice * unitQuantity;
    return '$' + sum + '.00';
  }
}

export function totalPriceFormatStr(unitPrice, unitQuantity) {
  let sum = unitQuantity * unitPrice;
  return 'Total: $' + sum + '.00';
}
