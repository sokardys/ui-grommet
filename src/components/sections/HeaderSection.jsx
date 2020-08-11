import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import {
  Anchor,
  Box,
  ResponsiveContext,
  Text
} from 'grommet'

import { Burger } from '../Burger'
import { Logo } from '../Logo'
import { Modal } from '../Modal'
import { Section } from '../Section'

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
  return options.map(({ type = 'link', label, labelConfig = {}, as, href, onClick, ...option }, index) => {
    const labelTag = <Text as='div' truncate textAlign='center' {...labelConfig}>{label}</Text>
    const optionClick = () => {
      onClick && onClick()
      closeFn()
    }

    const renderButton = () =>
      <Modal.Button
        color={color}
        focusIndicator={false}
        {...option}
        onClick={optionClick}
        label={labelTag}
      />

    const renderLink = () =>
      <Link href={href} as={as}>
        <Anchor
          focusIndicator={false}
          color={color}
          {...option}
          onClick={optionClick}
          label={labelTag}
        />
      </Link>

    const renderExternalLink = () =>
      <Anchor
        href={href}
        focusIndicator={false}
        color={color}
        {...option}
        onClick={optionClick}
        label={labelTag}
      />

    return (
      <Box key={index} focusIndicator={false} flex='shrink' {...props}>
        {type === 'button' ? renderButton() : type === 'external' ? renderExternalLink() : renderLink()}
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
  menuMobileOptions = [],
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
          <Box align='end' direction='row'>
            {!isMobile &&
              <SubMenu
                menuOptions={menuOptions}
                config={menuConfig}
                renderMenu={renderMenu}
                closeFn={closeFn}
              />}
            {isMobile && menuMobileOptions.length > 0 &&
              <SubMenu
                menuOptions={menuMobileOptions}
                config={menuConfig}
                renderMenu={renderMenu}
                closeFn={closeFn}
              />}
            {isMobile &&
              <Box pad={{ vertical: 'small', horizontal: 'medium' }}>
                <Burger cross={open} color={burgerColor} onClick={toggleOpen} />
              </Box>}
          </Box>
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
