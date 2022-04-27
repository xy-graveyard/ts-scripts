#!/usr/bin/env node
import { execSync } from 'child_process'

import { resolveBinScript } from './resolveBinScript'
import { safeExit } from './safeExit'
safeExit(() => {
  console.log(`Cycle [${process.cwd()}]`)
  const rules = {
    'import/no-cycle': [1, { maxDepth: 10 }],
    'import/no-internal-modules': ['off'],
  }

  const eslintCli = `yarn node ${resolveBinScript('eslint')}${Object.entries(rules).map(([rule, value]) => ` --rule '${rule}: ${JSON.stringify(value)}'`)} .`

  execSync(eslintCli, {
    stdio: 'inherit',
  })
})
