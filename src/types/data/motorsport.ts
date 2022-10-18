import type { Expand } from '../utils'

type Driver = {
  id: string
  position: number | string
  driverNo: number
  firstname: string
  lastname: string
  name: string
  team?: string
  nation?: string
  class?: {
    name?: string
    bg?: string
    fg?: string
  }
}

export type MotorsportTime = {
  display: string
  raw: number | null
  prefix?: string
  infix?: string
  postfix?: string
}

type RaceLap = {
  lap?: number
  lastlap: MotorsportTime
  interval: MotorsportTime
  behind: MotorsportTime
  delta: MotorsportTime
  total: MotorsportTime
  best: MotorsportTime
  lastLapDiff?: MotorsportTime
  speed?: MotorsportTime
  progress?: number
  status?: string
  sectors?: (MotorsportTime & { best?: MotorsportTime })[]
  change?: number
}

export type Motorsport = {
  driver: Driver
  lap: {
    race: RaceLap
    qual: RaceLap
  }
  grid: Driver & {
    qual: MotorsportTime
  }
}

export type MotorsportRecord = 'personal' | 'class' | 'track' | 'none' | null
export type MotorsportDriver = Driver
export type MotorsportRaceLap = RaceLap
export type MotorsportRow = Expand<Driver & RaceLap>

export type MotorsportMarker =
  | ({
      className?: string
      position?: number
    } & { marker: 'up' })
  | { marker: 'down' }
  | { marker: 'finished' }

export type MotorsportBestLap = {
  className?: string
  position?: number
  time: MotorsportTime | null
  name: string
  lap?: number
}

export type MotorsportLiveResults = {
  title: string | undefined
  rows: MotorsportRow[]
  markers: MotorsportMarker[]
  bestLap?: MotorsportBestLap
  intervals: { interval: MotorsportTime; position: number | string }[]
}

export type MotorsportLive = {
  results: MotorsportLiveResults[]
  flag?: string
  raceTitle: string
  currentLap: number
  lapsToGo?: number
  time?: {
    elapsed?: string
    remaining?: string
  }
  source: string
}

export type GridData = {
  row: number
  pos1: MotorsportRow['position'] | string
  name1: MotorsportRow['name']
  lastname1: MotorsportRow['lastname']
  driverNo1: MotorsportRow['driverNo'] | string
  time1?: MotorsportTime['display']
  behind1?: MotorsportTime['display']
  pos2: MotorsportRow['position'] | string
  name2: MotorsportRow['name']
  lastname2: MotorsportRow['lastname']
  driverNo2: MotorsportRow['driverNo'] | string
  time2?: MotorsportTime['display']
  behind2?: MotorsportTime['display']
}
