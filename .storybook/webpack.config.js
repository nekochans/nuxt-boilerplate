const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              importLoaders: 0,
              alias: {
                'assets': path.resolve(__dirname, '../src/assets')
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      'static': path.resolve(__dirname, '../src/static'),
      'assets': path.resolve('../src/assets'),
      '@': path.resolve(__dirname, '../src'),
      '~': path.resolve(__dirname, '../src')
    },
    extensions: ['.ts']
  }
};
