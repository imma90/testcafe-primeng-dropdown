import { fixture, Selector } from 'testcafe';

fixture('primeng example');

test.page('https://www.primefaces.org/primeng-v15-lts/dropdown')('primeng v15 example', async (t) => {
  const basicDropdown: Selector = Selector('dropdown-basic-demo p-dropdown');
  const dropdownItems: Selector = basicDropdown.find('p-dropdownitem');

  await t.click(basicDropdown);

  await t.expect(dropdownItems.count).gt(0, 'No dropdown list items'); // fails
});

test.page('https://www.primefaces.org/primeng-v14-lts/dropdown')('primeng v14 example', async (t) => {
  const header: Selector = Selector('h5').withExactText('Basic');
  const basicDropdown: Selector = header.nextSibling('p-dropdown');
  const dropdownItems: Selector = basicDropdown.find('p-dropdownitem');

  await t.click(basicDropdown);

  await t.expect(dropdownItems.count).gt(0, 'No dropdown list items'); // fails
});

test.page('https://www.primefaces.org/primeng-v13-lts/#/dropdown')('primeng v13 example', async (t) => {
  const header: Selector = Selector('h5').withExactText('Basic');
  const basicDropdown: Selector = header.nextSibling('p-dropdown');
  const toggleExpandBtn: Selector = basicDropdown.find('div[role="button"]');
  const dropdownItems: Selector = basicDropdown.find('p-dropdownitem');

  await t.click(basicDropdown);

  await t.expect(toggleExpandBtn.getAttribute('aria-expanded')).eql('true'); // passes
  await t.expect(dropdownItems.count).gt(0, 'No dropdown list items'); // passes
});
