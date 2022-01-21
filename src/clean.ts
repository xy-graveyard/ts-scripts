#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Clean [${process.cwd()}]`)
  execFileSync('rm', ['-f', '*.tsbuildinfo'], { shell: true, stdio: 'inherit' })
  execFileSync('rm', ['-r', '-f', './dist'], { shell: true, stdio: 'inherit' })
  execFileSync('rm', ['-r', '-f', './build'], { shell: true, stdio: 'inherit' })
})
