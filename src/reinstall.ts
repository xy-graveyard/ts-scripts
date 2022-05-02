#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Reinstall [${process.cwd()}]`)
  execSync('yarn dlx rimraf ./yarn.lock', { stdio: 'inherit' })
  execSync('yarn dlx rimraf ./node_modules', { stdio: 'inherit' })
  execSync('yarn install --network-timeout 10000', { stdio: 'inherit' })
})
