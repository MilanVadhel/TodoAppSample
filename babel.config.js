module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app/components': './src/components',
          '@app/utils': './src/utils',
          '@app/types': './src/types',
          '@app/redux': './src/redux',
          '@app/screens': './src/screens',
          '@app/navigation': './src/navigation',
        },
      },
    ],
  ],
};
