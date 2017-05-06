let inputTree = 'src',
    typescript = require('broccoli-typescript-compiler').typescript,
    Rollup = require('broccoli-rollup'),
    sourcemaps = require('rollup-plugin-sourcemaps'),
    Funnel = require('broccoli-funnel'),
    BroccoliMergeTrees = require('broccoli-merge-trees'),
    BrowserSync = require('broccoli-browser-sync');

let document = new Funnel('src', {
  include: ['index.html'],
});

var cssFiles = new Funnel('src/css', {
  destDir: 'css'
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
    "files": [
        "index.ts"
    ],
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

// browsersync options
let bsOptions = {
  browserSync: {
    open: false,
  }
};
var browserSync = new BrowserSync([document, jsBundles, cssFiles], bsOptions);

module.exports = new BroccoliMergeTrees([document, jsBundles, cssFiles, browserSync]);