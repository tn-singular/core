export function lerp(t, v0, v1) {
    return v0 * (1 - t) + v1 * t;
}
export function interpolate(t, [i0, i1], [o0, o1]) {
    return o0 + ((o1 - o0) / (i1 - i0)) * (t - i0);
}
//# sourceMappingURL=interpolation.js.map