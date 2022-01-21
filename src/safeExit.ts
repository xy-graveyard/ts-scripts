import { ExecException } from 'child_process'

/** Catches child process a crash and returns the code */

const safeExit = (func: () => void) => {
  try {
    func()
  } catch (ex) {
    const error = ex as ExecException
    process.exit(error.code)
  }
}

export { safeExit }
