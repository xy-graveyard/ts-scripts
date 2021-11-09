#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Rebuild [${process.cwd()}]`)
execFileSync('yarn', ['clean'], { stdio: 'inherit' })
execFileSync('yarn', ['build'], { stdio: 'inherit' })
