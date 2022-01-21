#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Rebuild [${process.cwd()}]`)
  execFileSync('yarn', ['clean'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['build'], { shell: true, stdio: 'inherit' })
})
