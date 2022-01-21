#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Updo [${process.cwd()}]`)
  execFileSync('yarn', ['install'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['upgrade'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['ncu', '-u'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['reinstall'], { shell: true, stdio: 'inherit' })
})
