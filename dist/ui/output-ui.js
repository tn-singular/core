import { isNode } from 'browser-or-node';
import clipboard from 'clipboardy';
import pc from 'picocolors';
export async function outputUI(model) {
    if (isNode) {
        await import('fs').then((mod) => {
            const writeFile = mod.writeFile;
            const definition = JSON.stringify({ model });
            clipboard.writeSync(definition);
            console.log(pc.green(`📋 Copied UI Model @ ${new Date().toLocaleTimeString()}`));
            writeFile('ui.json', definition, () => undefined);
            console.log(pc.green(`💾 Updated ui.json`));
        });
    }
}
//# sourceMappingURL=output-ui.js.map