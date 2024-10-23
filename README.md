# vue-sfc-unbuild

Bundleless Vue 2/3 component library starter.

Features:

- Build with [unbuild](https://github.com/unjs/unbuild)
- File-to-file transpilation via [mkdist](https://github.com/unjs/mkdist)
- Playground with [vite](https://vitejs.dev/)
- Sample SFC to kick-start development

# Pending tests

- Add i18n custom translations.
- integrate with vuei18n.
- Expose unified config function/plugin.
- Add tailwindcss.
- Add storybook.

## Generate a project

Vue 3

```bash
npx degit wobsoriano/vue-sfc-unbuild library-name
```

Vue 2

```bash
npx degit wobsoriano/vue-sfc-unbuild#vue2 library-name
```

## Setup

```bash
# install dependencies
npm install

# start the dev app with hot reload, great for testing components
npm run dev

# build the library, available under dist
npm run build

# build the dev app, available under dev/dist
npm run dev:build

# preview the dev app locally from dev/dist
npm run dev:preview
```

## Usage

Install all components (as a plugin)

```ts
// src/main.ts

import MyLibrary from 'my-library'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
app.use(MyLibrary)
app.mount('#app')
```

Import some components

```vue
<script setup lang="ts">
import { Button, Card } from 'my-library/components'
</script>
```

## License

MIT

