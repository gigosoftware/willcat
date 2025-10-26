import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PinEntry } from './pages/PinEntry';
import { Lounge } from './pages/Lounge';
import { Vision } from './pages/Vision';
import { Settings } from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<PinEntry />} />
          <Route path="/lounge" element={<Lounge />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;