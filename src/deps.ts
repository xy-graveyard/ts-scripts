#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Deps [${process.cwd()}]`)
  execSync(`yarn node ${resolveBinScript('depcheck')}`, { stdio: 'inherit' })
})
