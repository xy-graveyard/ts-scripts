#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Sonar [${process.cwd()}]`)
  execSync('yarn eslint -c node_modules/@xylabs/ts-scripts/sonar.eslintrc .', {
    stdio: 'inherit',
  })
})
