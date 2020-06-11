import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import {
  Anchor,
  Box,
  Button,
  ResponsiveContext,
  Text
} from 'grommet'
import {
  Burger,
  Logo,
  Modal,
  Section
} from '..'

const MobileMenu = ({
  menuOptions,
  config,
  closeFn,
  renderMenu = renderMenuOptions,
  ...props
}) =>
  <Box
    animation='fadeIn'
    direction='column'
    pad='medium'
    {...props}
  >
    {renderMenu({
      options: menuOptions,
      config,
      closeFn
    })}
  </Box>

const SubMenu = ({
  menuOptions,
  config,
  closeFn,
  renderMenu = renderMenuOptions,
  ...props
}) =>
  <Box
    align='center'
    direction='row'
    {...props}
  >
    {renderMenu({
      options: menuOptions,
      config,
      closeFn
    })}
  </Box>

const renderMenuOptions = ({
  options,
  config = {},
  closeFn = () => {}
}) => {
  const { color, ...props } = config
  return options.map(({ type, label, labelConfig = {}, onClick, ...option }, index) => {
    const labelTag = <Text as='div' truncate textAlign='center' {...labelConfig}>{label}</Text>
    const optionClick = () => {
      onClick && onClick()
      closeFn()
    }
    return (
      <Box key={index} focusIndicator={false} flex='shrink' {...props}>
        {type === 'button'
          ? <Modal.Button
            Component={Button}
            focusIndicator={false}
            alignSelf='center'
            {...option}
            onClick={optionClick}
            label={labelTag}
          />
          : <Anchor
            focusIndicator={false}
            color={color}
            {...option}
            onClick={optionClick}
            label={labelTag}
          />}
      </Box>
    )
  })
}

export const HeaderSection = ({
  className,
  logo = {},
  burgerSizes = ['small'],
  burgerColor = 'brand',
  menuOptions = [],
  menuConfig = {},
  mobileConfig = {},
  renderMenu,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const size = useContext(ResponsiveContext)

  const toggleOpen = () => {
    setOpen(openOld => !openOld)
  }

  const closeFn = () => {
    if (open) {
      setOpen(!open)
    }
  }

  const isMobile = burgerSizes.includes(size)

  useEffect(() => {
    if (!isMobile && open) setOpen(false)
  }, [isMobile])

  return (
    <div className={className}>
      <Section className='desktop-menu' pad='small' {...props}>
        <Box
          pad='none'
          gap='small'
          justify='between'
          alignSelf='center'
          align='center'
          direction='row'
          fill
        >
          <Link href='/'>
            <a><Logo {...logo} /></a>
          </Link>
          {!isMobile &&
            <SubMenu
              menuOptions={menuOptions}
              config={menuConfig}
              renderMenu={renderMenu}
              closeFn={closeFn}
            />}
          {isMobile &&
            <Box pad={{ vertical: 'small', horizontal: 'medium' }}>
              <Burger cross={open} color={burgerColor} onClick={toggleOpen} />
            </Box>}
        </Box>
      </Section>
      {open &&
        <MobileMenu
          className='mobile-menu'
          menuOptions={menuOptions}
          config={mobileConfig}
          renderMenu={renderMenu}
          closeFn={closeFn}
          {...props}
        />}
    </div>
  )
}
