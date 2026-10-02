import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './ui'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import Business from './pages/Business'
import Journey from './pages/Journey'
import Appendix from './pages/Appendix'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Problem />} />
          <Route path="solution" element={<Solution />} />
          <Route path="business" element={<Business />} />
          <Route path="journey" element={<Journey />} />
          <Route path="appendix" element={<Appendix />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
