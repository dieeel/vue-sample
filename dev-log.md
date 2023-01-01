# dev log

## ref

* https://qiita.com/TakahiRoyte/items/9033b61a0e528324da4c
* https://www.udemy.com/course/trial-vue3-x-typescript/

## start

```
nodenv install 18.12.1
nodenv global 18.12.1
npm install -g npm@9.2.0
```

## js

```
vue-sample $ npm create vite@4.0.0
✔ Project name: … vue-sample
✔ Select a framework: › Vue
✔ Select a variant: › JavaScript

Scaffolding project in /Users/takaakinakazawa/gitrepo/own/vue-sample/vue-sample...

Done. Now run:

  cd vue-sample
  npm install
  npm run dev

vue-sample $ cd vue-sample
vue-sample $ npm install
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead

added 33 packages, and audited 34 packages in 6s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
vue-sample $
```

## ts

```
vue-sample $ npm create vite@4.0.0
✔ Project name: … vue-ts-sample
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript

Scaffolding project in /Users/takaakinakazawa/gitrepo/own/vue-sample/vue-ts-sample...

Done. Now run:

  cd vue-ts-sample
  npm install
  npm run dev

vue-sample $ cd vue-ts-sample
vue-ts-sample $ npm install
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead

added 47 packages, and audited 48 packages in 8s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
vue-ts-sample $
```

### create sample

`VSample001.vue` 作成

> https://www.udemy.com/course/trial-vue3-x-typescript/

### table sample

`VTableSample001.vue` 作成

npm install

```
vue-ts-sample $ npm install vue-good-table

added 3 packages, and audited 51 packages in 9s

5 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

edit `main.ts` following code.

```
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

const app = createApp(App)

app.use(VueGoodTablePlugin);

app.mount('#app')
```

> https://qiita.com/Nossa/items/726cc3e67527e896ed1e

if `src/@types` doesn't exist.

```
mkdir src/@types
```

create declare file.

```
echo "declare module 'vue-good-table';" > src/@types/vue-good-table.d.ts
```

but it doesn't work.

> https://github.com/xaksis/vue-good-table/issues/758



