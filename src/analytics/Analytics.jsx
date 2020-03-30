import { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

export const Analytics = ({ trackerId, ...rest }) => {
  const { asPath } = useRouter()
  const [initialized, setInitialized] = useState()

  useEffect(() => {
    if (!initialized) {
      ReactGA.initialize(trackerId, { ...rest })
      setInitialized(true)
    }
    if (window && asPath) {
      ReactGA.set({ page: asPath })
      ReactGA.pageview(asPath)
    }
  }, [initialized, asPath])

  return null
}

Analytics.displayName = 'Analytics'
Analytics.propTypes = {
  trackerId: PropTypes.string.isRequired
}
