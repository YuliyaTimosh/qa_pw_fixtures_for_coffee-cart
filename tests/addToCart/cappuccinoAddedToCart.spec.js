import { test } from '../_fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

let cappuccinoPrice = coffePrices.cappuccino;
let formattedCappuccinoPrice = unitPriceFormatStr(cappuccinoPrice, 1);
let formattedPrice = priceFormatStr(cappuccinoPrice);
test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    formattedCappuccinoPrice,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(formattedPrice);
});
