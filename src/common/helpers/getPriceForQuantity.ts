export function unitPriceFormatStr(unitPrice, unitQuantity) {
  let formattedPrice = '';
  formattedPrice = `${unitPrice.toFixed(2)} x ${unitQuantity}`;

  return formattedPrice;
}

export function priceFormatStr(unitPrice: number, unitQuantity: number = 0) {
  if (unitQuantity === 0) {
    return `$${unitPrice.toFixed(2)}`;
  } else {
    let sum = unitPrice * unitQuantity;
    return `$${sum.toFixed(2)}`;
  }
}

export function totalPriceFormatStr(unitPrice, unitQuantity) {
  let sum = unitQuantity * unitPrice;
  return `Total: $${sum.toFixed(2)}`;
}
