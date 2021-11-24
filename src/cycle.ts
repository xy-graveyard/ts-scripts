#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Cycle [${process.cwd()}]`)
  execFileSync('yarn', ['eslint', '-c', 'node_modules/@xylabs/ts-scripts/cycle.eslintrc', './src'], {
    stdio: 'inherit',
  })
})
