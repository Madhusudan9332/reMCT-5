import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import NoPage from './pages/NoPage/NoPage'
import { Toaster } from "react-hot-toast";

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  )
}

export default App
