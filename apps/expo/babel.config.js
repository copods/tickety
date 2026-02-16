const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            ['@gluestack/app']: path.join(
              __dirname,
              '../../packages/app/screens'
            ),
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
