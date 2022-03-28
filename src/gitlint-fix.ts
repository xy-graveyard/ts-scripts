#!/usr/bin/env node
import chalk from 'chalk'
import fs from 'fs'
import { sync } from 'parse-git-config'

import { safeExit } from './safeExit'

safeExit(() => {
  console.log(`\nGitlint Fix Start [${process.cwd()}]\n`)

  const configFilePath = './.git/config'

  const gitConfig = sync()

  if (gitConfig.core.ignorecase) {
    const buffer = fs.readFileSync(configFilePath)
    const configText = buffer.toString('ascii')
    console.log(`IC: ${configText.includes('ignorecase = true')}`)
    fs.writeFileSync(configFilePath, configText.replace('ignorecase = true', 'ignorecase = false'))
    console.warn(chalk.yellow('\nGitlint Fix: Updated ignorecase to be false\n'))
  } else {
    console.warn(chalk.green('\nGitlint Fix: No update needed\n'))
  }

  return 1
})
