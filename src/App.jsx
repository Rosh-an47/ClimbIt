import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Business from './pages/Business'
import Journey from './pages/Journey'
import Appendix from './pages/Appendix'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="business" element={<Business />} />
          <Route path="journey" element={<Journey />} />
          <Route path="appendix" element={<Appendix />} />
          <Route path="contact" element={<Navigate to="/appendix" replace />} />
          <Route path="problem" element={<Navigate to="/#problem" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
