const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

console.log('Applying custom webpack configuration');

module.exports = override(
  
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    "@pages": path.resolve(__dirname, 'src/pages'),
    "@components": path.resolve(__dirname, 'src/components'),
    "@context": path.resolve(__dirname, 'src/context'),
    "@utils": path.resolve(__dirname, 'src/utils'),
    "@assets": path.resolve(__dirname, 'src/assets'),
    "@hooks": path.resolve(__dirname, "src/hooks")
  })
);