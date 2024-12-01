import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Availablegames from './availablegames';
import KanaWarrior from './KanaWarrior';
import KanjiWarrior from './KanjiWarrior';
import BunpouWarrior from './BunpouWarrior';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Availablegames />} />
          <Route path="/kana-warrior" element={<KanaWarrior />} />
          <Route path="/kanji-warrior" element={<KanjiWarrior />} />
          <Route path="/bunpou-warrior" element={<BunpouWarrior />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
