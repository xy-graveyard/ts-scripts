#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Updo [${process.cwd()}]`)
  execSync('yarn install', { stdio: 'inherit' })
  execSync('yarn upgrade', { stdio: 'inherit' })
  execSync(`yarn node ${resolveBinScript('ncu')} -u`, { stdio: 'inherit' })
  execSync('yarn reinstall', { stdio: 'inherit' })
})
