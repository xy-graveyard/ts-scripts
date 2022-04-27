#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Dead [${process.cwd()}]`)
  execSync(`yarn node ${resolveBinScript('ts-prune')}`, { stdio: 'inherit' })
})
