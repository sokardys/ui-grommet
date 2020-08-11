import { useRef, useEffect } from 'react'
import Clipboard from 'clipboard'

export const useClipboardText = (text, onCopySuccess = () => {}) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const cb = new Clipboard(buttonRef.current, {
      text: () => text
    })
    cb.on('success', (e) => {
      onCopySuccess()
    })
    return () => {
      cb.destroy()
    }
  }, [])

  return [buttonRef]
}
