#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Cycle [${process.cwd()}]`)
  execFileSync(
    'yarn',
    ['eslint', '--ext', '.js,.jsx,.ts,.tsx,.json', '--rule', "{'import/no-cycle': [1, { maxDepth: 10 }]}", './src'],
    { stdio: 'inherit' }
  )
})
