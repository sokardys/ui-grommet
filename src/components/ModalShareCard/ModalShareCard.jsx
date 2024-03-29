import React, { useContext } from 'react'

import {
  ResponsiveContext
} from 'grommet'

import { Modal } from '../Modal'
import { ShareCard } from './ShareCard'

export const ModalShareCard = ({
  id = 'share',
  ...props
}) => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Modal.Content
      id={id}
      showCloseIcon={false}
      position={isSmall ? 'bottom' : 'center'}
      responsive={false}
    >
      {({ toggle }) => {
        return <ShareCard {...props} closeFn={toggle} />
      }}
    </Modal.Content>
  )
}
