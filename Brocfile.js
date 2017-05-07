let inputTree = 'src',
    typescript = require('broccoli-typescript-compiler').typescript,
    Rollup = require('broccoli-rollup'),
    sourcemaps = require('rollup-plugin-sourcemaps'),
    Funnel = require('broccoli-funnel'),
    BroccoliMergeTrees = require('broccoli-merge-trees'),
    uglify = require('broccoli-uglify-sourcemap'),
    BrowserSync = require('broccoli-browser-sync'),
    env = require('./lib/build-env').getBuildEnvironment();

let staticFiles = new Funnel(inputTree, {
  files: [
    'index.html',
    'css/styles.css',
  ],
});

let jsTree = typescript(inputTree, {
  tsconfig: {
    "compilerOptions": {
        "target": "ES3",
        "strict": true,
        "module": "es2015",
        "sourceMap": true,
        "pretty": true,
        "noEmitOnError": true
    },
  },
  annotation: "ES2015 modules"
});

let jsBundles = new Rollup(jsTree, {
  // nodeModulesPath: string Defaults to process.cwd()
  rollup: {
    entry: 'index.js',
    dest: 'bundle.js',
    format: 'iife',
    sourceMap: true,
    plugins: [
      sourcemaps()
    ]
  }
});

var uglified = uglify(jsBundles, {
  mangle: true,
  compress: true,
  sourceMapIncludeSources: true,
  sourceMapConfig: {
    enabled: true,
    extensions: [ 'js' ]
  }
});

// browsersync options
let bsOptions = {
  browserSync: {
    open: false,
    reloadOnRestart: false,
    notify: false,
    injectChanges: true,
  }
};

if (env === 'production') {
  module.exports = new BroccoliMergeTrees([staticFiles, uglified]);
}
else {
  var browserSync = new BrowserSync([staticFiles, jsBundles, jsTree, uglified], bsOptions);
  module.exports = new BroccoliMergeTrees([staticFiles, jsBundles, browserSync]);
}