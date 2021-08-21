#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Deps [${process.cwd()}]`)
execFileSync('yarn', ['depcheck'], { stdio: 'inherit' })
