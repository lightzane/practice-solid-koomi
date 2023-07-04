# Practice Solid Koomi

Practicing [Solid](https://www.solidjs.com/) by creating a web application with shopping and featuring Koomi

## Getting Started

How this project was created:

1. [Creating the project](#creating-the-project)
2. `npm install`
3. `npm run dev` or `npm start`
4. [Configure Vite to allow serverless application](#configure-vite-to-allow-serverless-application)

### Creating the Project

```
npx degit solidjs/templates/ts-tailwindcss practice-solid-koomi
```

### Installing node

```
npm install
```

### Configure Vite to allow serverless application

**vite.config.ts**

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  // =========================================================================
  //    Enable to run production build in `file:///` protocol
  // =========================================================================
  // * [Lz] 1. Base href to root
  base: '',
  build: {
    target: 'esnext',
    outDir: 'docs',
    // * [Lz] 2. Supply options to rollup to output in `umd`
    rollupOptions: {
      output: {
        format: 'umd',
      },
    },
    // * [Lz] 3. In docs/index.html - script.js, Remove -> type="module" crossorigin and change to "defer"
  },
});
```
