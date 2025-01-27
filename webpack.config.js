module.exports = {
    module: {
      rules: [
        // Existing rules...
        {
          test: /\.d\.ts$/,
          use: 'ignore-loader',
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
      ],
    },
  };
  