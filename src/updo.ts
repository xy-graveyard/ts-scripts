#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Updo [${process.cwd()}]`)
  execSync('yarn install', { stdio: 'inherit' })
  execSync('yarn upgrade', { stdio: 'inherit' })
  execSync('yarn ncu -u', { stdio: 'inherit' })
  execSync('yarn install', { stdio: 'inherit' })
})
