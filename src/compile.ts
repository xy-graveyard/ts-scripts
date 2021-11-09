#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Compile [${process.cwd()}]`)
execFileSync('yarn', ['tsc', '-p', 'tsconfig.build.json'], { stdio: 'inherit' })
