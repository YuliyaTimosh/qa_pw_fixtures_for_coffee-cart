import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { coffePrices } from '../../src/constants';

const price = coffePrices.cappuccino;
const formattedPrice = priceFormatStr(price);

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(formattedPrice);
});
