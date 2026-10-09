import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LocaleLayout from './components/LocaleLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function CatchAll() {
  const { pathname } = useLocation()
  return <Navigate to={pathname.startsWith('/en') ? '/en' : '/'} replace />
}

const pages = (
  <>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="terms" element={<TermsPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
  </>
)

interface AppProps {
  basename?: string
}

function App({ basename = '/' }: AppProps) {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<LocaleLayout locale="ar" />}>
          {pages}
        </Route>
        <Route path="/en" element={<LocaleLayout locale="en" />}>
          {pages}
        </Route>
        <Route path="*" element={<CatchAll />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
