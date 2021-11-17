#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Dead [${process.cwd()}]`)
  execFileSync('yarn', ['ts-prune'], { stdio: 'inherit' })
})
