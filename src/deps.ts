#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Deps [${process.cwd()}]`)
  execFileSync('yarn', ['depcheck'], { stdio: 'inherit' })
})
