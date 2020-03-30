import { useRef, useEffect } from 'react'

export const useEffectAfterMount = (cb, dependencies = []) => {
  const justMounted = useRef(true)
  useEffect(() => {
    if (!justMounted.current) {
      return cb()
    }
    justMounted.current = false
  }, dependencies)
}
