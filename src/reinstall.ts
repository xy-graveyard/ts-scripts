#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Reinstall [${process.cwd()}]`)
  execSync('yarn rimraf ./yarn.lock', { stdio: 'inherit' })
  execSync('yarn rimraf ./node_modules', { stdio: 'inherit' })
  execSync('yarn install', { stdio: 'inherit' })
})
