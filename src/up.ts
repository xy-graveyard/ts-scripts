#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Up [${process.cwd()}]`)
  execFileSync('yarn', ['ncu'], { stdio: 'inherit' })
})
