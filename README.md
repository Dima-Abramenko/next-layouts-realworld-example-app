# ![RealWorld Example App](logo.png)

> ### Next.js 13+ codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://next-layouts-realworld-example-app.vercel.app/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

> Work in progress...

Vercel team introduced brand-new approach of building Next.js applications in theirs 13-th major version ([announcement](https://nextjs.org/blog/next-13)). This upgrade brings React 18 features like Server Components, Suspence, Server HTML Streaming and so on. This approach is quite different from what we used before in Next.js.

A goal of this project is to demonstrate a fully fledged Front End application built with this new paradigm including CRUD operations, authentication, routing, pagination, and more.

# How it works

> Work in progress...

# Getting started

## Installation

Node.js is a prerequisite. See the "engines" property in `package.json` for the version range.

To install, run the following commands:

1. `git clone git@github.com:Dima-Abramenko/next-layouts-realworld-example-app.git`
2. `cd next-layouts-realworld-example-app`
3. `yarn`

## CI/CD

This project is automatically built & validated using `GitHub actions` whose configurations are defined in the `.github/workflows` folder.

## Development

To run the development server:

```
yarn dev
```

To run the development server using TurboPack:

```
yarn dev --turbo
```

To run the project in production mode:

```
yarn build && yarn start
```

## Git Guidelines

### How to Commit

The project uses a toolchain ([Commitizen](http://commitizen.github.io/cz-cli/) and [commitlint](https://commitlint.js.org/)) to handle its commits; therefore, _please use the command line when making a commit_ and do not use the `-m` option, i.e., only `git commit` is required. Once triggered you will be provided with prompts for the type of commit, ticket number, commit message, body as well as some other questions.

### Commit Message Format

On top of the Conventional Commits types: **`fix`** and **`feat`**, MPTC uses additional types according to [@commitlint/config-conventional (based on the Angular convention)](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum) which get presented when [running a commit](#how-to-commit).

-   Use the imperative, present tense (e.g. "fix", not "fixed" and [more examples](https://www.conventionalcommits.org/en/v1.0.0/#examples))
-   Start with a verb
-   Use the body/'long message' of the commit if more context is needed. - prompted after the header/'short message'

In addition to these general guidelines, all commit messages are linted via [commitlint](https://commitlint.js.org/) using the rules from [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#rules).
