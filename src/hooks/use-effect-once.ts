import { EffectCallback, useEffect, useRef } from 'react'

export const useEffectOnce = (cb: EffectCallback, condition = true) => {
  const isCalledRef = useRef(false)

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true
      cb()
    }
  }, [cb, condition])
}
