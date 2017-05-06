import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  entry: 'src/index.js',
  dest: 'build/bundle.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    sourcemaps()
  ]
};