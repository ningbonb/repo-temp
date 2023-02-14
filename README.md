<div align="center">
  <h1>repo-temp</h1>
</div>

<div align="center">

repository template.

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
todo...
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

### Specify package manager

Specify the package manager in `package.json`, currently supports `pnpm`, `yarn`, and the empty value is `npm`.

```json
{
  "config": {
    "packageManager": "pnpm"
  }
}
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
