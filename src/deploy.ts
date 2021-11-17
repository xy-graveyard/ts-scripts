#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Deploy [${process.cwd()}]`)
  execFileSync('yarn', ['build'], { stdio: 'inherit' })
  execFileSync('yarn', ['version', '--patch'], { stdio: 'inherit' })
  execFileSync('yarn', ['publish'], { stdio: 'inherit' })
})
