# MCatherine1994.github.io

This is a personal profile website built using [Vue 3](https://vuejs.org/) Typescript and the [PrimeVue](https://primevue.org/) UI library, hosted on GitHub Pages. It showcases my professional journey, including work experience and projects in areas like Machine Learning and Data Visualization. The site highlights my skills, projects, and the technologies I work with, providing a comprehensive overview of my background in data science and software development.

## Developer guide

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

#### Run Application Using Docker

```sh
docker build -t my-vue-app .
docker run -p 8080:80 my-vue-app
```

Now the Vue app is live at `http://localhost:8080`

#### Deploy the application

```sh
npm run build
npm run deploy
```