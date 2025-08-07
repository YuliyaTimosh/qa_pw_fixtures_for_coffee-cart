import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

let formattedEspressoPrice = priceFormatStr(coffePrices.espresso);
let formattedEspressoPriceDouble = priceFormatStr(coffePrices.espresso, 2);
let formattedCappuccinoPrice = priceFormatStr(coffePrices.cappuccino);
let formattedCappuccinoPriceDouble = priceFormatStr(coffePrices.cappuccino, 2);

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    formattedEspressoPrice,
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    formattedEspressoPriceDouble,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    formattedCappuccinoPrice,
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    formattedCappuccinoPriceDouble,
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    formattedEspressoPriceDouble,
  );

  await cartPage.assertTotalCheckoutContainsValue('$58.00');
});
