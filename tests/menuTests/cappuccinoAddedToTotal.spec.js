import { test } from '../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

const price = coffePrices.cappuccino;
const formattedPriceWithTotal = totalPriceFormatStr(price, 1);

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappuccinoCup();

  await menuPage.assertTotalCheckoutContainsValue(formattedPriceWithTotal);
});
