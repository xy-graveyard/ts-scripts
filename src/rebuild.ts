#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Rebuild [${process.cwd()}]`)
  execFileSync('yarn', ['clean'], { stdio: 'inherit' })
  execFileSync('yarn', ['build'], { stdio: 'inherit' })
})
