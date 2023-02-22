import type { SingularAnimation } from './animation';
export type SingularWidgetArgs = {
    onInit: (...args: unknown[]) => unknown;
    onValue: (json: Record<string, unknown>) => unknown;
    onButtonClicked?: (buttonId: string) => unknown;
    onEditComp?: (...args: unknown[]) => unknown;
    onAnimation?: (event: SingularAnimation['Event']) => unknown;
};
