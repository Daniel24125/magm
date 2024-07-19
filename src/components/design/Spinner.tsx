import { LoaderCircle } from 'lucide-react'
import { useSpring, animated } from '@react-spring/web'
import React from 'react'

const Spinner = () => {
    const props = useSpring({
        from: { x: 0 },
        to: { x: 360 },
        loop: true
    })
    return <animated.div
    style={{ transform: props.x.to(value => `rotate(${value}deg)`) }}
>
    <LoaderCircle />
</animated.div>
}

export default Spinner