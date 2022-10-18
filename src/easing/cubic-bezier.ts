const easings = [
  { title: 'Linear', id: 'linear', handles: [0, 0, 1, 1] },

  { title: 'Circ InOut', id: 'inOutCirc', handles: [0.85, 0, 0.15, 1] },
  { title: 'Circ In', id: 'inCirc', handles: [0.55, 0, 1, 0.45] },
  { title: 'Circ Out', id: 'outCirc', handles: [0, 0.55, 0.45, 1] },

  { title: 'Power4 InOut', id: 'inOutQuart', handles: [0.76, 0, 0.24, 1] },
  { title: 'Power4 In', id: 'inQuart', handles: [0.5, 0, 0.75, 0] },
  { title: 'Power4 Out', id: 'outQuart', handles: [0.25, 1, 0.5, 1] },

  { title: 'Power3 InOut', id: 'inOutCubic', handles: [0.65, 0, 0.35, 1] },
  { title: 'Power3 In', id: 'inCubic', handles: [0.32, 0, 0.67, 0] },
  { title: 'Power3 Out', id: 'outCubic', handles: [0.33, 1, 0.68, 1] },

  { title: 'Power2 InOut', id: 'inOutQuad', handles: [0.45, 0, 0.55, 1] },
  { title: 'Power2 In', id: 'inQuad', handles: [0.11, 0, 0.5, 0] },
  { title: 'Power2 Out', id: 'outQuad', handles: [0.5, 1, 0.89, 1] },

  { title: 'Power5 InOut', id: 'inOutQuint', handles: [0.83, 0, 0.17, 1] },
  { title: 'Power5 In', id: 'inQuint', handles: [0.64, 0, 0.78, 0] },
  { title: 'Power5 Out', id: 'outQuint', handles: [0.22, 1, 0.36, 1] },

  { title: 'Spring InOut', id: 'inOutBack', handles: [0.68, -0.6, 0.32, 1.6] },
  { title: 'Spring In', id: 'inBack', handles: [0.36, 0, 0.66, -0.56] },
  { title: 'Spring Out', id: 'outBack', handles: [0.34, 1.56, 0.64, 1] },

  { title: 'Quick Spring', id: 'inOutQS', handles: [0.75, -0.25, 0.25, 1.25] },
  {
    title: 'Quick Spring2',
    id: 'inOutQS2',
    handles: [0.81, -0.27, 0.19, 1.27],
  },
  {
    title: 'Quick Spring3',
    id: 'inOutQS3',
    handles: [0.87, -0.29, 0.13, 1.29],
  },

  { title: 'Expo InOut', id: 'inOutExpo', handles: [0.87, 0, 0.13, 1] },
  { title: 'Expo In', id: 'inExpo', handles: [0.7, 0, 0.84, 0] },
  { title: 'Expo Out', id: 'outExpo', handles: [0.16, 1, 0.3, 1] },

  { title: 'Sine InOut', id: 'inOutSine', handles: [0.37, 0, 0.63, 1] },
  { title: 'Sine In', id: 'inSine', handles: [0.12, 0, 0.39, 0] },
  { title: 'Sine Out', id: 'outSine', handles: [0.61, 1, 0.88, 1] },
] as const

export const easingKeys = easings.map((ease) => ease.id)
export type EasingKeys = typeof easingKeys[number]
export type EasingHandles = [number, number, number, number]

const handles = Object.fromEntries(easings.map((ease) => [ease.id, ease.handles])) as Record<
  EasingKeys,
  EasingHandles
>

const css = Object.fromEntries(
  easings.map((ease) => [ease.id, `cubic-bezier(${ease.handles.join(', ')})`])
) as Record<EasingKeys, string>

const selections = easings.map((ease) => ({ id: ease.id, title: ease.title }))

export const eases = {
  handles,
  css,
  selections,
}

// Easing-As-Functions

// export const easings = [
//   // no easing, no acceleration
//   { title: 'Linear', id: 'linear' as const, fn: (t: number) => t },
//   {
//     title: 'Circuar InOut',
//     id: 'easeInOutCirc' as const,
//     fn: (t: number) =>
//       t < 0.5
//         ? (1 - (1 - Math.pow(2 * t, 2)) ** 0.5) / 2
//         : ((1 - Math.pow(-2 * t + 2, 2)) ** 0.5 + 1) / 2,
//   },
//   // accelerating from zero velocity
//   { title: 'Power 2 In', id: 'easeInQuad' as const, fn: (t: number) => t * t },
//   // decelerating to zero velocity
//   { title: 'Power 2 Out', id: 'easeOutQuad' as const, fn: (t: number) => t * (2 - t) },
//   // acceleration until halfway, then deceleration
//   {
//     title: 'Power 2 InOut',
//     id: 'easeInOutQuad' as const,
//     fn: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
//   },
//   // accelerating from zero velocity
//   { title: 'Power 3 In', id: 'easeInCubic' as const, fn: (t: number) => t * t * t },
//   // decelerating to zero velocity
//   { title: 'Power 3 Out', id: 'easeOutCubic' as const, fn: (t: number) => --t * t * t + 1 },
//   // acceleration until halfway, then deceleration
//   {
//     title: 'Power 3 InOut',
//     id: 'easeInOutCubic' as const,
//     fn: (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
//   },
//   // accelerating from zero velocity
//   { title: 'Power 4 In', id: 'easeInQuart' as const, fn: (t: number) => t * t * t * t },
//   // decelerating to zero velocity
//   { title: 'Power 4 Out', id: 'easeOutQuart' as const, fn: (t: number) => 1 - --t * t * t * t },
//   // acceleration until halfway, then deceleration
//   {
//     title: 'Power 4 InOut',
//     id: 'easeInOutQuart' as const,
//     fn: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
//   },
//   // accelerating from zero velocity
//   { title: 'Power 5 In', id: 'easeInQuint' as const, fn: (t: number) => t * t * t * t * t },
//   // decelerating to zero velocity
//   { title: 'Power 5 Out', id: 'easeOutQuint' as const, fn: (t: number) => 1 + --t * t * t * t * t },
//   // acceleration until halfway, then deceleration
//   {
//     title: 'Power 5 InOut',
//     id: 'easeInOutQuint' as const,
//     fn: (t: number) => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
//   },
// ];
