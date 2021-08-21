#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Deps [${process.cwd()}]`)
try {
  execFileSync('yarn', ['depcheck'], { stdio: 'inherit' })
  process.exit(0)
} catch (ex) {
  console.log('Error')
  process.exit(1)
}
