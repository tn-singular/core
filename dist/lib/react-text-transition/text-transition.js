import { jsx as _jsx } from "preact/jsx-runtime";
import { useSpring, useTransition, animated, config } from '@react-spring/web';
import { useRef, useState, useEffect } from 'preact/hooks';
const TextTransition = (props) => {
    const { direction = 'up', inline = false, springConfig = config.default, delay = 0, className, style, children, } = props;
    const initialRun = useRef(true);
    const transitions = useTransition([children], {
        from: { opacity: 0, transform: `translateY(${direction === 'down' ? '-100%' : '100%'})` },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: {
            opacity: 0,
            transform: `translateY(${direction === 'down' ? '100%' : '-100%'})`,
            position: 'absolute',
        },
        config: springConfig,
        immediate: initialRun.current,
        delay: !initialRun.current ? delay : undefined,
    });
    const [width, setWidth] = useState(0);
    const currentRef = useRef(null);
    const heightRef = useRef('auto');
    useEffect(() => {
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
            ...style,
            whiteSpace: inline ? 'nowrap' : 'normal',
            display: inline ? 'inline-flex' : 'flex',
            height: heightRef.current,
        }, children: transitions((styles, item) => (_jsx(animated.div, { style: { ...styles, width: '100%' }, ref: item === children ? currentRef : undefined, children: item }))) }));
};
export default TextTransition;
//# sourceMappingURL=text-transition.js.map