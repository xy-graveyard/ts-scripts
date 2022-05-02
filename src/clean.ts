#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Clean [${process.cwd()}]`)
  execSync('yarn dlx rimraf *.tsbuildinfo', { stdio: 'inherit' })
  execSync('yarn dlx rimraf ./dist', { stdio: 'inherit' })
  execSync('yarn dlx rimraf ./build', { stdio: 'inherit' })
})
