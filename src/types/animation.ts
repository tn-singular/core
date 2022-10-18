import type { Expand } from './utils'

export interface SingularAnimation {
  TimelineLabel: 'In' | 'Out'
  TimelineAnchor: 'In' | 'Out1' | 'Out2'
  Event: Expand<PlayEvent | InitEvent | SeekEvent | JumpEvent>
  EventTerse: PlayEvent | InitEvent | SeekEvent | JumpEvent
  PlayEvent: Expand<PlayEvent>
  InitEvent: Expand<InitEvent>
  SeekEvent: Expand<SeekEvent>
  JumpEvent: Expand<JumpEvent>
  PlayEventTerse: PlayEvent
  InitEventTerse: InitEvent
  SeekEventTerse: SeekEvent
  JumpEventTerse: JumpEvent
}

/**
 * Triggered on the *start / stop* of an animation
 */
interface PlayEvent {
  /**
   * A message is sent for each event. `stop` is only sent if the TX is not interrupted
   */
  event: 'start' | 'stop'

  /** `Out` only on Out TX of a 2-Timeline animation */
  timeline: TimelineLabel

  /** Duration of animation in seconds */
  duration: number

  /** Play event always has value `play` */
  animationEvent: 'play'

  /** `backward` only on Out TX of 1-Timeline animation */
  direction: TimelineDirection

  /**
   * `In` on Out TX.
   *
   * `Out1` on In TX.
   *
   * `Out2` on In TX when previous Out TX was interrupted
   *
   * (Can this ever be `Out`?)
   */
  oldState: TimelineAnchor

  /**
   * In` on In TX.
   *
   * `Out1` on Out TX of 1-Timeline animation
   *
   * `Out2` on Out TX of 2-Timeline animation
   *
   * (Can this ever be `Out`?)
   */
  newState: TimelineAnchor

  /** Current time of TX in seconds*/
  time: number
}

/**
 * **Triggered on page load or settings change of an animation**
 *
 * @param timeline An init message is sent for each timeline
 * @param state SimpleTimeline when 1-Timeline, else Timeline. *`Out2` is on page load during any already-running animation to that state*
 */
interface InitEvent {
  // Defaults in all timelines / settings
  animationEvent: 'play'
  direction: 'forward'
  duration: number
  event: 'init'

  newState: TimelineAnchor
  oldState: TimelineAnchor
  state: TimelineAnchor

  timeline: TimelineLabel
}

/**
 * **Triggered when manually moving the playhead of the timeline**
 *
 * @param timeline Which timeline is being scrubbed
 * @param time The current time of the playhead
 * @param duration The duration of the animation
 */
interface SeekEvent {
  event: 'seek'
  timeline: TimelineAnchor
  duration: number
  time: number
}

/**
 * Based on Bodymovin source, this indicates jumping to the start or end of the animation
 * WIP
 */
interface JumpEvent {
  // Defaults in all timelines / settings
  animationEvent: 'jump'
  direction: 'forward'
  duration: number
  event: 'jump'

  newState: TimelineAnchor
  oldState: TimelineAnchor
  time: number

  timeline: TimelineLabel
}

type TimelineLabel = 'In' | 'Out'
type TimelineAnchor = 'In' | 'Out1' | 'Out2'
type TimelineDirection = 'forward' | 'backward'
