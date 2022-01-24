#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Deploy [${process.cwd()}]`)
  execFileSync('yarn', ['build'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['version', '--patch'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['publish'], { shell: true, stdio: 'inherit' })
})
