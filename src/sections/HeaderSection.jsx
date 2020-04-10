import React, { useState, useEffect, useContext } from 'react'
import {
  Anchor,
  Box,
  Button,
  Image,
  ResponsiveContext,
  Text
} from 'grommet'
import {
  Burger,
  Modal,
  Section
} from '..'

const MobileMenu = ({ menuOptions, config, ...props }) =>
  <Box
    animation='fadeIn'
    direction='column'
    pad='medium'
    {...props}
  >
    {renderMenuOptions({
      options: menuOptions,
      config
    })}
  </Box>

const SubMenu = ({ menuOptions, config, ...props }) =>
  <Box
    align='center'
    direction='row'
    {...props}
  >
    {renderMenuOptions({
      options: menuOptions,
      config
    })}
  </Box>

const renderMenuOptions = ({
  options,
  config = {}
}) => {
  const { color, ...props } = config
  return options.map(({ type, label, labelConfig = {}, ...option }, index) => {
    const labelTag = <Text as='div' textAlign='center' {...labelConfig}>{label}</Text>
    return (
      <Box key={index} focusIndicator={false} flex='shrink' {...props}>
        {type === 'button'
          ? <Modal.Button Component={Button} focusIndicator={false} {...option} label={labelTag} />
          : <Anchor focusIndicator={false} color={color} {...option} label={labelTag} />}
      </Box>
    )
  })
}

const Logo = ({ width, src }) =>
  <Box
    width={width}
    pad='small'
  >
    <Image fill fit='contain' src={src} />
  </Box>

export const HeaderSection = ({
  logo = {},
  burgerSizes = ['small'],
  burgerColor = 'brand',
  menuOptions = [],
  menuConfig = {},
  mobileConfig = {},
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const size = useContext(ResponsiveContext)

  const toggleOpen = () => {
    setOpen(openOld => !openOld)
  }

  const isMobile = burgerSizes.includes(size)

  useEffect(() => {
    if (!isMobile && open) setOpen(false)
  }, [isMobile])

  return (
    <>
      <Section pad='none' {...props}>
        <Box
          pad='none'
          gap='small'
          justify='between'
          alignSelf='center'
          align='center'
          direction='row'
          fill
        >
          <a href='/'>
            <Logo {...logo} />
          </a>
          {!isMobile && <SubMenu menuOptions={menuOptions} config={menuConfig} />}
          {isMobile && <Box pad={{ vertical: 'small', horizontal: 'medium' }}><Burger cross={open} color={burgerColor} onClick={toggleOpen} /></Box>}
        </Box>
      </Section>
      {open && <MobileMenu menuOptions={menuOptions} config={mobileConfig} {...props} />}
    </>
  )
}
