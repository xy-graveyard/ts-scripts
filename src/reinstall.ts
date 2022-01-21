#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Reinstall [${process.cwd()}]`)
  execFileSync('rm', ['-r', '-f', './node_modules'], { shell: true, stdio: 'inherit' })
  execFileSync('rm', ['-f', './yarn.lock'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['install'], { shell: true, stdio: 'inherit' })
})
