#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Reinstall [${process.cwd()}]`)
  execFileSync('yarn', ['rimraf', './node_modules'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['install'], { shell: true, stdio: 'inherit' })
})
