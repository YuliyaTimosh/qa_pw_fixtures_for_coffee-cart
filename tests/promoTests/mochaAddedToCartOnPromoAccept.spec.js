import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

const formattedEspressoPrice = priceFormatStr(coffePrices.espresso);
const formattedDiscountedMochaPrice = priceFormatStr(
  coffePrices.discountedMocha,
);
const formattedCappuccinoPrice = priceFormatStr(coffePrices.cappuccino);
const formattedAmericanoPrice = priceFormatStr(coffePrices.americano);

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();
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
