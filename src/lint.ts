#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Lint [${process.cwd()}]`)
  execFileSync('yarn', ['eslint', '--ext', '.js,.jsx,.ts,.tsx,.json', './src'], { stdio: 'inherit' })
})
