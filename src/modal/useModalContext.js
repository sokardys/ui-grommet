import React, { useContext } from 'react'

export const ModalContext = React.createContext()

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModalContext must be used within a <ModalProvider />')
  }
  return context
}
