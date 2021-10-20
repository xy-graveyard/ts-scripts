#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Sonar [${process.cwd()}]`)
execFileSync('yarn', ['eslint', '-c', 'node_modules/@xylabs/ts-scripts/sonar.eslintrc', './src'], { stdio: 'inherit' })
