import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const title = `MM | ${pathname
      .replace('/', '')
      .replace(/^\w/, c => c.toUpperCase()) || 'Home'}`
    document.title = title
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
