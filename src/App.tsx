import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Chitiet from "./components/Chitiet"
import Thanhtoan from './components/Thanhtoan';
import Thanks from './components/Thanks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chitiet" element={<Chitiet />} />
        <Route path="/thanhtoan" element={<Thanhtoan />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  )
}

export default App