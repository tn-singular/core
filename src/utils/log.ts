export function prependConsoleLog(prefix: string) {
  const log = console.log
  const prefixString = `%c${prefix}`
  const css = 'background:#b952ff;padding:0px 8px;border-radius:9em;'

  const modifiedLogFunction = (...args: unknown[]) =>
    log.apply(console, [prefixString, css, ...args])

  return modifiedLogFunction
}
