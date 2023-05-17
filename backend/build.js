const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outdir: './dist',
  minify: true,
  platform: 'node',
  target: ['node14'],
  sourcemap: false,
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  external: ["knex"], 
}).catch(() => process.exit(1))
