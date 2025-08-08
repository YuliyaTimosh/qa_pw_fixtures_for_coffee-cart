import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

const formattedEspressoPrice = priceFormatStr(coffePrices.espresso);
const formattedEspressoPriceDouble = priceFormatStr(coffePrices.espresso, 2);
const formattedCappuccinoPrice = priceFormatStr(coffePrices.cappuccino);
const formattedCappuccinoPriceDouble = priceFormatStr(
  coffePrices.cappuccino,
  2,
);
const totalCheckouPrice = coffePrices.espresso * 2 + coffePrices.cappuccino * 2;
const formattedTotalCheckoutPrice = priceFormatStr(totalCheckouPrice);

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();
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

  await cartPage.assertTotalCheckoutContainsValue(formattedTotalCheckoutPrice);
});
