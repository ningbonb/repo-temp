#!/usr/bin/env node

import enquirer from 'enquirer';
import execa from 'execa';
import chalk from 'chalk';
import { readFile, writeFile, mkdir, readdir, copyFile } from 'fs/promises';
import { join, basename } from 'path';

const prompt = enquirer.prompt;
let npmName = '';

const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: 'inherit', ...opts });

async function main() {
  const { npmName: _nameName } = await prompt({
    type: 'input',
    name: 'npmName',
    message: 'What is the name of the npm package?',
  });
  npmName = _nameName;

  console.log(chalk.blue(`Download templates from remote repository...`));
  await run('mkdir', ['temp']);
  await run('git', ['clone', 'https://github.com/ningbonb/repo-temp.git', 'temp']);
  console.log(chalk.green(`Download templates from remote repository success!`));
  await run('rm', ['-rf', 'temp/.git']);
  await run('rm', ['-rf', 'temp/packages/cli']);
  await run('mv', ['temp/packages/core', `temp/packages/${npmName}`]);
  await replaceStringInFile(`temp/package.json`, 'core', npmName);
  await replaceStringInFile(`temp/packages/${npmName}/package.json`, 'core', npmName);
  await replaceStringInFile(`temp/packages/${npmName}/index.js`, 'core', npmName);
  await replaceStringInFile(`temp/packages/${npmName}/examples/index.html`, 'core', npmName);
  await copyFolder('./temp', './');
  await run('rm', ['-rf', 'temp']);
  console.log(chalk.green(`install templates success!`));
  console.log(`please run: \n pnpm install`);
}

async function replaceStringInFile(filePath, searchString, replaceString) {
  try {
    const fileData = await readFile(filePath, 'utf-8');
    const replacedData = fileData.replace(new RegExp(searchString, 'g'), replaceString);
    await writeFile(filePath, replacedData, 'utf-8');
    console.log(chalk.green(`The file "${basename(filePath)}" has been updated`));
  } catch (error) {
    console.error(chalk.red(`Error updating file: ${error}`));
  }
}

async function copyFolder(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    entry.isDirectory()
      ? await copyFolder(srcPath, destPath)
      : await copyFile(srcPath, destPath);
  }
}

main().catch(console.error);
