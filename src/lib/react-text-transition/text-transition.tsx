import type { SpringConfig } from '@react-spring/web'
import { useSpring, useTransition, animated, config } from '@react-spring/web'
import type { ComponentChildren } from 'preact'
import type { CSSProperties } from 'preact/compat'
import { useRef, useState, useLayoutEffect } from 'preact/hooks'
import type { JSXInternal } from 'preact/src/jsx'

type Alignment = 'left' | 'right' | 'center'

type TextTransitionProps = {
  readonly direction?: 'up' | 'down'
  readonly yoyo?: boolean
  readonly align?: Alignment
  readonly inline?: boolean
  readonly ellipsis?: boolean
  readonly delay?: number
  readonly springConfig?: SpringConfig
  readonly class?: string
  readonly style?: CSSProperties
  readonly children: ComponentChildren
  readonly from?: JSXInternal.CSSProperties
  readonly enter?: JSXInternal.CSSProperties
  readonly leave?: JSXInternal.CSSProperties
}

const justification: Record<Alignment, string> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

const transitionDefaults = {
  fromDown: { opacity: 0, transform: `translateY(-100%)` },
  fromUp: { opacity: 0, transform: `translateY(100%)` },
  enter: { opacity: 1, transform: `translateY(0%)` },
  leaveDown: { opacity: 0, transform: `translateY(100%)`, position: 'absolute' },
  leaveUp: { opacity: 0, transform: `translateY(-100%)`, position: 'absolute' },
}

const childEllipsisStyles = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

const TextTransition: React.FC<TextTransitionProps> = (props) => {
  const {
    direction = 'up',
    align = 'center',
    inline = false,
    ellipsis = false,
    springConfig = config.default,
    delay = 0,
    class: className,
    style,
    children,
    from,
    enter,
    leave,
  } = props

  const initialRun = useRef(true)

  const transitions = useTransition([children], {
    // TODO - implement yoyo
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

  useLayoutEffect(() => {
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
        whiteSpace: inline ? 'nowrap' : 'normal',
        display: inline ? 'inline-flex' : 'flex',
        justifyContent: justification[align],
        height: heightRef.current,
        overflow: ellipsis ? 'hidden' : 'initial',
        ...style,
      }}
    >
      {transitions((styles, item) => (
        <animated.div
          style={ellipsis ? { ...styles, ...childEllipsisStyles } : { ...styles }}
          ref={item === children ? currentRef : undefined}
          children={item}
        />
      ))}
    </animated.div>
  )
}

export default TextTransition
