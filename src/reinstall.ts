#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Reinstall [${process.cwd()}]`)
  execSync(`yarn node ${resolveBinScript('rimraf')} ./yarn.lock`, { stdio: 'inherit' })
  execSync(`yarn node ${resolveBinScript('rimraf')} ./node_modules`, { stdio: 'inherit' })
  execSync('yarn install --network-timeout 10000', { stdio: 'inherit' })
})
