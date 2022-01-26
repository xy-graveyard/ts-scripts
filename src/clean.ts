#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Clean [${process.cwd()}]`)
  execSync('yarn rimraf *.tsbuildinfo', { stdio: 'inherit' })
  execSync('yarn rimraf ./dist', { stdio: 'inherit' })
  execSync('yarn rimraf ./build', { stdio: 'inherit' })
})
