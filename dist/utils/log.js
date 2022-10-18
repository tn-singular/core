export function prependConsoleLog(prefix) {
    const log = console.log;
    const prefixString = `%c${prefix}`;
    const css = 'background:#b952ff;padding:0px 8px;border-radius:9em;';
    const modifiedLogFunction = (...args) => log.apply(console, [prefixString, css, ...args]);
    return modifiedLogFunction;
}
//# sourceMappingURL=log.js.map