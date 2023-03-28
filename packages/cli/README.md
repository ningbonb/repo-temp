<div align="center">
  <h1>repo-temp</h1>
</div>

<div align="center">
This project provides a simple front-end open source template that can be used to quickly build a modern open source warehouse. It includes commonly used front-end development tools and technologies, such as TypeScript, Eslint, git hooks, etc., enabling developers to quickly get started and customize. Adapted from [Vue3](https://github.com/vuejs/core).

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ningbonb/repo-temp/blob/main/LICENSE)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

## Features

- Monorepo
- TypeScript
- esbuild(dev)
- Rollup(build)
- Jest
- ESLint
- Prettier
- git hooks
- ...

## Usage

Install `yarn`, `npm publish` depends on the behavior of `yarn` :

```bash
$ npm install --global yarn
```

The default package manager is `pnpm` :

```bash
$ npm install --global pnpm
```

Install using the CLI :

```bash
$ npx repo-temp init
```

### dev

Run the local development environment :

```bash
$ npm run dev
```

### build

Build the production version :

```bash
$ npm run build
```

## release

Publish to NPM :

```bash
$ npm run release
```

### release local test

Only print, do not execute commands :

```bash
$ npm run release -- --dry
```

## Other

### changelog

Change log syntax reference: [conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)

generate change log :

```bash
$ npm run changelog
```

### npm package name

Specify the name of the release on NPM in `package.json`.

```json
{
  "config": {
    "npmName": "core"
  }
}
```
