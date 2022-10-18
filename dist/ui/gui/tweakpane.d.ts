import type { FolderApi } from '@tweakpane/core';
import type { UIFieldDefinition, UIGroupDefinition } from '../../types/widget';
declare type RootApi = FolderApi & {
    importPreset(preset: Record<string, unknown>): void;
    exportPreset(): Record<string, unknown>;
    refresh(): void;
};
export declare function addTweakpaneInputs({ controls, pane, fields, groups, }: {
    controls: any;
    pane: RootApi;
    fields: Record<string, UIFieldDefinition>;
    groups: Record<string, UIGroupDefinition>;
}): {
    folders: FolderApi[];
};
export declare function enableTweakpaneLocalStorage(pane: RootApi, defaults: any): void;
export {};
