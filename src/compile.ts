#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Compile [${process.cwd()}]`)
  const imageExtList = ['gif', 'png', 'svg', 'jpg', 'jpeg', 'webp']
  execSync(`yarn node ${resolveBinScript('rimraf')} dist`, { stdio: 'inherit' })
  execSync('yarn rollup -c rollup.config.js', { stdio: 'inherit' })
  execSync('yarn tsc -p tsconfig.build.json', { stdio: 'inherit' })
  imageExtList.forEach((ext) => {
    execSync(`yarn node ${resolveBinScript('copyfiles')} -u 1 "./src/**/*.${ext}" dist`, { stdio: 'inherit' })
  })
})
