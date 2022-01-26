#!/usr/bin/env node
import { execSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Fix [${process.cwd()}]`)
  execSync('yarn eslint . --fix', { stdio: 'inherit' })
})
