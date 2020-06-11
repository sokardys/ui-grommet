import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const useAOS = ({ config = {} }) => {
  useEffect(() =>
    AOS.init(config)
  , [])
}
