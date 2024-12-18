
import { sleep } from '@/utils/utils'
import React from 'react'

const Test = async () => {
  await sleep(5000)
  return (
    <div>Test</div>
  )
}

export default Test