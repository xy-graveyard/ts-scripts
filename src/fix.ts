#!/usr/bin/env node
import { execFileSync } from 'child_process'

import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Fix [${process.cwd()}]`)
  execFileSync('yarn', ['eslint', '.', '--fix'], { shell: true, stdio: 'inherit' })
})
