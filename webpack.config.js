const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: {
    main: ['./src/js/index.js', './src/sass/main.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: false,

    hot: true,
    port: 9000,
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  'postcss-preset-env': {},

                  autoprefixer: {},
                },
              },
            },
          },
          {
            loader: 'sass-loader',

            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg)$/i,

        use: [
          'file-loader?name=img/[name].[ext]',

          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },

              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
