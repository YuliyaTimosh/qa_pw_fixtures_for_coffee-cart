import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

let formattedEspressoPrice = priceFormatStr(coffePrices.espresso);
let formattedDiscountedMochaPrice = priceFormatStr(coffePrices.discountedMocha);
let formattedCappuccinoPrice = priceFormatStr(coffePrices.cappuccino);
let formattedAmericanoPrice = priceFormatStr(coffePrices.americano);

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    formattedEspressoPrice,
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    formattedDiscountedMochaPrice,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    formattedCappuccinoPrice,
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    formattedAmericanoPrice,
  );
});
