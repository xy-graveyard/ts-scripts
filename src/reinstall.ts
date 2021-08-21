#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Reinstall [${process.cwd()}]`)
execFileSync('rm', ['-r', '-f', './node_modules'], { stdio: 'inherit' })
execFileSync('rm', ['-f', './yarn.lock'], { stdio: 'inherit' })
execFileSync('yarn', ['install'], { stdio: 'inherit' })
