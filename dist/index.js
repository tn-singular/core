// src/color/tailwind.ts
var tw = {
  black: { r: 0, g: 0, b: 0, a: 1 },
  white: { r: 255, g: 255, b: 255, a: 1 },
  slate: {
    "50": { r: 248, g: 250, b: 252, a: 1 },
    "100": { r: 241, g: 245, b: 249, a: 1 },
    "200": { r: 226, g: 232, b: 240, a: 1 },
    "300": { r: 203, g: 213, b: 225, a: 1 },
    "400": { r: 148, g: 163, b: 184, a: 1 },
    "500": { r: 100, g: 116, b: 139, a: 1 },
    "600": { r: 71, g: 85, b: 105, a: 1 },
    "700": { r: 51, g: 65, b: 85, a: 1 },
    "800": { r: 30, g: 41, b: 59, a: 1 },
    "900": { r: 15, g: 23, b: 42, a: 1 }
  },
  gray: {
    "50": { r: 249, g: 250, b: 251, a: 1 },
    "100": { r: 243, g: 244, b: 246, a: 1 },
    "200": { r: 229, g: 231, b: 235, a: 1 },
    "300": { r: 209, g: 213, b: 219, a: 1 },
    "400": { r: 156, g: 163, b: 175, a: 1 },
    "500": { r: 107, g: 114, b: 128, a: 1 },
    "600": { r: 75, g: 85, b: 99, a: 1 },
    "700": { r: 55, g: 65, b: 81, a: 1 },
    "800": { r: 31, g: 41, b: 55, a: 1 },
    "900": { r: 17, g: 24, b: 39, a: 1 }
  },
  zinc: {
    "50": { r: 250, g: 250, b: 250, a: 1 },
    "100": { r: 244, g: 244, b: 245, a: 1 },
    "200": { r: 228, g: 228, b: 231, a: 1 },
    "300": { r: 212, g: 212, b: 216, a: 1 },
    "400": { r: 161, g: 161, b: 170, a: 1 },
    "500": { r: 113, g: 113, b: 122, a: 1 },
    "600": { r: 82, g: 82, b: 91, a: 1 },
    "700": { r: 63, g: 63, b: 70, a: 1 },
    "800": { r: 39, g: 39, b: 42, a: 1 },
    "900": { r: 24, g: 24, b: 27, a: 1 }
  },
  neutral: {
    "50": { r: 250, g: 250, b: 250, a: 1 },
    "100": { r: 245, g: 245, b: 245, a: 1 },
    "200": { r: 229, g: 229, b: 229, a: 1 },
    "300": { r: 212, g: 212, b: 212, a: 1 },
    "400": { r: 163, g: 163, b: 163, a: 1 },
    "500": { r: 115, g: 115, b: 115, a: 1 },
    "600": { r: 82, g: 82, b: 82, a: 1 },
    "700": { r: 64, g: 64, b: 64, a: 1 },
    "800": { r: 38, g: 38, b: 38, a: 1 },
    "900": { r: 23, g: 23, b: 23, a: 1 }
  },
  stone: {
    "50": { r: 250, g: 250, b: 249, a: 1 },
    "100": { r: 245, g: 245, b: 244, a: 1 },
    "200": { r: 231, g: 229, b: 228, a: 1 },
    "300": { r: 214, g: 211, b: 209, a: 1 },
    "400": { r: 168, g: 162, b: 158, a: 1 },
    "500": { r: 120, g: 113, b: 108, a: 1 },
    "600": { r: 87, g: 83, b: 78, a: 1 },
    "700": { r: 68, g: 64, b: 60, a: 1 },
    "800": { r: 41, g: 37, b: 36, a: 1 },
    "900": { r: 28, g: 25, b: 23, a: 1 }
  },
  red: {
    "50": { r: 254, g: 242, b: 242, a: 1 },
    "100": { r: 254, g: 226, b: 226, a: 1 },
    "200": { r: 254, g: 202, b: 202, a: 1 },
    "300": { r: 252, g: 165, b: 165, a: 1 },
    "400": { r: 248, g: 113, b: 113, a: 1 },
    "500": { r: 239, g: 68, b: 68, a: 1 },
    "600": { r: 220, g: 38, b: 38, a: 1 },
    "700": { r: 185, g: 28, b: 28, a: 1 },
    "800": { r: 153, g: 27, b: 27, a: 1 },
    "900": { r: 127, g: 29, b: 29, a: 1 }
  },
  orange: {
    "50": { r: 255, g: 247, b: 237, a: 1 },
    "100": { r: 255, g: 237, b: 213, a: 1 },
    "200": { r: 254, g: 215, b: 170, a: 1 },
    "300": { r: 253, g: 186, b: 116, a: 1 },
    "400": { r: 251, g: 146, b: 60, a: 1 },
    "500": { r: 249, g: 115, b: 22, a: 1 },
    "600": { r: 234, g: 88, b: 12, a: 1 },
    "700": { r: 194, g: 65, b: 12, a: 1 },
    "800": { r: 154, g: 52, b: 18, a: 1 },
    "900": { r: 124, g: 45, b: 18, a: 1 }
  },
  amber: {
    "50": { r: 255, g: 251, b: 235, a: 1 },
    "100": { r: 254, g: 243, b: 199, a: 1 },
    "200": { r: 253, g: 230, b: 138, a: 1 },
    "300": { r: 252, g: 211, b: 77, a: 1 },
    "400": { r: 251, g: 191, b: 36, a: 1 },
    "500": { r: 245, g: 158, b: 11, a: 1 },
    "600": { r: 217, g: 119, b: 6, a: 1 },
    "700": { r: 180, g: 83, b: 9, a: 1 },
    "800": { r: 146, g: 64, b: 14, a: 1 },
    "900": { r: 120, g: 53, b: 15, a: 1 }
  },
  yellow: {
    "50": { r: 254, g: 252, b: 232, a: 1 },
    "100": { r: 254, g: 249, b: 195, a: 1 },
    "200": { r: 254, g: 240, b: 138, a: 1 },
    "300": { r: 253, g: 224, b: 71, a: 1 },
    "400": { r: 250, g: 204, b: 21, a: 1 },
    "500": { r: 234, g: 179, b: 8, a: 1 },
    "600": { r: 202, g: 138, b: 4, a: 1 },
    "700": { r: 161, g: 98, b: 7, a: 1 },
    "800": { r: 133, g: 77, b: 14, a: 1 },
    "900": { r: 113, g: 63, b: 18, a: 1 }
  },
  lime: {
    "50": { r: 247, g: 254, b: 231, a: 1 },
    "100": { r: 236, g: 252, b: 203, a: 1 },
    "200": { r: 217, g: 249, b: 157, a: 1 },
    "300": { r: 190, g: 242, b: 100, a: 1 },
    "400": { r: 163, g: 230, b: 53, a: 1 },
    "500": { r: 132, g: 204, b: 22, a: 1 },
    "600": { r: 101, g: 163, b: 13, a: 1 },
    "700": { r: 77, g: 124, b: 15, a: 1 },
    "800": { r: 63, g: 98, b: 18, a: 1 },
    "900": { r: 54, g: 83, b: 20, a: 1 }
  },
  green: {
    "50": { r: 240, g: 253, b: 244, a: 1 },
    "100": { r: 220, g: 252, b: 231, a: 1 },
    "200": { r: 187, g: 247, b: 208, a: 1 },
    "300": { r: 134, g: 239, b: 172, a: 1 },
    "400": { r: 74, g: 222, b: 128, a: 1 },
    "500": { r: 34, g: 197, b: 94, a: 1 },
    "600": { r: 22, g: 163, b: 74, a: 1 },
    "700": { r: 21, g: 128, b: 61, a: 1 },
    "800": { r: 22, g: 101, b: 52, a: 1 },
    "900": { r: 20, g: 83, b: 45, a: 1 }
  },
  emerald: {
    "50": { r: 236, g: 253, b: 245, a: 1 },
    "100": { r: 209, g: 250, b: 229, a: 1 },
    "200": { r: 167, g: 243, b: 208, a: 1 },
    "300": { r: 110, g: 231, b: 183, a: 1 },
    "400": { r: 52, g: 211, b: 153, a: 1 },
    "500": { r: 16, g: 185, b: 129, a: 1 },
    "600": { r: 5, g: 150, b: 105, a: 1 },
    "700": { r: 4, g: 120, b: 87, a: 1 },
    "800": { r: 6, g: 95, b: 70, a: 1 },
    "900": { r: 6, g: 78, b: 59, a: 1 }
  },
  teal: {
    "50": { r: 240, g: 253, b: 250, a: 1 },
    "100": { r: 204, g: 251, b: 241, a: 1 },
    "200": { r: 153, g: 246, b: 228, a: 1 },
    "300": { r: 94, g: 234, b: 212, a: 1 },
    "400": { r: 45, g: 212, b: 191, a: 1 },
    "500": { r: 20, g: 184, b: 166, a: 1 },
    "600": { r: 13, g: 148, b: 136, a: 1 },
    "700": { r: 15, g: 118, b: 110, a: 1 },
    "800": { r: 17, g: 94, b: 89, a: 1 },
    "900": { r: 19, g: 78, b: 74, a: 1 }
  },
  cyan: {
    "50": { r: 236, g: 254, b: 255, a: 1 },
    "100": { r: 207, g: 250, b: 254, a: 1 },
    "200": { r: 165, g: 243, b: 252, a: 1 },
    "300": { r: 103, g: 232, b: 249, a: 1 },
    "400": { r: 34, g: 211, b: 238, a: 1 },
    "500": { r: 6, g: 182, b: 212, a: 1 },
    "600": { r: 8, g: 145, b: 178, a: 1 },
    "700": { r: 14, g: 116, b: 144, a: 1 },
    "800": { r: 21, g: 94, b: 117, a: 1 },
    "900": { r: 22, g: 78, b: 99, a: 1 }
  },
  sky: {
    "50": { r: 240, g: 249, b: 255, a: 1 },
    "100": { r: 224, g: 242, b: 254, a: 1 },
    "200": { r: 186, g: 230, b: 253, a: 1 },
    "300": { r: 125, g: 211, b: 252, a: 1 },
    "400": { r: 56, g: 189, b: 248, a: 1 },
    "500": { r: 14, g: 165, b: 233, a: 1 },
    "600": { r: 2, g: 132, b: 199, a: 1 },
    "700": { r: 3, g: 105, b: 161, a: 1 },
    "800": { r: 7, g: 89, b: 133, a: 1 },
    "900": { r: 12, g: 74, b: 110, a: 1 }
  },
  blue: {
    "50": { r: 239, g: 246, b: 255, a: 1 },
    "100": { r: 219, g: 234, b: 254, a: 1 },
    "200": { r: 191, g: 219, b: 254, a: 1 },
    "300": { r: 147, g: 197, b: 253, a: 1 },
    "400": { r: 96, g: 165, b: 250, a: 1 },
    "500": { r: 59, g: 130, b: 246, a: 1 },
    "600": { r: 37, g: 99, b: 235, a: 1 },
    "700": { r: 29, g: 78, b: 216, a: 1 },
    "800": { r: 30, g: 64, b: 175, a: 1 },
    "900": { r: 30, g: 58, b: 138, a: 1 }
  },
  indigo: {
    "50": { r: 238, g: 242, b: 255, a: 1 },
    "100": { r: 224, g: 231, b: 255, a: 1 },
    "200": { r: 199, g: 210, b: 254, a: 1 },
    "300": { r: 165, g: 180, b: 252, a: 1 },
    "400": { r: 129, g: 140, b: 248, a: 1 },
    "500": { r: 99, g: 102, b: 241, a: 1 },
    "600": { r: 79, g: 70, b: 229, a: 1 },
    "700": { r: 67, g: 56, b: 202, a: 1 },
    "800": { r: 55, g: 48, b: 163, a: 1 },
    "900": { r: 49, g: 46, b: 129, a: 1 }
  },
  violet: {
    "50": { r: 245, g: 243, b: 255, a: 1 },
    "100": { r: 237, g: 233, b: 254, a: 1 },
    "200": { r: 221, g: 214, b: 254, a: 1 },
    "300": { r: 196, g: 181, b: 253, a: 1 },
    "400": { r: 167, g: 139, b: 250, a: 1 },
    "500": { r: 139, g: 92, b: 246, a: 1 },
    "600": { r: 124, g: 58, b: 237, a: 1 },
    "700": { r: 109, g: 40, b: 217, a: 1 },
    "800": { r: 91, g: 33, b: 182, a: 1 },
    "900": { r: 76, g: 29, b: 149, a: 1 }
  },
  purple: {
    "50": { r: 250, g: 245, b: 255, a: 1 },
    "100": { r: 243, g: 232, b: 255, a: 1 },
    "200": { r: 233, g: 213, b: 255, a: 1 },
    "300": { r: 216, g: 180, b: 254, a: 1 },
    "400": { r: 192, g: 132, b: 252, a: 1 },
    "500": { r: 168, g: 85, b: 247, a: 1 },
    "600": { r: 147, g: 51, b: 234, a: 1 },
    "700": { r: 126, g: 34, b: 206, a: 1 },
    "800": { r: 107, g: 33, b: 168, a: 1 },
    "900": { r: 88, g: 28, b: 135, a: 1 }
  },
  fuchsia: {
    "50": { r: 253, g: 244, b: 255, a: 1 },
    "100": { r: 250, g: 232, b: 255, a: 1 },
    "200": { r: 245, g: 208, b: 254, a: 1 },
    "300": { r: 240, g: 171, b: 252, a: 1 },
    "400": { r: 232, g: 121, b: 249, a: 1 },
    "500": { r: 217, g: 70, b: 239, a: 1 },
    "600": { r: 192, g: 38, b: 211, a: 1 },
    "700": { r: 162, g: 28, b: 175, a: 1 },
    "800": { r: 134, g: 25, b: 143, a: 1 },
    "900": { r: 112, g: 26, b: 117, a: 1 }
  },
  pink: {
    "50": { r: 253, g: 242, b: 248, a: 1 },
    "100": { r: 252, g: 231, b: 243, a: 1 },
    "200": { r: 251, g: 207, b: 232, a: 1 },
    "300": { r: 249, g: 168, b: 212, a: 1 },
    "400": { r: 244, g: 114, b: 182, a: 1 },
    "500": { r: 236, g: 72, b: 153, a: 1 },
    "600": { r: 219, g: 39, b: 119, a: 1 },
    "700": { r: 190, g: 24, b: 93, a: 1 },
    "800": { r: 157, g: 23, b: 77, a: 1 },
    "900": { r: 131, g: 24, b: 67, a: 1 }
  },
  rose: {
    "50": { r: 255, g: 241, b: 242, a: 1 },
    "100": { r: 255, g: 228, b: 230, a: 1 },
    "200": { r: 254, g: 205, b: 211, a: 1 },
    "300": { r: 253, g: 164, b: 175, a: 1 },
    "400": { r: 251, g: 113, b: 133, a: 1 },
    "500": { r: 244, g: 63, b: 94, a: 1 },
    "600": { r: 225, g: 29, b: 72, a: 1 },
    "700": { r: 190, g: 18, b: 60, a: 1 },
    "800": { r: 159, g: 18, b: 57, a: 1 },
    "900": { r: 136, g: 19, b: 55, a: 1 }
  }
};

