import { jsx as _jsx } from "preact/jsx-runtime";
import { useSpring, useTransition, animated, config } from '@react-spring/web';
import { useRef, useState, useLayoutEffect } from 'preact/hooks';
const justification = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
const transitionDefaults = {
    fromDown: { opacity: 0, transform: `translateY(-100%)` },
    fromUp: { opacity: 0, transform: `translateY(100%)` },
    enter: { opacity: 1, transform: `translateY(0%)` },
    leaveDown: { opacity: 0, transform: `translateY(100%)`, position: 'absolute' },
    leaveUp: { opacity: 0, transform: `translateY(-100%)`, position: 'absolute' },
};
const childEllipsisStyles = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
};
const TextTransition = (props) => {
    const { direction = 'up', align = 'center', inline = false, ellipsis = false, nowrap = false, springConfig = config.default, delay = 0, class: className, style, childStyle, children, from, enter, leave, } = props;
    const initialRun = useRef(true);
    const transitions = useTransition([children], {
        // TODO - implement yoyo
        from: from ?? transitionDefaults[direction === 'down' ? 'fromDown' : 'fromUp'],
        enter: enter ?? transitionDefaults.enter,
        leave: leave ?? transitionDefaults[direction === 'down' ? 'leaveDown' : 'leaveUp'],
        config: springConfig,
        immediate: initialRun.current,
        delay: !initialRun.current ? delay : undefined,
    });
    const [width, setWidth] = useState(0);
    const currentRef = useRef(null);
    const heightRef = useRef('auto');
    useLayoutEffect(() => {
        initialRun.current = false;
        const elem = currentRef.current;
        if (!elem) {
            return;
        }
        const { width, height } = elem.getBoundingClientRect();
        setWidth(width);
        heightRef.current = height;
    }, [children, setWidth, currentRef]);
    const widthTransition = useSpring({
        to: { width },
        config: springConfig,
        immediate: initialRun.current,
        delay: !initialRun.current ? delay : undefined,
    });
    const combinedClassName = className ? `text-transition ${className}` : 'text-transition';
    return (_jsx(animated.div, { className: combinedClassName, style: {
            ...(inline && !initialRun.current ? widthTransition : undefined),
            whiteSpace: inline ? 'nowrap' : 'normal',
            display: inline ? 'inline-flex' : 'flex',
            justifyContent: justification[align],
            height: heightRef.current,
            overflow: ellipsis ? 'hidden' : 'initial',
            ...style,
        }, children: transitions((styles, item) => (_jsx(animated.div, { style: ellipsis
                ? { ...styles, ...childStyle, ...childEllipsisStyles }
                : nowrap
                    ? { ...styles, ...childStyle, whiteSpace: 'nowrap' }
                    : { ...styles, ...childStyle }, ref: item === children ? currentRef : undefined, children: item }))) }));
};
export default TextTransition;
//# sourceMappingURL=text-transition.js.map