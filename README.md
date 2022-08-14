# Next.js, TypeScript and Styled-Components boilerplate

A boilerplate for project using [**Next.js**](https://nextjs.org/), [**TypeScript**](https://www.typescriptlang.org/) and [**Styled-Components**](https://styled-components.com/) to build pages and components.

This boilerplate also makes use of these technologies:

- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/), to enforce code style and best practices
- [Jest](https://jestjs.io/pt-BR/) & [Testing Library](https://testing-library.com/), to write tests for components, pages and other relevant code
- [Storybook](https://storybook.js.org/), to document components and pages
- [Husky](https://typicode.github.io/husky/#/) & [Lint Staged](https://www.npmjs.com/package/lint-staged), to run commit hooks, ensuring code quality
- [next-pwa](https://www.npmjs.com/package/next-pwa), to enable PWA features
- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter), to enforce a commit message style

## Getting Started

### Prerequisites

- [Node.js LTS or above](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installing

Clone the repo and move to the project directory

```(shell)
git clone https://github.com/matheusls/next-ts-boilerplate.git
cd next-ts-boilerplate
```

Install the dependencies with Yarn

```(shell)
yarn
```

Or with NPM

```(shell)
npm i
```

Run the project locally with Yarn

```(shell)
yarn dev
```

Or with NPM

```(shell)
npm run dev
```

## Available Scripts

In the project directory, you can run:

### `dev`

Start Next.js in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
Errors will appear on both the terminal and the page.

### `build`

Creates a production build for the app.

### `start`

Start a Next.js production server.

### `lint`

Runs ESLint and Prettier inside the `src` folder and logs any errors or warnings.

### `lint:fix`

Same as above, but tries to fix errors and warnings given.\
Anything the linter can't fix will be logged in the terminal at the end.

### `test`

Run Jest once, logging broken tests and coverage in the terminal.

### `test:watch`

Same as above, but in watch mode. Any changes to files and tests will run the tests.

## Known bugs and issues

- :warning: Next.js [v12.2.3](https://github.com/vercel/next.js/releases/tag/v12.2.3) adds `next.config.js` validation, which causes an [issue with the PWA configs](https://github.com/shadowwalker/next-pwa/issues/367) when using next-pwa. Until this issue is addressed, Next.js will be kept in version 12.2.2.
- :warning: next-pwa v5.5.5 introduces an [issue](https://github.com/shadowwalker/next-pwa/issues/370) where the service worker and workbox files are not being generated in the `public` folder as they should, but in the `.next` folder instead. Until this issue is addressed, Next.js will be kept in version 5.5.4.
