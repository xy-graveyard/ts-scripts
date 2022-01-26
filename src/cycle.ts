#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Cycle [${process.cwd()}]`)
  execSync('yarn eslint -c node_modules/@xylabs/ts-scripts/cycle.eslintrc .', {
    stdio: 'inherit',
  })
})
