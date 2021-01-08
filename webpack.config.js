const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: {
    autoprefixer: { browsers: ["last 2 versions"], grid: true },
  },
};

module.exports = {
  mode: "none",
  entry: {
    main: ["./src/js/index.js", "./src/sass/main.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
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
            loader: "file-loader",
            options: {
              name: "css/[name].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",

            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
};
