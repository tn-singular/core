function get(obj) {
    return obj.peek ? obj.peek() : obj;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function set(obj, value) {
    return obj && typeof obj === 'object' && 'value' in obj ? (obj.value = value) : (obj = value);
}
export function addTweakpaneInputs({ controls, pane, fields, groups, }) {
    const folders = [];
    const stateFolder = pane.addFolder({ title: 'STATE' });
    const stateInput = stateFolder.addInput(get(controls), 'in', { label: 'IN' });
    stateInput.on('change', (val) => {
        set(controls.in, val.value);
    });
    for (const [groupName, { childIds }] of Object.entries(groups)) {
        const folder = pane.addFolder({
            title: groupName,
            expanded: groupName === 'Controls',
        });
        for (const fieldName of childIds) {
            const field = fields[fieldName];
            if (!field) {
                console.warn(`No field found for ${fieldName}`);
                continue;
            }
            switch (field.type) {
                case 'number': {
                    const input = folder.addInput(get(controls), fieldName, {
                        min: field.max === undefined ? undefined : field.min,
                        max: field.min === undefined ? undefined : field.max,
                        step: field.step,
                    });
                    input.on('change', (val) => {
                        set(controls[fieldName], val.value);
                    });
                    break;
                }
                case 'font': {
                    const fontFolder = folder.addFolder({
                        title: fieldName,
                        expanded: false,
                    });
                    fontFolder.addInput(get(controls[fieldName]), 'alignment', {
                        label: 'alignment',
                        options: {
                            left: 'left',
                            center: 'center',
                            right: 'right',
                            justify: 'justify',
                        },
                    });
                    fontFolder.addInput(get(controls[fieldName]), 'italic', {
                        label: 'italic',
                    });
                    fontFolder.addInput(get(controls[fieldName]), 'underline', {
                        label: 'underline',
                    });
                    fontFolder.addInput(get(controls[fieldName].fontData), 'family', {
                        label: 'family',
                    });
                    fontFolder.addInput(get(controls[fieldName].fontData), 'weight', {
                        label: 'weight',
                        options: {
                            100: 100,
                            200: 200,
                            300: 300,
                            400: 400,
                            500: 500,
                            600: 600,
                            700: 700,
                            800: 800,
                            900: 900,
                        },
                    });
                    fontFolder.on('change', (ev) => {
                        if (!ev.presetKey)
                            return;
                        if (ev.presetKey === 'family' || ev.presetKey === 'weight') {
                            set(controls[fieldName].fontData[ev.presetKey], ev.value);
                        }
                        else {
                            set(controls[fieldName][ev.presetKey], ev.value);
                        }
                    });
                    break;
                }
                case 'selection': {
                    const input = folder.addInput(get(controls), fieldName, {
                        label: field.title,
                        options: Object.fromEntries([
                            ...field.selections.map((selection) => [selection.title, selection.id]),
                        ]),
                    });
                    input.on('change', (val) => {
                        set(controls[fieldName], val.value);
                    });
                    break;
                }
                case 'timecontrol': {
                    const startStop = folder.addButton({ title: 'start', label: fieldName });
                    const reset = folder.addButton({ title: 'reset', label: fieldName });
                    startStop.on('click', () => {
                        const prev = get(controls[fieldName].isRunning);
                        set(controls[fieldName].isRunning, !prev);
                        startStop.title = prev ? 'start' : 'pause';
                    });
                    reset.on('click', () => {
                        set(controls[fieldName].isRunning, false);
                        startStop.title = 'start';
                    });
                    break;
                }
                default: {
                    try {
                        const input = folder.addInput(get(controls), fieldName, {
                            label: field.title,
                        });
                        input.on('change', (val) => {
                            set(controls[fieldName], val.value);
                        });
                    }
                    catch (e) {
                        console.error(`Couldn't add input: ${JSON.stringify(field)} in group ${groupName}`);
                    }
                    break;
                }
            }
        }
        folders.push(folder);
    }
    return { folders };
}
const tweakpaneStorageKey = 'zentrum-tweakpane';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function enableTweakpaneLocalStorage(pane, defaults) {
    // Restoration
    const localData = localStorage.getItem(tweakpaneStorageKey);
    if (localData) {
        pane.importPreset(JSON.parse(localData));
    }
    // Storage on each change
    pane.on('change', () => localStorage.setItem(tweakpaneStorageKey, JSON.stringify(pane.exportPreset())));
    // const refresh = pane.addButton({ title: 'Refresh', label: '🍋', index: 0 });
    // refresh.on('click', () => pane.refresh());
    // Reset to defaults
    const reset = pane.addButton({ title: 'Reset', label: '✨', index: 0 });
    reset.on('click', () => pane.importPreset(defaults));
}
//# sourceMappingURL=tweakpane.js.map