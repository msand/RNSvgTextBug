module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config
    config.module.rules.push(
        {
          loader: 'babel-loader',
          test: /\.js$/,
          include: /svgs/,
          options: {
            cacheDirectory: true,
            presets: [['env', { modules: false }], 'react', 'stage-1'],
            plugins: [
              [
                'transform-runtime',
                {
                  helpers: false,
                  polyfill: false,
                  regenerator: false,
                },
              ],
            ]
          },
        },
    )
    // Important: return the modified config
    return config
  }
}
