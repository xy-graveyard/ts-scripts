#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Compile [${process.cwd()}]`)
  execSync('yarn rimraf dist', { stdio: 'inherit' })
  execSync('yarn rollup -c', { stdio: 'inherit' })
  execSync('yarn tsc -p tsconfig.build.json', { stdio: 'inherit' })
})
