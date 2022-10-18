import type { Expand } from '../utils';
declare type Driver = {
    id: string;
    position: number | string;
    driverNo: number;
    firstname: string;
    lastname: string;
    name: string;
    team?: string;
    nation?: string;
    class?: {
        name?: string;
        bg?: string;
        fg?: string;
    };
};
export declare type MotorsportTime = {
    display: string;
    raw: number | null;
    prefix?: string;
    infix?: string;
    postfix?: string;
};
declare type RaceLap = {
    lap?: number;
    lastlap: MotorsportTime;
    interval: MotorsportTime;
    behind: MotorsportTime;
    delta: MotorsportTime;
    total: MotorsportTime;
    best: MotorsportTime;
    lastLapDiff?: MotorsportTime;
    speed?: MotorsportTime;
    progress?: number;
    status?: string;
    sectors?: (MotorsportTime & {
        best?: MotorsportTime;
    })[];
    change?: number;
};
export declare type Motorsport = {
    driver: Driver;
    lap: {
        race: RaceLap;
        qual: RaceLap;
    };
    grid: Driver & {
        qual: MotorsportTime;
    };
};
export declare type MotorsportRecord = 'personal' | 'class' | 'track' | 'none' | null;
export declare type MotorsportDriver = Driver;
export declare type MotorsportRaceLap = RaceLap;
export declare type MotorsportRow = Expand<Driver & RaceLap>;
export declare type MotorsportMarker = ({
    className?: string;
    position?: number;
} & {
    marker: 'up';
}) | {
    marker: 'down';
} | {
    marker: 'finished';
};
export declare type MotorsportBestLap = {
    className?: string;
    position?: number;
    time: MotorsportTime | null;
    name: string;
    lap?: number;
};
export declare type MotorsportLiveResults = {
    title: string | undefined;
    rows: MotorsportRow[];
    markers: MotorsportMarker[];
    bestLap?: MotorsportBestLap;
    intervals: {
        interval: MotorsportTime;
        position: number | string;
    }[];
};
export declare type MotorsportLive = {
    results: MotorsportLiveResults[];
    flag?: string;
    raceTitle: string;
    currentLap: number;
    lapsToGo?: number;
    time?: {
        elapsed?: string;
        remaining?: string;
    };
    source: string;
};
export declare type GridData = {
    row: number;
    pos1: MotorsportRow['position'] | string;
    name1: MotorsportRow['name'];
    lastname1: MotorsportRow['lastname'];
    driverNo1: MotorsportRow['driverNo'] | string;
    time1?: MotorsportTime['display'];
    behind1?: MotorsportTime['display'];
    pos2: MotorsportRow['position'] | string;
    name2: MotorsportRow['name'];
    lastname2: MotorsportRow['lastname'];
    driverNo2: MotorsportRow['driverNo'] | string;
    time2?: MotorsportTime['display'];
    behind2?: MotorsportTime['display'];
};
export {};
