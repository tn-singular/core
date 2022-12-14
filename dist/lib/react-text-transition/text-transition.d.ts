import type { SpringConfig } from '@react-spring/web';
import type { ComponentChildren } from 'preact';
import type { CSSProperties } from 'preact/compat';
import type { JSXInternal } from 'preact/src/jsx';
declare type Alignment = 'left' | 'right' | 'center';
declare type TextTransitionProps = {
    readonly direction?: 'up' | 'down';
    readonly yoyo?: boolean;
    readonly align?: Alignment;
    readonly inline?: boolean;
    readonly ellipsis?: boolean;
    readonly nowrap?: boolean;
    readonly delay?: number;
    readonly springConfig?: SpringConfig;
    readonly class?: string;
    readonly style?: CSSProperties;
    readonly childStyle?: CSSProperties;
    readonly children: ComponentChildren;
    readonly from?: JSXInternal.CSSProperties;
    readonly enter?: JSXInternal.CSSProperties;
    readonly leave?: JSXInternal.CSSProperties;
};
declare const TextTransition: React.FC<TextTransitionProps>;
export default TextTransition;
