import { Selector } from 'testcafe';

/* eslint-disable no-undef */
fixture('counter fixture').page(`${process.env.APP_URL}/counter`);

const customDataAttribute = (name: string) => `[data-test='${name}']`;

test('/counter', async t => {
  const incrementButton = await Selector(customDataAttribute('increment'));
  const decrementButton = await Selector(customDataAttribute('decrement'));

  await t
    .click(incrementButton)
    .click(incrementButton)
    .click(incrementButton)
    .click(decrementButton)
    .expect(Selector(customDataAttribute('current-count')).textContent)
    .eql('\n  🐱が\n  2\n  匹いる。\n');
});
