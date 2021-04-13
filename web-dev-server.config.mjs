import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import replace from '@rollup/plugin-replace';

export default {
  appIndex: 'base-index.html',
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ target: 'auto' }),
    ...(process.env.NODE_ENV
      ? [
          fromRollup(replace)({
            preventAssignment: true,
            include: 'src/**/*.js',
            exclude: 'src/config.*.js',
            delimiters: ['', ''],
            values: {
              './config': `./config.${process.env.NODE_ENV}`
            }
          })
        ]
      : [])
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/404.html' }]
    }
  }
};
