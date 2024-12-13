import { LoaderCircle } from 'lucide-react'
import { useSpring, animated } from '@react-spring/web'
import React from 'react'

const Spinner = () => {

    return <LoaderCircle className=' animate-spin' />
}

export default Spinner