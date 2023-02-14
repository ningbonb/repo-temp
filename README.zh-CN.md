<div align="center">
  <h1>repo-temp</h1>
</div>

<div align="center">

前端仓库模板。

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ningbonb/repo-temp/blob/main/LICENSE)

</div>

<div align="center">

[English](./README.zh-CN.md) | 简体中文

</div>

## 功能

- Monorepo
- TypeScript
- esbuild(dev)
- Rollup(build)
- Jest
- ESLint
- Prettier
- ...

## 用法

安装 yarn ，npm publish 依赖 yarn 的行为

```bash
$ npm install --global yarn
```

默认包管理器为 pnpm

```bash
$ npm install --global pnpm
```

使用 CLI 安装

```bash
正在开发...
```

### dev 

运行本地开发环境：

```bash
$ npm run dev
```

### build 

构建生产版本：

```bash
$ npm run build
```

## release 

发布 NPM ：

```bash
$ npm run release
```

### release 发布本地测试

只打印，不执行命令

```bash
$ npm run release -- --dry
```

## 其它说明

### changelog

change log 语法参考 [conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)

生成 change log :

```bash
$ npm run changelog
```

### 指定包管理器

在 `package.json` 指定包管理器，目前支持 `pnpm`、`yarn`，空值为 `npm` 。

```json
{
  "config": {
    "packageManager": "pnpm"
  }
}
```

### npm 包名称

在 `package.json` 指定发布在 NPM 上的名称。

```json
{
  "config": {
    "npmName": "core"
  }
}
```