// src/utils/math.ts
function round(value, dp = 2) {
  const order = 10 ** dp;
  return Math.floor(value * order) / order;
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// src/color/color.ts
var isValidHex = (hex) => /^([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
var getChunksFromString = (str, chunkSize) => str.match(new RegExp(`.{${chunkSize}}`, "g"));
var convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);
var getAlphafloat = (a) => typeof a === "undefined" ? 1 : clamp(a / 255, 0, 1);
var hexToRGBA = (hex) => {
  if (!isValidHex(hex)) {
    return void 0;
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return { r, g, b, a: getAlphafloat(a) };
};

// src/easing/cubic-bezier.ts
var easings = [
  { title: "Linear", id: "linear", handles: [0, 0, 1, 1] },
  { title: "Circ InOut", id: "inOutCirc", handles: [0.85, 0, 0.15, 1] },
  { title: "Circ In", id: "inCirc", handles: [0.55, 0, 1, 0.45] },
  { title: "Circ Out", id: "outCirc", handles: [0, 0.55, 0.45, 1] },
  { title: "Power4 InOut", id: "inOutQuart", handles: [0.76, 0, 0.24, 1] },
  { title: "Power4 In", id: "inQuart", handles: [0.5, 0, 0.75, 0] },
  { title: "Power4 Out", id: "outQuart", handles: [0.25, 1, 0.5, 1] },
  { title: "Power3 InOut", id: "inOutCubic", handles: [0.65, 0, 0.35, 1] },
  { title: "Power3 In", id: "inCubic", handles: [0.32, 0, 0.67, 0] },
  { title: "Power3 Out", id: "outCubic", handles: [0.33, 1, 0.68, 1] },
  { title: "Power2 InOut", id: "inOutQuad", handles: [0.45, 0, 0.55, 1] },
  { title: "Power2 In", id: "inQuad", handles: [0.11, 0, 0.5, 0] },
  { title: "Power2 Out", id: "outQuad", handles: [0.5, 1, 0.89, 1] },
  { title: "Power5 InOut", id: "inOutQuint", handles: [0.83, 0, 0.17, 1] },
  { title: "Power5 In", id: "inQuint", handles: [0.64, 0, 0.78, 0] },
  { title: "Power5 Out", id: "outQuint", handles: [0.22, 1, 0.36, 1] },
  { title: "Spring InOut", id: "inOutBack", handles: [0.68, -0.6, 0.32, 1.6] },
  { title: "Spring In", id: "inBack", handles: [0.36, 0, 0.66, -0.56] },
  { title: "Spring Out", id: "outBack", handles: [0.34, 1.56, 0.64, 1] },
  { title: "Quick Spring", id: "inOutQS", handles: [0.75, -0.25, 0.25, 1.25] },
  {
    title: "Quick Spring2",
    id: "inOutQS2",
    handles: [0.81, -0.27, 0.19, 1.27]
  },
  {
    title: "Quick Spring3",
    id: "inOutQS3",
    handles: [0.87, -0.29, 0.13, 1.29]
  },
  { title: "Expo InOut", id: "inOutExpo", handles: [0.87, 0, 0.13, 1] },
  { title: "Expo In", id: "inExpo", handles: [0.7, 0, 0.84, 0] },
  { title: "Expo Out", id: "outExpo", handles: [0.16, 1, 0.3, 1] },
  { title: "Sine InOut", id: "inOutSine", handles: [0.37, 0, 0.63, 1] },
  { title: "Sine In", id: "inSine", handles: [0.12, 0, 0.39, 0] },
  { title: "Sine Out", id: "outSine", handles: [0.61, 1, 0.88, 1] }
];
var easingKeys = easings.map((ease) => ease.id);
var handles = Object.fromEntries(easings.map((ease) => [ease.id, ease.handles]));
var css = Object.fromEntries(
  easings.map((ease) => [ease.id, `cubic-bezier(${ease.handles.join(", ")})`])
);
var selections = easings.map((ease) => ({ id: ease.id, title: ease.title }));
var eases = {
  handles,
  css,
  selections
};

// src/easing/interpolation.ts
function lerp(t, v0, v1) {
  return v0 * (1 - t) + v1 * t;
}
function interpolate(t, [i0, i1], [o0, o1]) {
  return o0 + (o1 - o0) / (i1 - i0) * (t - i0);
}
function loop(min, max, freq) {
  const deltaY = min + 1;
  const scaleY = (max - min) / 2;
  const scaleX = 2 * Math.PI / freq;
  return (frame) => {
    return (Math.sin(frame * scaleX - Math.PI / 2) + deltaY) * scaleY;
  };
}

// src/widget-ui/gui/tweakpane/init.ts
import { batch as batch2 } from "@preact/signals-core";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { Pane } from "tweakpane";
import * as TweakpaneImagePlugin from "tweakpane-image-plugin";

// src/widget-ui/gui/tweakpane/inputs/font.ts
function addFontInput(_folder) {
  return void 0;
}

// src/widget-ui/gui/tweakpane/inputs/number.ts
function addNumberInput({
  folder,
  field
}) {
  return folder.addInput({ [field.id]: field.defaultValue }, field.id, {
    min: field.min,
    max: field.max,
    step: field.step,
    label: field.title
  });
}

// src/widget-ui/gui/tweakpane/inputs/timecontrol.ts
import { batch } from "@preact/signals-core";
function addTimecontrolInput({
  folder,
  field,
  controls
}) {
  const opts = field.defaultValue;
  const startStop = folder.addButton({ title: "start", label: field.title });
  const reset = folder.addButton({ title: "reset", label: field.title });
  startStop.on("click", () => {
    const isRunning = opts.isRunning;
    const UTC = opts.UTC;
    const now = Date.now();
    if (isRunning) {
      batch(() => {
        controls[field.id].isRunning.value = false;
        controls[field.id].UTC.value = now;
        controls[field.id].ms.value = now - UTC;
      });
      startStop.title = "start";
    } else {
      batch(() => {
        controls[field.id].isRunning.value = true;
        controls[field.id].UTC.value = now;
      });
      startStop.title = "stop";
    }
  });
  reset.on("click", () => {
    batch(() => {
      controls[field.id].isRunning.value = false;
      controls[field.id].UTC.value = Date.now();
      controls[field.id].ms.value = 0;
    });
    startStop.title = "start";
  });
  return void 0;
}

// src/widget-ui/gui/tweakpane/init.ts
function addTweakpaneInputs({
  controls,
  model,
  parsers,
  buttonHandlers
}) {
  const pane = new Pane();
  pane.registerPlugin(TweakpaneImagePlugin);
  pane.registerPlugin(EssentialsPlugin);
  const folders = [];
  if ("in" in controls) {
    const stateFolder = pane.addFolder({ title: "In / Out" });
    const stateInput = stateFolder.addInput({ in: controls.in.peek() }, "in", { label: "In" });
    stateInput.on("change", (val) => {
      controls.in.value = val.value;
    });
  }
  const groupLookup = {};
  for (const [i, group] of model.groups.entries()) {
    const folder = pane.addFolder({
      title: group.title,
      expanded: false
    });
    folders.push(folder);
    for (const childId of [...group.childIds, group.activeId]) {
      if (childId)
        groupLookup[childId] = i;
    }
  }
  for (const field of model.fields) {
    const folderIndex = groupLookup[field.id];
    let input = void 0;
    switch (field.type) {
      case "gradient": {
        break;
      }
      case "image": {
        input = folders[folderIndex].addInput({ [field.id]: field.defaultValue }, field.id, {
          view: "input-image",
          label: field.title
        });
        break;
      }
      case "button": {
        const button = folders[folderIndex].addButton({ title: field.title });
        button.on("click", () => buttonHandlers[field.id](field.id));
        break;
      }
      case "number": {
        input = addNumberInput({ field, folder: folders[folderIndex] });
        break;
      }
      case "font": {
        input = addFontInput(folders[folderIndex]);
        break;
      }
      case "selection": {
        input = folders[folderIndex].addInput({ [field.id]: field.defaultValue }, field.id, {
          label: field.title,
          options: Object.fromEntries([
            // @ts-expect-error field is not narrowed in this switch
            ...field.selections.map((selection) => [
              selection.title,
              selection.id
            ])
          ])
        });
        break;
      }
      case "timecontrol": {
        input = addTimecontrolInput({ folder: folders[folderIndex], field, controls });
        break;
      }
      default: {
        try {
          input = folders[folderIndex].addInput({ [field.id]: field.defaultValue }, field.id, {
            label: field.title
          });
        } catch (e) {
          console.error(
            `Couldn't add input ${field.title} in group ${folders[groupLookup[field.id]].title}`,
            field,
            e
          );
        }
        break;
      }
    }
    if (input) {
      input.on("change", ({ presetKey, value }) => {
        if (!presetKey)
          return;
        if (value.src) {
          controls[field.id].value = value.src;
        } else {
          controls[field.id].value = Object.hasOwn(parsers, presetKey) ? parsers[presetKey](value) : value;
        }
      });
    }
  }
  enableTweakpaneLocalStorage(pane, controls, parsers);
  return { pane, folders };
}
var tweakpaneStorageKey = "zentrum-tweakpane";
function enableTweakpaneLocalStorage(pane, controls, parsers) {
  const defaults = pane.exportPreset();
  const localData = localStorage.getItem(tweakpaneStorageKey);
  if (localData) {
    batch2(() => pane.importPreset(JSON.parse(localData)));
  }
  pane.on(
    "change",
    () => localStorage.setItem(tweakpaneStorageKey, JSON.stringify(pane.exportPreset()))
  );
  const refresh = pane.addButton({ title: "Refresh", label: "\u{1F34B}", index: 0 });
  refresh.on("click", () => pane.refresh());
  const reset = pane.addButton({ title: "Reset", label: "\u2728", index: 0 });
  reset.on(
    "click",
    () => batch2(() => {
      pane.importPreset(defaults);
      for (const [key, value] of Object.entries(defaults)) {
        const parser = parsers[key];
        controls[key].value = parser ? parser(value) : value;
      }
    })
  );
}

// src/widget-ui/gui/init.ts
var initGui = (ui2) => addTweakpaneInputs(ui2);

// src/widget-ui/fields/button.ts
function createButtonField(options) {
  const field = {
    type: "button",
    ...options
  };
  return field;
}

// src/widget-ui/fields/checkbox.ts
function createCheckboxField(boolean, options) {
  const field = {
    type: "checkbox",
    defaultValue: boolean,
    ...options
  };
  return field;
}

// src/widget-ui/utils.ts
var identity = (id) => id;
var camel2title = (camelCase) => camelCase.replace(/(?<!\s)([A-Z0-9](?![A-Z0-9]))/g, (match) => ` ${match}`).replace(/[a-z](?=[0-9])/g, (match) => `${match} `).replace(/^.|\s./g, (match) => match.toUpperCase()).trim();
var parserWarning = (value, targetType) => console.warn(`WARN: Cannot parse as ${targetType} -`, value);
function keys(obj) {
  return Object.keys(obj);
}
function entries(obj) {
  return Object.entries(obj);
}
function fromEntries(entries2) {
  return Object.fromEntries(entries2);
}
function mapValues(obj, mapper) {
  return fromEntries(entries(obj).map(([key, value]) => [key, mapper(key, value)]));
}
function mapEntries(obj, mapper) {
  return fromEntries(entries(obj).map(([key, value]) => mapper(key, value)));
}
var prefixKeys = (field, keyPrefix) => {
  return mapEntries(field, (key, value) => [`${keyPrefix}${String(key)}`, value]);
};

// src/widget-ui/parsers.ts
var colorToRgba = (value) => {
  if (typeof value === "string") {
    const hex = value.startsWith("#") ? value.substring(1) : value;
    const rgba = hexToRGBA(hex);
    if (!rgba) {
      parserWarning(hex, "hexToRGBA");
      return { r: 0, g: 0, b: 0, a: 0 };
    }
    return rgba;
  }
  if (typeof value === "object" && "r" in value && "g" in value && "b" in value) {
    return { r: value.r, g: value.g, b: value.b, a: "a" in value ? value.a : 1 };
  }
  parserWarning(value, "color");
  return { r: 0, g: 0, b: 0, a: 0 };
};
var colorToRgbaString = (value) => {
  const { r, g, b, a } = colorToRgba(value);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// src/widget-ui/fields/color.ts
function createColorField(color = "#cccccc", options) {
  const field = {
    type: "color",
    defaultValue: colorToRgba(color),
    parser: colorFieldParser,
    ...options
  };
  return field;
}
var colorFieldParser = (value) => {
  if (typeof value === "string") {
    const hex = value.startsWith("#") ? value.substring(1) : value;
    const rgba = hexToRGBA(hex);
    if (!rgba) {
      parserWarning(hex, "hexToRGBA");
      return { r: 0, g: 0, b: 0, a: 0 };
    }
    return rgba;
  }
  if (typeof value === "object" && "r" in value && "g" in value && "b" in value) {
    return { r: value.r, g: value.g, b: value.b, a: "a" in value ? value.a : 1 };
  }
  parserWarning(value, "color");
  return { r: 0, g: 0, b: 0, a: 0 };
};

// src/widget-ui/fields/font.ts
function createFontField({
  family = "Montserrat",
  weight = 500,
  alignment = "center",
  italic = false,
  underline = false,
  ...options
}) {
  const field = {
    type: "font",
    defaultValue: {
      alignment,
      italic,
      underline,
      fontData: {
        family,
        weight: weight.toString()
      }
    },
    parser: fontFieldParser,
    ...options
  };
  return field;
}
function isFontObject(value) {
  return !!(value && typeof value === "object" && "fontData" in value);
}
var fontFieldParser = (value) => {
  if (!isFontObject(value)) {
    parserWarning(value, "font");
    return {
      fontData: { family: "Montserrat", weight: "500" },
      alignment: "left",
      italic: false,
      underline: false
    };
  }
  return value;
};

// src/widget-ui/fields/gradient.ts
function createGradientField(stops = ["#00ffff", "#ff00ff"], options) {
  const field = {
    type: "gradient",
    defaultValue: {
      type: "linear",
      solidColor: colorToRgba(stops[0]),
      stops: stops.map((stop, i) => ({
        offset: Math.round(100 * (i / (stops.length - 1))) / 100,
        opacity: 1,
        color: stop
      })),
      offset: 0,
      angle: 0,
      scale: 100,
      spreadMethod: "pad",
      keepAspect: false,
      centerX: 50,
      centerY: 50,
      radius: 50,
      focalAngle: 0,
      focalDistance: 0
    },
    parser: gradientFieldParser,
    ...options
  };
  return field;
}
var gradientFieldParser = (value) => {
  const asString = value && value.toString();
  if (!asString) {
    parserWarning(value, "string");
    return "";
  }
  return asString;
};

// src/widget-ui/fields/text.ts
function createTextField(str, options) {
  const field = {
    type: "text",
    defaultValue: str ?? "",
    parser: textFieldParser,
    ...options
  };
  return field;
}
var textFieldParser = (value) => {
  const asString = value && value.toString();
  if (!asString) {
    parserWarning(value, "string");
    return "";
  }
  return asString;
};

// src/widget-ui/fields/image.ts
function createImageField(url, options) {
  const field = {
    type: "image",
    defaultValue: url ?? "",
    parser: textFieldParser,
    ...options
  };
  return field;
}

// src/widget-ui/fields/info.ts
function createInfoField(str, options) {
  const field = {
    type: "info",
    defaultValue: str,
    parser: textFieldParser,
    ...options
  };
  return field;
}

// src/widget-ui/fields/json.ts
function createJSONField(obj, options) {
  const field = {
    type: "json",
    defaultValue: obj ?? {},
    parser: jsonFieldParser,
    width: 0,
    height: 72,
    ...options
  };
  return field;
}
var jsonFieldParser = (value) => {
  if (!value || typeof value !== "string") {
    parserWarning(value, "JSON");
    return {};
  }
  try {
    const parsed = JSON.parse(value);
    if (typeof parsed === "object" && !Array.isArray(parsed)) {
      parserWarning(value, "JSON (not an object)");
      return {};
    }
    return parsed;
  } catch {
    parserWarning(value, "JSON");
    return {};
  }
};

// src/widget-ui/fields/number.ts
function createNumberField(number, options) {
  const field = {
    type: "number",
    defaultValue: number,
    parser: numberFieldParser,
    ...options
  };
  return field;
}
var numberFieldParser = (value) => {
  const asNum = Number(value);
  if (Number.isNaN(asNum)) {
    parserWarning(value, "number");
    return 0;
  }
  return asNum;
};

// src/widget-ui/fields/selection.ts
function createSelectionField(selection, selections2, options) {
  const field = {
    type: "selection",
    defaultValue: selection,
    parser: textFieldParser,
    selections: selections2.map((option) => ({ id: option, title: camel2title(option) })),
    ...options
  };
  return field;
}

// src/widget-ui/fields/textarea.ts
function createTextAreaField(str, options) {
  const field = {
    type: "textarea",
    defaultValue: str ?? "",
    parser: textFieldParser,
    rows: 3,
    cols: 10,
    ...options
  };
  return field;
}

// src/widget-ui/fields/timecontrol.ts
function createTimeControlField(options) {
  const field = {
    type: "timecontrol",
    defaultValue: {
      ms: 0,
      UTC: Date.now(),
      isRunning: false
    },
    parser: timeControlFieldParser,
    ...options
  };
  return field;
}
var timeControlFieldParser = (value) => {
  const asString = value && value.toString();
  if (!asString) {
    parserWarning(value, "string");
    return "";
  }
  return asString;
};

// src/widget-ui/builders.ts
var ui = {
  button: createButtonField,
  checkbox: createCheckboxField,
  color: createColorField,
  font: createFontField,
  gradient: createGradientField,
  image: createImageField,
  info: createInfoField,
  json: createJSONField,
  number: createNumberField,
  selection: createSelectionField,
  text: createTextField,
  textarea: createTextAreaField,
  timecontrol: createTimeControlField
};

// src/widget-ui/define-ui.ts
function defineUI(ui2) {
  const uiWithDefaults = mapValues(ui2, (groupId, groupDefinition) => {
    const fields = mapValues(groupDefinition.fields, (fieldId, fieldInput) => {
      const input = fieldInput;
      return {
        id: fieldId,
        title: camel2title(fieldId),
        ...input
      };
    });
    return {
      id: groupId,
      title: camel2title(String(groupId)),
      ...groupDefinition,
      fields
    };
  });
  const allFieldEntries = Object.entries(uiWithDefaults).flatMap(
    ([_key, value]) => Object.entries(value.fields)
  );
  const buttonEntries = allFieldEntries.filter(([_key, value]) => value.type === "button");
  const controlEntries = allFieldEntries.filter(([_key, value]) => value.type !== "button");
  const buttons = buttonEntries.map(([key]) => key);
  const controls = Object.fromEntries(
    controlEntries.map(([key, value]) => {
      const defaultValue = value.defaultValue;
      return [key, "parser" in value ? value.parser(defaultValue) : defaultValue];
    })
  );
  const parsers = Object.fromEntries(
    controlEntries.map(([key, value]) => [key, "parser" in value && value.parser]).filter(([_key, value]) => Boolean(value))
  );
  const model = uiModel(uiWithDefaults, allFieldEntries);
  return {
    model,
    buttons,
    controls,
    parsers
  };
}
function uiModel(ui2, fieldEntries) {
  return {
    groups: Object.entries(ui2).map(([key, value]) => {
      const { fields, ...uiGroupDefinition } = value;
      return {
        id: key,
        width: "single",
        title: camel2title(key),
        ...uiGroupDefinition,
        childIds: Object.keys(fields).filter((key2) => key2 !== uiGroupDefinition.activeId)
      };
    }),
    fields: fieldEntries.map(([_, value]) => {
      if ("parser" in value) {
        const { parser, ...fieldDefinition } = value;
        return fieldDefinition;
      }
      return value;
    })
  };
}

// src/widget-ui/output-ui.ts
import { isNode } from "browser-or-node";
import clipboard from "clipboardy";
import pc from "picocolors";
async function outputUI(model) {
  if (isNode) {
    await import("fs").then((mod) => {
      const writeFile = mod.writeFile;
      const definition = JSON.stringify({ model });
      clipboard.writeSync(definition);
      console.log(pc.green(`\u{1F4CB} Copied UI Model @ ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`));
      writeFile("ui.json", definition, () => void 0);
      console.log(pc.green(`\u{1F4BE} Updated ui.json`));
    });
  }
}

// src/utils/log.ts
function prependConsoleLog(prefix) {
  const log = console.log;
  const prefixString = `%c${prefix}`;
  const css2 = "background:#b952ff;padding:0px 8px;border-radius:9em;";
  const modifiedLogFunction = (...args) => log.apply(console, [prefixString, css2, ...args]);
  return modifiedLogFunction;
}

// src/utils/random.ts
function mulberry32(a) {
  let t = a + 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hashCode(str) {
  let i = 0;
  let chr = 0;
  let hash = 0;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}
var random = (seed, dummy) => {
  if (dummy !== void 0) {
    throw new TypeError("random() takes only one argument");
  }
  if (seed === null) {
    return Math.random();
  }
  if (typeof seed === "string") {
    return mulberry32(hashCode(seed));
  }
  if (typeof seed === "number") {
    return mulberry32(seed * 1e10);
  }
  throw new Error("random() argument must be a number or a string");
};
function shuffleArrayInPlace(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// src/utils/sleep.ts
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}
export {
  camel2title,
  clamp,
  colorToRgba,
  colorToRgbaString,
  defineUI,
  eases,
  easingKeys,
  entries,
  fromEntries,
  hexToRGBA,
  identity,
  initGui,
  interpolate,
  keys,
  lerp,
  loop,
  mapEntries,
  mapValues,
  outputUI,
  parserWarning,
  prefixKeys,
  prependConsoleLog,
  random,
  round,
  shuffleArrayInPlace,
  sleep,
  tw,
  ui
};
