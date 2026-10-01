import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AudioController from './AudioController'
import BackToTop from './BackToTop'
import { useAudio } from '../context/AudioContext'

export default function Layout() {
  const location = useLocation()
  const { setPath } = useAudio()

  useEffect(() => {
    window.scrollTo(0, 0)
    setPath(location.pathname)
  }, [location.pathname, setPath])

  return (
    <div className="min-h-screen bg-cream text-graphite">
      <Navbar />
      <Outlet />
      <Footer />
      <AudioController />
      <BackToTop />
    </div>
  )
}
