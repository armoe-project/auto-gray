import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'AutoGray',
      fileName: 'autoGray'
    }
  },
  plugins: [
    babel({
      extensions: ['.js', '.ts', '.vue'],
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: false,
            targets: {
              browsers: ['last 2 versions', '> 1%', 'not ie <= 11'],
            },
          },
        ],
      ],
    }),
  ],
})
