import { defineConfig, Format, Options } from 'tsup'
import path from 'path'

const commonConfig: Options = {
  clean: true,
  // splitting: false,
  dts: true,
  sourcemap: true,
  tsconfig: path.resolve(__dirname, './tsconfig.build.json'),
  outDir: 'dist',
  format: ['esm' as Format],
  external: [
    'browser-or-node',
    'clipboardy',
    'picocolors',
    'tweakpane',
    'tweakpane-image-plugin',
    '@tweakpane/plugin-essentials',
  ],
}

export default defineConfig([
  // actual exposed modules = 1 per component
  // index files to allow named imports
  // inspired by react-bootstrap structure
  {
    entry: ['./src/index.ts'],
    ...commonConfig,
    esbuildOptions(options, context) {
      // the directory structure will be the same as the source
      options.outbase = './'
    },
    // index files must NOT be bundled!
    // it acts as a map towards bundled components but never rebundles them
    bundle: false,
  },
  {
    entry: ['./src/**/!(index).ts?(x)'],
    ...commonConfig,
    // For debugging, will output ESbuild metafile
    // metafile: true,
    esbuildOptions(options, context) {
      // the directory structure will be the same as the source
      options.outbase = './'
    },
  },
])
