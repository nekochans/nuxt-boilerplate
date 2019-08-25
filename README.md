# nuxt-boilerplate

Nuxt.js Boilerplate用プロジェクトです。

## Getting Started

以下の通りに実行して下さい。

developmentモードでアプリケーションが起動します。

ホットリロードが有効な状態です。

``` bash
$ yarn install

$ yarn run dev
```

productionモードで実行する際は以下を実行して下さい。

```bash
$ yarn run build
$ yarn start
```

development、productionどちらのモードでもURLは下記になります。

http://127.0.0.1:3000

## 環境変数の登録

最低限以下の環境変数を登録して下さい。

[direnv](https://github.com/direnv/direnv) を利用すると良いでしょう。

```
export APP_URL=http://127.0.0.1:3000
```

デモ用の機能としてQiitaアカウントでログインを行い、Qiitaのプロフィール情報を取得する機能が実装されています。

これらを動作させる為には以下の手順でQiitaにアプリケーションを登録する必要があります。

### 1. 「設定」に遷移します

![qiitaCreateApp1](https://user-images.githubusercontent.com/11032365/63650096-e77dca00-c781-11e9-8fb9-d989303d68a3.png)

### 2. 「アプリケーション」から「アプリケーションを登録する」に遷移します

![qiitaCreateApp2](https://user-images.githubusercontent.com/11032365/63650100-ed73ab00-c781-11e9-81a3-9da4686fa2ac.png)

### 3. アプリケーションの情報を入力します

以下の2つは任意で構いません。

- アプリケーションの名前
- アプリケーションの説明

以下の2項目は必ず以下の値を入れて下さい。

- WebサイトのURL
  - http://127.0.0.1:3000
- リダイレクト先のURL
  - http://127.0.0.1:3000/oauth/callback

![qiitaCreateApp3](https://user-images.githubusercontent.com/11032365/63650103-f2d0f580-c781-11e9-800d-7b6ea8ae25a7.png)

### 4. 「Client ID」と「Client Secret」をメモする

![qiitaCreateApp4](https://user-images.githubusercontent.com/11032365/63650108-f95f6d00-c781-11e9-9a25-dccce5a6b3e8.png)

それぞれの環境変数を以下のように登録して下さい。

```
export QIITA_CLIENT_ID=あなたのClient ID
export QIITA_CLIENT_SECRET=あなたのClient Secret
```

## テストの実行

### ユニットテスト

以下のコマンドでテストが実行されます。

`yarn run test`

コードカバレッジを出力する場合は以下のコマンドを実行して下さい。

`yarn run test:coverage`

カバレッジレポートは `coverage` に出力されます。

### E2Eテスト

以下のコマンドを実行します。

テスト用のブラウザとしてGoogle Chromeが利用されますのでインストールされていない場合は動作しません。

`yarn run test:e2e`

またテストシナリオの中にはQiitaのアカウントでログインを行うシナリオがあります。

その為、以下の環境変数を設定しておく必要があります。

```
export TEST_QIITA_LOGIN_ID=あなたのQiitaアカウントのユーザーIDかメールアドレス
export TEST_QIITA_LOGIN_PASSWORD=あなたのQiitaアカウントのパスワード
export TEST_QIITA_PROFILE_IMAGE_URL=あなたのQiitaアカウントのプロフィール画像URL
```

Qiitaで二段階認証を設定している場合、テストに失敗するので事前に解除しておく必要があります。

## Storybookの起動

`yarn run storybook` を実行します。

以下のURLでアクセスが可能です。

http://localhost:6006/
