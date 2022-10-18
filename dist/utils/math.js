export function round(value, dp = 2) {
    const order = 10 ** dp;
    return Math.floor(value * order) / order;
}
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
//# sourceMappingURL=math.js.map