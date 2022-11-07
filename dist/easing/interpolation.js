export function lerp(t, v0, v1) {
    return v0 * (1 - t) + v1 * t;
}
export function interpolate(t, [i0, i1], [o0, o1]) {
    return o0 + ((o1 - o0) / (i1 - i0)) * (t - i0);
}
export function loop(min, max, freq) {
    // sin returns -1 to 1 over a period of 2*pi
    // assume 60fps
    const deltaY = min + 1; // we will add deltaMin to y to shift correctly
    const scaleY = (max - min) / 2; // sin's amplitude is 2
    const scaleX = (2 * Math.PI) / freq;
    return (frame) => {
        return (Math.sin(frame * scaleX - Math.PI / 2) + deltaY) * scaleY;
    };
}
//# sourceMappingURL=interpolation.js.map