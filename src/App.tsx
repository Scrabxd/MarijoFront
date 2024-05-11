import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import InvitadoPage from './pages/invitado';
import InvitadosPage from './pages/invitados';


function App() {


  return (
    <Router basename='/'>
      <Routes>
        <Route path="/"element={<HomePage />} />
        <Route path="invitado" element={<InvitadoPage />} />
        <Route path="invitados" element={<InvitadosPage />} />
      </Routes>
    </Router>
  )
}

export default App
