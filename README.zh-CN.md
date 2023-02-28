<div align="center">
  <h1>repo-temp</h1>
</div>

<div align="center">

这个项目提供了一个简单的前端开源模板，可用于快速搭建现代化的开源仓库。它包括常用的前端开发工具和技术，例如 TypeScript、Eslint、git hooks 等，使开发人员能够快速上手并进行自定义。改编自 [Vue3](https://github.com/vuejs/core) 。

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ningbonb/repo-temp/blob/main/LICENSE)

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

## 功能

- Monorepo
- TypeScript
- esbuild(dev)
- Rollup(build)
- Jest
- ESLint
- Prettier
- git hooks
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
$ npx repo-temp init
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

### npm 包名称

在 `package.json` 指定发布在 NPM 上的名称。

```json
{
  "config": {
    "npmName": "core"
  }
}
```
