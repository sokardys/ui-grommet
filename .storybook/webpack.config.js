module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader')
      }
    ],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.sass$/,
    use: [{
        loader: "sass-loader" // compiles Sass to CSS
    }]
  })

  return config;
};
