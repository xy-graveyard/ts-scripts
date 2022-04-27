#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Sonar [${process.cwd()}]`)
  execSync(`yarn node ${resolveBinScript('eslint')} -c node_modules/@xylabs/ts-scripts/sonar.eslintrc .`, { stdio: 'inherit' })
})
