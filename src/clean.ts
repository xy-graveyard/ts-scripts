#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Clean [${process.cwd()}]`)
  execSync(`yarn node ${resolveBinScript('rimraf')} *.tsbuildinfo`, { stdio: 'inherit' })
  execSync(`yarn node ${resolveBinScript('rimraf')} ./dist`, { stdio: 'inherit' })
  execSync(`yarn node ${resolveBinScript('rimraf')} ./build`, { stdio: 'inherit' })
})
