#!/usr/bin/env node
import chalk from 'chalk'
import { execSync } from 'child_process'
import { sync } from 'parse-git-config'

import { safeExit } from './safeExit'

safeExit(() => {
  console.log(`\nGitlint Fix Start [${process.cwd()}]\n`)

  const gitConfig = sync()

  if (gitConfig.core.ignorecase) {
    execSync('git config core.ignorecase false', { stdio: 'inherit' })
    console.warn(chalk.yellow('\nGitlint Fix: Updated ignorecase to be false\n'))
  } else {
    console.warn(chalk.green('\nGitlint Fix: No update needed\n'))
  }

  return 1
})
