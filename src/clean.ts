#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Clean [${process.cwd()}]`)
  execFileSync('yarn', ['rimraf', '*.tsbuildinfo'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['rimraf', './dist'], { shell: true, stdio: 'inherit' })
  execFileSync('yarn', ['rimraf', './build'], { shell: true, stdio: 'inherit' })
})
