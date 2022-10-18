import type { SingularWidgetArgs } from './widget';
declare global {
    let SingularWidget: {
        init: (args: SingularWidgetArgs) => void;
        compositionId: string;
        createTimeControl: () => unknown;
        getStyle: (id: string) => unknown;
        importComposition: (url: string, importCallback: unknown) => unknown;
        importCompositionFromJSON: (compJSON: unknown, importCallback: unknown) => unknown;
        instanceId: undefined;
        instantiate: (compName: string, domTarget: unknown, instantiateCallback: unknown) => unknown;
        log: {
            info: () => unknown;
            warn: () => unknown;
            error: () => unknown;
        };
        removeComposition: (compId: string) => unknown;
        sendCustomMessage: (obj: unknown) => unknown;
        tileId: string;
        tileName: string;
        widgetId: number;
        widgetVersion: undefined;
    };
}
