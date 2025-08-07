import { test } from '../_fixtures/fixtures';
import {
  priceFormatStr,
  unitPriceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

let espressoPrice = coffePrices.espresso;
let formattedEspressoPrice = unitPriceFormatStr(espressoPrice, 1);
let formattedPrice = priceFormatStr(espressoPrice);

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(formattedEspressoPrice);
  await cartPage.assertEspressoTotalCostContainsCorrectText(formattedPrice);
});
