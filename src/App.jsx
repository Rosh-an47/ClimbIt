import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AudioProvider } from './context/AudioContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Problem from './pages/Problem'
import HowItWorks from './pages/HowItWorks'
import Business from './pages/Business'
import Journey from './pages/Journey'
import Contact from './pages/Contact'

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="problem" element={<Problem />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="business" element={<Business />} />
            <Route path="journey" element={<Journey />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  )
}
