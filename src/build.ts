#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'

safeExit(() => {
  console.log(`Build [${process.cwd()}]`)
  execFileSync('yarn', ['lint'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['compile'], { shell: true, stdio: 'inherit' })
})
