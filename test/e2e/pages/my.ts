import { Selector } from 'testcafe';

/* eslint-disable no-undef */
fixture('my fixture').page(`${process.env.APP_URL}`);

const customDataAttribute = (name: string) => `[data-test='${name}']`;

test('/my', async t => {
  const loginButton = await Selector(customDataAttribute('login'));

  const testLoginId =
    process.env.TEST_QIITA_LOGIN_ID === undefined
      ? ''
      : process.env.TEST_QIITA_LOGIN_ID;
  const testLoginPassword =
    process.env.TEST_QIITA_LOGIN_PASSWORD === undefined
      ? ''
      : process.env.TEST_QIITA_LOGIN_PASSWORD;
  const testProfileImageUrl =
    process.env.TEST_QIITA_PROFILE_IMAGE_URL === undefined
      ? ''
      : process.env.TEST_QIITA_PROFILE_IMAGE_URL;

  await t
    .click(loginButton)
    .typeText('#identity', testLoginId)
    .typeText('#password', testLoginPassword)
    .click('[data-disable-with="ログイン"]')
    .click('[data-disable-with="許可する"]')
    .expect(
      Selector(customDataAttribute('profile-image-url')).getAttribute('src')
    )
    .eql(testProfileImageUrl);
});
