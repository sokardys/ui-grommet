import { useRef, useLayoutEffect } from 'react'
import Clipboard from 'clipboard'

export const useClipboard = (onCopySuccess = () => {}) => {
  const buttonRef = useRef(null)
  const targetRef = useRef(null)

  useLayoutEffect(() => {
    const cb = new Clipboard(buttonRef.current, {
      text: () => targetRef.current.value
    })
    cb.on('success', (e) => {
      onCopySuccess()
    })
    return () => {
      cb.destroy()
    }
  }, [])

  return [buttonRef, targetRef]
}
