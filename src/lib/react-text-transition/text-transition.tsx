import type { SpringConfig } from '@react-spring/web'
import { useSpring, useTransition, animated, config } from '@react-spring/web'
import type { ComponentChildren } from 'preact'
import type { CSSProperties } from 'preact/compat'
import { useRef, useState, useEffect } from 'preact/hooks'
import type { JSXInternal } from 'preact/src/jsx'

type TextTransitionProps = {
  readonly direction?: 'up' | 'down'
  readonly inline?: boolean
  readonly delay?: number
  readonly springConfig?: SpringConfig
  readonly className?: string
  readonly style?: CSSProperties
  readonly children: ComponentChildren
  readonly from?: JSXInternal.CSSProperties
  readonly enter?: JSXInternal.CSSProperties
  readonly leave?: JSXInternal.CSSProperties
}

const transitionDefaults = {
  fromDown: { opacity: 0, transform: `translateY(-100%)` },
  fromUp: { opacity: 0, transform: `translateY(100%)` },
  enter: { opacity: 0, transform: `translateY(0%)` },
  leaveDown: { opacity: 0, transform: `translateY(100%)`, position: 'absolute' },
  leaveUp: { opacity: 0, transform: `translateY(-100%)`, position: 'absolute' },
}

const TextTransition: React.FC<TextTransitionProps> = (props) => {
  const {
    direction = 'up',
    inline = false,
    springConfig = config.default,
    delay = 0,
    className,
    style,
    children,
    from,
    enter,
    leave,
  } = props

  const initialRun = useRef(true)

  const transitions = useTransition([children], {
    from: from ?? transitionDefaults[direction === 'down' ? 'fromDown' : 'fromUp'],
    enter: enter ?? transitionDefaults.enter,
    leave: leave ?? transitionDefaults[direction === 'down' ? 'leaveDown' : 'leaveUp'],
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  })

  const [width, setWidth] = useState<number>(0)
  const currentRef = useRef<HTMLDivElement>(null)
  const heightRef = useRef<number | string>('auto')

  useEffect(() => {
    initialRun.current = false

    const elem = currentRef.current

    if (!elem) {
      return
    }

    const { width, height } = elem.getBoundingClientRect()
    setWidth(width)
    heightRef.current = height
  }, [children, setWidth, currentRef])

  const widthTransition = useSpring({
    to: { width },
    config: springConfig,
    immediate: initialRun.current,
    delay: !initialRun.current ? delay : undefined,
  })

  const combinedClassName = className ? `text-transition ${className}` : 'text-transition'

  return (
    <animated.div
      className={combinedClassName}
      style={{
        ...(inline && !initialRun.current ? widthTransition : undefined),
        ...style,
        whiteSpace: inline ? 'nowrap' : 'normal',
        display: inline ? 'inline-flex' : 'flex',
        height: heightRef.current,
      }}
    >
      {transitions((styles, item) => (
        <animated.div
          style={{ ...styles, width: '100%' }}
          ref={item === children ? currentRef : undefined}
          children={item}
        />
      ))}
    </animated.div>
  )
}

export default TextTransition
