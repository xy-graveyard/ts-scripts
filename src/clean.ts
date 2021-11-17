#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Clean [${process.cwd()}]`)
  execFileSync('rm', ['-f', '*.tsbuildinfo'], { stdio: 'inherit' })
  execFileSync('rm', ['-r', '-f', './dist'], { stdio: 'inherit' })
  execFileSync('rm', ['-r', '-f', './build'], { stdio: 'inherit' })
})
