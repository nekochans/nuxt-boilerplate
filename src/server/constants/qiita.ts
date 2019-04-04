export const clientId = (): string => {
  return typeof process.env.QIITA_CLIENT_ID === 'string'
    ? process.env.QIITA_CLIENT_ID
    : '';
};

export const clientSecret = (): string => {
  return typeof process.env.QIITA_CLIENT_SECRET === 'string'
    ? process.env.QIITA_CLIENT_SECRET
    : '';
};
