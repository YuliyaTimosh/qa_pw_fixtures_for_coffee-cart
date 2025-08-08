import { test } from '../_fixtures/fixtures';

// eslint-disable-next-line max-len
test('Assert discounted Mocha is not added to the cart after declining the promo', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoItemIsVisible();
  await cartPage.assertDiscountedMochaItemIsHidden();

  await cartPage.assertCappuccinoItemIsVisible();
  await cartPage.assertAmericanoItemIsVisible();
});
