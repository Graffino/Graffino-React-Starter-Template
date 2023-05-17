import { CracoConfig } from '@craco/types';
import path from 'path';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import crypto from 'crypto';

function threeLetterHash() {
  const randomBytes = crypto.randomBytes(16);
  const hash = crypto.createHash('md5').update(randomBytes).digest('hex');
  return hash.substring(0, 4);
}

const config: CracoConfig = {
  style: {
    modules: {
      // localIdentName: '[local]-[hash:base64:3]',
    },
    css: {
      loaderOptions: {
        modules: {
          getLocalIdent: (
            context: unknown,
            localIdentName: string,
            localName: string,
          ) => {
            if (localName.startsWith('key')) {
              return localName;
            }
            return `${localName}-${threeLetterHash()}`;
          },
          exportLocalsConvention: (className: string) =>
            className.replace(/--/g, '_modifier_').replace(/-/g, '_'),
        },
      },
    },
  },

  webpack: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        webpackConfig.devtool = false;
      } else {
        webpackConfig.devtool = 'eval-source-map';
      }
      webpackConfig.plugins?.push(
        new StylelintWebpackPlugin({
          files: '**/*.{scss,css}',
          configFile: './.stylelintrc',
        }),
      );

      return webpackConfig;
    },
  },
};

// eslint-disable-next-line import/no-unused-modules
export default config;
